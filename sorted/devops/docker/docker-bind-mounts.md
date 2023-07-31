# Docker - Bind Mounts

* [What It Is](#what-it-is)
* [Feature](#feature)
* [2 Ways To Bind Mounts](#2-ways-to-bind-mounts)
* [Bind Mounts With docker run](#bind-mounts-with-docker-run)
* [Demonstrate Bind Mounts With docker run](#demonstrate-bind-mounts-with-docker-run)
* [Bind Mounts With Docker Compose](#bind-mounts-with-docker-compose)
* [Mount Point](#mount-point)

## What It Is

- Makes files from the **host machine** available inside the [container]()
- Path reference is **absolute path on host machine**

## Feature

- does not need to be exist already, Docker will create it on demand
- No CLI command to directly manage it, Not like volume who has [`docker volume`](docker-volume.md) command

## 2 Ways To Bind Mounts

1. [Bind Mounts With docker run](#bind-mounts-with-docker-run)
2. [Bind Mounts With Docker Compose](#bind-mounts-with-docker-compose)

- **Can not Bind Mounts through [Dockerfile](docker-dockerfile.md)**
  - Because Dockerfile is used to build image.
  - And Bind Mounts is for running container

## Bind Mounts With docker run

bind mounts use [`--mount` option](docker-command-run.md#--mount)

- set `type=bind`

```sh
docker run -d \
--name nginx \
--mount type=bind,\
        source=/path/to/source,\
        target=/path/to/target,\
        readonly \
nginx:latest
```

## Demonstrate Bind Mounts With docker run

A directory with file `script.py` and `dockerfile` in it

- dockerfile

```dockerfile
FROM python:3
WORKDIR /app
COPY script.py .
CMD ["python", "script.py"]
```

- script.py

```py
print("hello docker")
```

build the image

```sh
docker build -t hello-docker:1.0 .
```

run the container 

```sh
$ docker run \
--mount type=bind,\
        source=$(pwd),\
        target=/app \
hello-docker:1.0
hello docker # output
```

Change `script.py` 

```py
print("hello mounts")
```

Run again without rebuild image, the output will be changed

```sh
$ docker run \
--mount type=bind,\
        source=$(pwd),\
        target=/app \
hello-docker:1.0
hello mounts # output
```

## Bind Mounts With Docker Compose

`compose.yml` looks like this

```yml
service:
  frontend:
    image: node:lts
    volumes:
      - type: bind
        source: ./static
        target: /opt/app/static
volumes:
  myapp:
```

## Mount Point



