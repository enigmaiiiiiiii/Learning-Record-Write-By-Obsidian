# Docker - Start To Use

* [search image](#search-image)
* [Start A Container](#start-a-container)
* [download image](#download-image)
* [check images](#check-images)
* [check running container](#check-running-container)

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

## Start A Container

- start containers is a complex operate
- need to set up name, port, volume, network, etc
- check [docker run](docker-command-run.md)

simple start

```sh
docker run <image>
```

## Query running containers

```sh
docker ps
```

## stop container

```sh
docker stop <container>
```

## remove container

```sh
docerk rm <container>
```