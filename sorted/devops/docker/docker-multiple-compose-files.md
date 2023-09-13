# Docker - Multiple Compose Files

## When To Use

- When several services reuse a common set of configuration options
- When you want override some attributes for different environments, for example [production](docker-compose-for-production) and development

## Override Attributes For Different Environments

`docker-compose.yml`

```yml
services:
  web:
    image: example/my_web_app:latest
    depends_on:
       db

  db:
    image: postgres:latest
```

`docker-compose.admin.yml`

```yml
services:
  dbadmin:
     build: database_admin/
     depends_on:
        - db
```

for normal environment `docker compose up -d`

for database backup `docker compose -f docker-compose.yml -f docker-compose.admin.yml up -d`

## Reuse Service

compose.yaml

```yml
service:
  web:
    extends:
      file: common-services.yml
      service: webapp
```

common-services.yml

```yml
services:
  webapp:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - "/data"
```
