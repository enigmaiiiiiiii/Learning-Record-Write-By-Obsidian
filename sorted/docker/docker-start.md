# Docker - Start To Use

* [search image](#search-image)
* [Download image](#download-image)
* [Query images](#query-images)
* [remove A image](#remove-a-image)
* [Start A Container](#start-a-container)
* [Query running containers](#query-running-containers)
* [Query containers in all status](#query-containers-in-all-status)
* [Stop container](#stop-container)
* [remove container](#remove-container)

## search image

```sh
docker search <name>
```

## Download image

```sh
docker pull <name>
```

## Query images

```sh
docker images
```

## remove A image

```sh
docker rmi <image>
```

## Start A Container

- start containers is a complex operate
- need to set up name, port, volume, network, etc
- check [docker run](docker-command-run.md)

simple start

```sh
docker run <image_id>
```

## Query running containers

```sh
docker ps
```

## Query containers in all status

```sh
docker ps -a
```

## Stop container

```sh
docker stop <container>
```

## remove container

```sh
docerk rm <container_id>
```