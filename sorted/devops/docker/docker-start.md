# Docker - Start To Use

* [Search image](#search-image)
* [Download image](#download-image)
* [Query images](#query-images)
* [remove A image](#remove-a-image)
* [Container Simple Start](#container-simple-start)
* [Query running containers](#query-running-containers)
* [Query containers in all status](#query-containers-in-all-status)
* [Stop container](#stop-container)
* [remove container](#remove-container)
* [Start An Exited Container](#start-an-exited-container)

## Search image

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

## Create Container From Image

A Simple Start
```sh
docker run <image_id>
```

Notice

- Start containers is a **complex** operate
- Need to set up name, port, volume, network, etc
- For Details Check [docker run](docker-command-run.md)

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

## Start An Exited Container

```sh
docker start <container_id>
```

## Remove All Exited Containers

```sh
docker container prune
```

