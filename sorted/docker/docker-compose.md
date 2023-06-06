# Docker - Compose

* [What is this](#what-is-this)
* [3 Steps of Using Cmpose](#3-steps-of-using-cmpose)
* [Feature](#feature)
* [docker compose command](#docker-compose-command)
* [docker-compose.yml](#docker-composeyml)

## What Is This

- tool of defining and running **multi-container** Docker applications
- configuration for containers
- managing the whole lifecycle of your application
  - start, stop, rebuild

**two essential things**

- [`docker-compose.yml`](#docker-composeyml) file
- [`docker-compose`](#command-docker-compose) command

## Feature

- multiple isolated environments on a single host
- Compose caches the configuration used to create a container

> restart a service that has not changed, Compose re-uses the existing containers

## 3 Steps of Using Cmpose

1. define your app's environment with a [`Dockerfile`](docker-dockerfile.md)
2. define the services that make up your app in [`docker-compose.yml`](#docker-composeyml) so they can be run together in an isolated environment
3. run [`docker compose up`](#command-docker-compose) and Compose starts and runs your entire app

## Use Case

1. development environemnt
2. Automated testing environment
3. Single host Deployments

## command docker compose


## docker-compose.yml

feature

- write in application root directory

> [yml](yaml.md) file format

take a look

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



