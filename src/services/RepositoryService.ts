import math, {std} from 'mathjs'
import Repository from '../models/Repository'
import SeachLog from '../models/SerchLog'
import traverson from 'traverson'
import {promisify} from 'util'
import axios from 'axios'

class RepositoryServer {

  public async searchRepo (repo: any, token: any, userGithub: any){
  
    const hateoas = traverson
        .from(`https://api.github.com/search/issues?q=repo:${repo}+state:open&sort=created&order=desc&per_page=100&page=1`)
        .json()
        .linkHeader()
        .withRequestOptions({ 
            headers: 
            { 
                'Accept': 'application/vnd.github.v3+json', 
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36',
                'Authorization': `token ${token}` 
            }
        })
    
        const getResourceAsync = promisify(hateoas.getResource.bind(hateoas))
    
        let results = []
            , hateoasNext
            , getResourceAsyncNext
    
        let result = await getResourceAsync()
    
    
        let next = result._linkHeaders.next
    
        results.push(result)
    
        while (next) {
            hateoasNext = hateoas
                .follow('next')
            
            getResourceAsyncNext = promisify(hateoasNext.getResource.bind(hateoasNext))
    
            result = await getResourceAsyncNext()
            
            next = result._linkHeaders.next
            results.push(result)
        }

       
        //INICIO
        let daySum = 0, dayAvg = 0
        let newList = []
        let sum = 0
        let newList2 = []
        for (const [i, res] of results.entries()) {
          for (const [i, item] of res.items.entries()) {
            
            if(item.state === 'closed'){
              //primeiro devo calcular a diferenca de dias entre essas datas e fazer a media de dias que as issues ficam abertas
              let date_created = new Date(item.created_at);
              let date_closed = new Date(item.closed_at);
  
              const difference = date_closed.getTime() - date_created.getTime();
  
              const days = Math.ceil(difference / (1000 * 3600 * 24));
              sum += days
              newList2.push(days)
            }
            else{
              let date_created = new Date(item.created_at);
              let date_now = new Date();
              
              const difference = date_now.getTime() - date_created.getTime();
  
              const days = Math.ceil(difference / (1000 * 3600 * 24));
              sum += days
              newList2.push(days)
            }
          }
          
          daySum += sum
          newList.push(std(newList2))

          sum = 0 
          newList2 = []
        }

        //verificar se esse repositoprio ja existe no banco de dados
          //se sim atualizar os dados, se nao, criar
        const repository = await Repository.findOne({ name: repo })  

        if(repository){
          await Repository.updateOne({ name: repo },
                                      { 
                                        issues: result.total_count,
                                        avg_age: Math.round(daySum/result.total_count),
                                        std_age: Math.round(std(newList)),
                                      })
        }else{
          await Repository.create({ 
                                    name: repo,
                                    issues: result.total_count,
                                    avg_age: Math.round(daySum/result.total_count),
                                    std_age: Math.round(std(newList)),
                                  })
        }

        // gravar no banco a pesquisa, com o nome de quem pesquisou e o repositorio
        await SeachLog.create({user: userGithub, repository: repo})

        //FIM
        
        return ({
          repository: repo,
          issues: result.total_count, 
          avgAge: Math.round(daySum/result.total_count), 
          stdAge: Math.round(std(newList)) 
        })
  }

  public async verifyRepository(repo: any, token: any){
    const result = await axios.get(`https://api.github.com/search/issues?q=repo:${repo}`, {
      headers: {
        Authorization: 'Bearer ' + token 
      }
    })

    if(result.data.total_count){
      return true
    }
    return false

  }

}

export default new RepositoryServer()