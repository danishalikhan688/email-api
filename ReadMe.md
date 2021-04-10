/* 
- for project creation
  */

yarn init

yarn add express mongoose nodemon
yarn add cookie-parser
yarn add body-parser
yarn add cors
yarn add http-errors
yarn add path
yarn add global

or

yarn add express mongoose nodemon cookie-parser body-parser cors http-errors path

or

npm install express mongoose nodemon cookie-parser body-parser cors http-errors path
https://ebigwin.herokuapp.com/ | https://git.heroku.com/ebigwin.git

https://protected-forest-92985.herokuapp.com/ | https://git.heroku.com/protected-forest-92985.git


heroku main 

 git init
 git add .
 heroku create ebigwin
 git push heroku main

your port must be dynamic e.g  const PORT = process.env.PORT || 80;

 if old 
 rm yarn.lock
 git commit -am "Remove yarn lock file"
 git push heroku main