## Game Server REST API

This is a RESTful API for Strikebit.io games

## Installation

```bash
docker-compose up -d
```

### Run migrations and import seed data

```bash
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
```

### Usage 
Get a random question by category
```bash
curl http://localhost:3000/trivia/1/science/questions 
```
Answering a trivia question
```bash
curl -v -X POST -d '{"playerId":1,"answerId":2}' -H "Content-Type: application/json" http://localhost:3000/trivia/1/questions/1/answer
```
