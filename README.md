<h1 align="center">
    <a href="https://github.com/Soares-Thiago/libQuality">π LibQuality</a>
</h1>
<p align="center"> Project created with For the NodeJS vacancy test at Venturus</p>

<h2 align="center">
π To start the project:
</h2>
<p align="center"> 
  <ul>
    <li>Clone this repository</li>
    <li>Access the project folder and run the command 'npm install'</li>
    <li>Run this command to start the docker and create the 'sudo docker-compose up -d --build' containers - once this is done, you can access the API via the url "http: // localhost: 8080"</li>
  </ul>
</p>

<h2 align="center">
βIMPORTANT
</h2>
<p align="center"> 
  <ul>
    See how to create a jwt token for personal access on gitHub, it is requested in the request header to get the information from the repository
  </ul>
   <a href='https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token' target='_Blank'>(https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)</a>
</p>

<h2 align="center">
ποΈ To see swagger docs:
</h2>
<p align="center"> 
  <ul>
    <li>http://localhost:8080/api-docs/</li>
  </ul>
</p>

<h2 align="center">
π» Technologies used
</h2>
<p align="center"> 
  <ul>
    <li>NodeJS</li>
    <li>MongoDB 3.6.5</li>
  </ul>
</p>

<h2 align="center">
ποΈ Project Structure
</h2>
<p> 
  βββ src/ βββββββββββββββββββββββββββββ API Source <br>
  β   βββ controllers/ βββββββββββββββββ API Controllers<br>
  β   βββ models/ ββββββββββββββββββββββ MySQL models<br>
  β   βββ services/ ββββββββββββββββββββ External functions and helpers<br>
  β   βββ app.ts βββββββββββββββββββββ App file<br>
  β   βββ index.ts βββββββββββββββββββββ Main file<br>
  β   βββ routes.ts βββββββββββββββββββββ Router file<br>
  βββ docker-compose.yml βββββββββββββββ Docker Compose file<br>
  βββ Dockerfile βββββββββββββββββββ Docker config file<br>
  βββ README.md                       
</p>
