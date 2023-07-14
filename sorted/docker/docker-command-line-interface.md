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

- build a docker image from a [Dockerfile](dockerfile.md)

## exec

- runs a new command in a running container.




