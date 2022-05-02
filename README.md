# About Festywise
Festywise prototype is the rough idea for a web based application for local musicians to find nearby venues to perform at. The front end is managed with react and typescript. The database is postgresql and the backend is ruby on rails. These technologies are brought together with Docker for ease of use.

Currently the app is far from complete but to share some of my progress I am uploading user login and registration with a working map and some rough layout styling.

## Setup
```
docker-compose build
docker-compose up
docker-compose run backend rake db:setup
```

## Local Host URLs
- Rails Server: http://localhost:3000/
- React app: http://localhost:3001/

## Reset Database
```
sudo rm -rf tmp/db
sudo mkdir tmp/db
```

## Useful Docker Commands
```
docker exec -it festywise-alpha-db-1 bash
docker exec -it festywise-alpha-backend-1 bash
docker-compose run backend rake db:setup
docker-compose run backend rake db:migrate
```

## Postman Help
- Get all users [GET]: http://127.0.0.1:3000/api/users
- Get user by id [GET]: http://127.0.0.1:3000/api/users/3
- Delete user by id [DELETE]: http://127.0.0.1:3000/api/users/4
- Create user [POST]: http://127.0.0.1:3000/api/users
  - Use object below as body
```json
{
  "username": "{{$randomUserName}}",
  "email": "{{$randomEmail}}",
  "first_name": "{{$randomFirstName}}",
  "last_name": "{{$randomLastName}}"
}
```

# No Docker Setup
You can run each app standalone if you want to play with the frontend or backend apps by themselves. The front end env file needs a [google maps api key](https://developers.google.com/maps/documentation/javascript/get-api-key) for the map to work properly. For the backend you need to uncomment the host parameters in the backend/config/database.yml

## Backend
You need a postgresql service running for the DB. Uncomment lines 43 and 64 in the database config.
```
bundle install
rails db:setup
rails server
```

## Frontend
```
npm install
npm start
```