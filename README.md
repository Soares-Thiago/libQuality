<h1 align="center">
    <a href="https://github.com/Soares-Thiago/libQuality">🔗 LibQuality</a>
</h1>
<p align="center"> Project created with For the NodeJS vacancy test at Venturus</p>

<h2 align="center">
🚀 To start the project:
</h2>
<p align="center"> 
  <ul>
    <li>Clone this repository</li>
    <li>Access the project folder and run the command 'npm install'</li>
    <li>Run this command to start the docker and create the 'sudo docker-compose up -d --build' containers - once this is done, you can access the API via the url "http: // localhost: 8080"</li>
  </ul>
</p>

<h2 align="center">
❗IMPORTANT
</h2>
<p align="center"> 
  <ul>
    See how to create a jwt token for personal access on gitHub, it is requested in the request header to get the information from the repository
  </ul>
   <a href='https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token' target='_Blank'>(https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)</a>
</p>

<h2 align="center">
🗒️ To see swagger docs:
</h2>
<p align="center"> 
  <ul>
    <li>http://localhost:8080/api-docs/</li>
  </ul>
</p>

<h2 align="center">
💻 Technologies used
</h2>
<p align="center"> 
  <ul>
    <li>NodeJS</li>
    <li>MongoDB 3.6.5</li>
  </ul>
</p>

<h2 align="center">
🗄️ Project Structure
</h2>
<p align="center"> 
  ├── src/ ───────────────────────────── API Source <br>
  │   ├── controllers/ ───────────────── API Controllers<br>
  │   ├── models/ ────────────────────── MySQL models<br>
  │   ├── services/ ──────────────────── External functions and helpers<br>
  │   ├── app.ts ───────────────────── App file<br>
  │   ├── index.ts ───────────────────── Main file<br>
  │   ├── routes.ts ───────────────────── Router file<br>
  ├── docker-compose.yml ─────────────── Docker Compose file<br>
  ├── Dockerfile ─────────────────── Docker config file<br>
  ├── README.md                       
</p>
