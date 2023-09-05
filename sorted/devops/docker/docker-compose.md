# Docker - Compose

* [What Is This](#what-is-this)
* [What's For](#what's-for)
* [Feature](#feature)
* [3 Steps of Using Cmpose](#3-steps-of-using-cmpose)
* [docker compose command](#docker-compose-command)
* [docker compose file](#docker-compose-file)
* [Compose Service](#compose-service)
* [docker compose network](#docker-compose-network)
* [Compose V2](#compose-v2)
* [Legacy Version](#legacy-version)

## What Is This

- Managing the whole lifecycle of your application
  - Start, Stop, Rebuild
- Configuration for containers
- Tool of defining and running **multi-container** Docker applications

**two essential things**

- [docker compose file](#docker-compose-file)
- [`docker compose` command](docker-compose-command.md)

VS [dockerfile](docker-dockerfile.md)

- dockerfile used to build a single image

## What's For

1. development environemnt
2. Automated testing environment
3. Single host Deployments

## Feature

- Multiple isolated environments on a single host
- Compose caches the configuration used to create a container

> restart a service that has not changed, Compose re-uses the existing containers

## 3 Steps of Using Cmpose

1. define your app's environment with a [`Dockerfile`](docker-dockerfile.md)
2. define the services that make up your app in [`docker-compose.yml`](#docker-compose-file) so they can be run together in an isolated environment
3. run [`docker compose up`](#docker-compose-command) and Compose starts and runs your entire app


## docker compose command

[docker compose command](docker-compose-command.md)

## docker compose file

[docker compose file](docker-compose-file.md)

## Compose Service

```yaml
services:
  backend:
    build: .
    ports:
      - "8000:8000"
```

- `backend` is a service name

## docker compose network

[docker compose network](docker-compose-network.md)

## Compose V2

- From July 2023
  - Compose V1 stop update
  - Compose V2 will be the current version of Compose
- `docker-compose` vs `docker compose`
  - `docker compose` is recommended
  - `docker-compose` is legacy

## Legacy Version


