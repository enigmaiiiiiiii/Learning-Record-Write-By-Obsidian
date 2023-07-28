# Docker Compose File

* [What It Is](#what-it-is)
* [Take A Look](#take-a-look)
* [Volumes](#volumes)

## What It Is

- A File defining 
  - [services](docker-compose-services.md)
  - [networks](docker-network.md)
  - [volumes](docker-volumes.md)
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
      - "/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock"
      - "dbdata:/var/lib/postgresql/data"

volumes:
  mydata:
  dbdata:
```

this example shows

1. defined a [bind mount](docker-bind-mounts.md) for single service
2. a named volume `mydata` used by `web` service
3. a named volume `dbdata` used by `db` service, using old string format

Short Syntax

- `[SOURCE:]TARGET[:MODE]`
  - `SOURCE`: host path or volume name
  - `TARGET`: container path
  - `MODE`: `ro` for read-only, `rw`(default) for read-write

Long Syntax

- long syntax allows the following fields
  - `type`
  - `source`
  - `target`
  - `read_only`
  - `bind`
  - `volume`
  - `tmpfs`
