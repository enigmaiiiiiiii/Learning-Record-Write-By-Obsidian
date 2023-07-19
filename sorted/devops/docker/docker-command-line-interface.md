# Docker - Command Line Interface

* [help](#help)
* [run](#run)
* [ps](#ps)
* [stop](#stop)
* [rm](#rm)
* [pull](#pull)
* [logs](#logs)
* [commit](#commit)
* [inspect](#inspect)
* [build](#build)

## What is Docker CLI's role in Docker

## help

- `docker --help`
- `docker [command] --help`

## run

[Command-run](docker-command-run.md)

## ps

- `docker ps`: show the running [container](docker-glossary.md#container)

## stop

- `docker stop <container>`: stop the container

## rm

- remove [container](docker-glossary.md#container)

## pull

- download [image](docker-glossary.md#image) from image repository

## logs

- `docker logs[options] <container>`: check the log of the container

## commit

description

- create a new [image](docker-glossary.md#image) from a [container's](docker-glossary.md#glossary) changes

syntax

`docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]`

## inspect

## build

- build a docker image from a [Dockerfile](docker-dockerfile.md)

## exec

- runs a new command in a running container.

```sh
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

- `CONTAINER`: container name or id
- `COMMAND`: command to run in the container

run mongo shell in a mongo container

```sh
docker run -d -p 27017:27017 --name=mongoContainer mongo:latest
docker exec -it mongoContainer mongosh
```

## cp

- copy file between container and local file system

```sh
docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-
```

