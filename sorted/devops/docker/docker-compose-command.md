# Docker - docker compose

* [docker compose up](#docker-compose-up)
* [docker compose build](#docker-compose-build)
* [docker compose logs](#docker-compose-logs)
* [docker compose restart](#docker-compose-restart)

## docker compose up

syntax

```sh
docker compose up [options] [SERVICE...]
```

- [`service` is compose service](docker-compose.md#compose-service)

description

- builds, create, starts, and attaches to containers for a service
- when this command exits, all containers are stopped
- `docker compose up` **recreate containers** if 
  - [service configuration](docker-compose-file.md) changed
  - or image changed
- `docker compose up` **does not rebuild images** by default
  - `docker compose up` build [image](docker-image.md) at **first time** you run it
  - if an image already exists, changes of [dockerfile](docker-dockerfile.md) and [build context](docker-build.md#build-context) won't automatically rebuild the image
  - to rebuild the image, use `docker compose up --build`
  - or use [`docker compose build`](#docker-compose-build) to build the image before running `docker compose up`

starts the containers in the background

```sh
docker compose up --detach
```

- on error, the exit code is 1
- if interrupted using `Ctrl+C`, the exit code is 0

options

- `--build`: build images before starting containers
- ...

## docker compose build

- Use to rebuild image if change a service's [Dockerfile](docker-dockerfile.md) or [build context](docker-dockerfile.md)

## docker compose logs

## docker compose restart

## docker compose pull

- Pulls images for services defined in a [docker-compose.yml](docker-compose-file.md) or [docker-compose.yaml](docker-compose-file.md) file, but does not start the containers

## docker compose ps

- List containers



