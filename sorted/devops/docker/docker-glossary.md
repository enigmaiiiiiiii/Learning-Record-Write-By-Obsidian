# Glossary

* [image](#image)
* [container](#container)
* [tag](#tag)
* [registry](#registry)
* [repository](#repository)
* [Docker CLI](#docker-cli)
* [Docker Context](#docker-context)
* [docker daemon](#docker-daemon)

## image

- readonly **template** file
- use for create [container](#container)

> the relationship between **images** and **container** is like the relationship between **class** and **object** in object-oriented programming

## container

- a running **instance** of an image
- container is a independent **process** or a specific task
- will not running a Operation System
- running in an isolated enviroment

```bash
docker run ubuntu
docker ps
```

- show nothing

```bash
docker ps -a
```

## tag

use tag to represent different version of the same image

- mark image `0e5574283393` with `version1.0` tag

```bash
docker tag 0e5574283393 fedora/httpd:version1.0
```

- pull image with tag
- format of image with tag: `<image>:<tag>`

```bash
docker pull fedora/httpd:version1.0
```


## registry

- is a [host](computer-network-host.md) [service](computer-network-service.md)
- contains [repositories]() of images
- default registry is [Docker Hub](https://hub.docker.com/)

---

`docker pull ubuntu`

- simply write of `docker pull docker.io/library/ubuntu`

`docker pull myregistrydomain:5000/foo/bar`

- docker search image foo/bar from host `myregistrydomain` port `5000`

## repository

- a collection of docker [images](#image) 
- the images are with the same name and different tags

## Docker CLI

- Docker Command Line Interface

## Docker Context

- through context one Docker CLI can manage multiple Docker nodes, swarm clusters, multiple Kubernetes clusters
- one Docker CLI can have multiple contexts
- use `docker context use <context-name>` to switch context


context list

```bash
docker context ls
```

display detailed information on one or more contexts

```bash
docker context inspect <context-name>
```

set **current context** with environment variable

```bash
export DOCKER_CONTEXT=<context-name> # linux
$ENV:DOCKER_CONTEXT=<context-name>   # windows
```

## docker daemon

## docker engine

main 3 components

- Server: a long-running daemon process dockerd.
- APIs: Use programs to talk to Docker daemon.
- [CLI](docker-command-line-interface.md)

## image layer

[Image layer](docker-image.md#image-layer)

