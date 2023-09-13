# Docker - Compose Network

## Service Network Setup

```yml
service:
  web:
    build: .
    ports:
      - "8000:8000"
  db:
    image: postgres 
    ports:
      - "8001:5432"
```

when run `docker compose up`, the following will happen

1. A [network]() called `myapp_default` is created
2. A container is created using `web`'s configuration. It joins the network `myapp_default` under the name `web`
3. A container is created using `db`'s configuration. It joins the network `myapp_default` under the name `db`

## Connect Services With Application Code

- In application code, connecting server use [service name](docker-compose.md#compose-service) as the hostname

```yaml
services:
  backend:
    image: python
    build: 
      context: flask
  mongo:
    image: mongo
```

Application Code

```py
from pymongo import MongoClient

client = MongoClient("mongo:27017")
```

- `mongo` is the **service name**

## Set Network Driver

```yml

```

