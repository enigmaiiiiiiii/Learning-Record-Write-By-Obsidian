# Docker Compose File

* [What It Is](#what-it-is)
* [Take A Look](#take-a-look)
* [Mapping Host Ports](#mapping-host-ports)
* [Expose Internal Ports](#expose-internal-ports)
* [Volumes](#volumes)

## What It Is

- A File defining 
  - [services]()
  - [networks](docker-networking.md)
  - [volumes](docker-volume.md)
  - version(Optional)
  - configs
  - secrets
- A File with [yml](yaml.md) format
- Default name is `docker-compose.yml`, sometimes named `compose.yml`

## Take A Look

```yml
services:
  web:
    build:
    ports:
      - "5000:5000"
    volumes:
      - .:/code
    depends_on:
      - redis
  redis:
    image: redis
```

## Mapping Host Ports

short syntax

```yml
ports:
  - <host-port>:<container-port>
```

long syntax

```yml
ports:
  - target: <container-port>
    published: <host-port>
    protocol: tcp|udp
    mode: host|ingress
```

## Expose Internal Ports

`expose`

1. expose internal ports to other containers
2. not expose to host machine

```yml
expose:
  - "3000"
  - "8000"
```

## Volumes

Use to define [volumes](docker-volume.md) and [bind mounts](docker-bind-mounts.md) 

An Example Compose File

```yml
version: "3.8"
services:
  web:
    image: nginx:alpine
    volumes:
      - type: volume
        source: mydata
        target: /data
        volume:
          nocopy: true
      - type: bind
        source: ./static
        target: /opt/app/static

  db:
    image: postgres:latest
    volumes:
      - "/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock" # bind mount
      - "dbdata:/var/lib/postgresql/data" # bind volume

volumes:
  mydata:
  dbdata:
```

This Example Shows

1. `web` service defined [a volume](docker-volume.md) named `mydate` and a [bind mount](docker-bind-mounts.md)
2. **use old string format** to config `db` service:

- [a volume](docker-volume.md) named `dbdata` 
- A [bind mount](docker-bind-mounts.md)

Short Syntax

- `[SOURCE:]TARGET[:MODE]`
  - `SOURCE`: host path or volume name
  - `TARGET`: container path
  - `MODE`: `ro` for read-only, `rw`(default) for read-write

```yml
volumes:
  - ./source/path:./target/path:ro
```

Long Syntax

- long syntax allows the following fields
  - `type`
  - `source`
  - `target`
  - `read_only`
  - `bind`
  - `volume`
  - `tmpfs`

## Define build process within compose file 

with `build` subsection you can define [build process](docker-build.md) in compose file

- here is a not normative example

```yml
services:
  frontend:
    image: awesome/webapp
    build: ./webapp

  backend:
    image: awesome/database
    build:
      context: backend
      dockerfile: ../backend.Dockerfile

  custom:
    build: ~/custom
```

- `awesome/webapp`: build image from `./webapp` directory, lack of `./webapp/Dockerfile` will throw error
- `awesome/database`: build process will search `backend.Dockerfile` file from parent directory of compose file
- `custom`

## depends_on

```yml
services:
  web:
    build: .
    depends_on:
      - db
      - redis
  redis:
    image: redis
  db:
    image: postgres
```

behviors caused by `depends_on`

- start order: `docker compose up` will start `db` and `redis` before `web`
- stop order: `docker compose stop` will stop `web` before `db` and `redis`


