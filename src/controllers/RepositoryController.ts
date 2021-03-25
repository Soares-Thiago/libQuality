import {Request, Response} from 'express'
import RepositoryService from '../services/RepositoryService';
import Repository from '../models/Repository'
import SeachLog from '../models/SerchLog'

class RepositoryController {

  public async search (req: Request, res: Response): Promise<Response>{
    const searchRepo = req.query.searchRepo
    const token = req.headers.jwt_token
    const userGithub = req.headers.user
    if(!token){
        return res.status(401).json({error: "Invalid JWT_TOKEN"})
    }

    try{
        if(searchRepo){

          const isValidRepo = await RepositoryService.verifyRepository(searchRepo, token)

          if(!isValidRepo){
            throw new Error("Name of repository is invalid");
          }

          const repository = await Repository.findOne({ name: searchRepo.toString() })  

          if(repository){
            const dateRepo = repository.updatedAt

            const date_now = new Date();
              
            const difference = date_now.getTime() - dateRepo.getTime();
  
            const days = Math.ceil(difference / (1000 * 3600 * 24));
            if(days<=1){
              await SeachLog.create({user: userGithub ,repository: searchRepo})


              return res.status(200).json({
                name: repository.name,
                issues: repository.issues,
                avg_age: repository.avg_age,
                std_age: repository.std_age,
              })
            }
          }

          const data = await RepositoryService.searchRepo(searchRepo, token, userGithub)  

          return res.json(data)
        }
        throw new Error("Name of repository is empty");
        
    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async list (req: Request, res: Response): Promise<Response>{
    try{
      const repositories = await Repository.find().sort({ name : 'asc'})
      return res.status(200).json(repositories)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async listLog (req: Request, res: Response): Promise<Response>{
    try{
      const repositories = await SeachLog.find()
      return res.status(200).json(repositories)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

}

export default new RepositoryController()