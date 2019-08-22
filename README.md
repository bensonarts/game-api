## Game REST API

This is a RESTful API for Strikebit.io games

## Installation

```bash
docker-compose up -d
```

### Create schema + install data fixtures

```bash
docker-compose exec gameapi sh
node data-fixtures.js
```
