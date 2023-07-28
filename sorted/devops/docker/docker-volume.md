# docker volume

* [docker volume](#docker-volume)
* [What Is This](#what-is-this)
* [Feature](#feature)
* [Create Volume](#create-volume)
* [Mount Volume To Container](#mount-volume-to-container)
* [Volume With Compose](#volume-with-compose)

## What Is This
- Is a directory in filesystem that **outside the container**
- But **managed by docker** completely
- Use to **persistent data**
- generated and used by [container](docker-container)

## Feature

- It is recommended to use volume for write-heavy application
- shared by [containers](docker-glossary.md#container) and [composes](docker-compose.md)
- compare to [mount](docker-bind-mounts.md), it is easier to backup or migrate
- can be managed by docker CLI
- can be shared between multiple containers
- Volume's driver allow to be managed on remote host
- Volume can be pre-populated

## VS Bind Mount


## Create Volume

```sh
docker volume create <volume-name>
```

## Mount Volume To Container

Both options `-v` and `--mount` can mount volume to container

- with `-v`

```sh
docker run -d \
--name test
-v <volume-name>:/<container-path> \
nginx:latest
```

- with `--mount`

```sh
docker run -d \
--name devtest \
--mount source=<volume-name>,target=/<container-path> \
nginx:latest
```

## Volume In Dockerfile

```dockerfile

```

## Volume With Compose

```yaml
services:
  frontend:
    image: nginx:latest
    volumes:
      - <volume-name>:<path-to-mount>
volumes:  # define volume
    <volume-name>:
```

Attributes

```yml
volumes:
  db-data:
    external: false  
    name: "app-data"
```

- `external: true/false`
  - if `true`
    - the volume already exist 
    - the volume is managed by [docker volume](docker-command-line-interface.md#docker-volume)
    - Compose will not attempt to create it
    - all other attributes are ignored, apart from `name` and `external`, docker looking for existing volume named `db-data`
- `name: <volume-name>`
  - the name of volume
  - set name at runtime with `name: ${VOLUME_NAME}`, and set `VOLUME_NAME=my_volume` in [`.env`](nodejs-dotenv-file.md) file

## Volume CLI

