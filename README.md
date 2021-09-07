<div align="center">
  <h1><strong>	🔥 MyContacts Back-end 🔥 </strong></h1>
</div>

<h3 align="center">
   <p> My API to CRUD contacts and list categories. </p> 
</h3>

<br>

## About the project <img src="gitHub-imgs/tic-computer-icon.svg" alt="docker" align="center" height="30">

  This API was made with `Express.js`, and I used the `Insomnia` to test the CRUD system. I created the Data Base using the `PostgreSQL` and I put it in a `Docker` container, so that makes the aplication more sophisticated and useful.

<br>

This API is be consumed by [MyContacts - frontend](https://github.com/nikolaslopes/MyContacts-frontend).

<br><br>

## Run aplication :running_woman:	

Note :raised_hand:: _&nbsp;_ I used `yarn` package in this project

Steps to run:

* You need had install [Docker](https://www.docker.com/get-started) and the [Postgres Image](https://hub.docker.com/_/postgres)

* Download the `zip project` or execute on terminal: `git clone https://github.com/nikolaslopes/MyContacts-backend.git`

* Open the folder in the terminal `cd MyContacts-backend`

* Run in the: `yarn install`

* Create the image, run in the terminal: `docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres` 

* Then, run in the terminal: `yarn dev`

* Open in the `Browser` or `Insomnia`: http://localhost:3001
 
<br><br>
  
## Techs :rocket:
- Express.js <img src="gitHub-imgs/nodejs-logo-icon.svg" alt="express" align="center" height="20">
- Docker <img src="gitHub-imgs/docker-icon2.svg" alt="docker" align="center" height="20">
- PostgreSQL <img src="gitHub-imgs/postgresql-icon.svg" alt="docker" align="center" height="20">
- Insomnia <img src="gitHub-imgs/insomnia-icon.svg" alt="docker" align="center" height="20">
    
<br><br>
   
## Author :man_technologist:

- GitHub: [nikolaslopes](https://github.com/nikolaslopes) :octocat:
- LinkedIn: [nikolas-lopes](https://www.linkedin.com/in/nikolas-lopes-b06524209/) <img src="gitHub-imgs/linkedin-icon.svg" alt="express" align="center" height="20">
  
<br>

<p>Thanks for your support :shipit:
