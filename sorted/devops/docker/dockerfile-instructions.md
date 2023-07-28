# Dockerfile - Instructions

* [What It Is](#what-it-is)
* [Syntax](#syntax)
* [FROM](#from)
* [ARG](#arg)
* [RUN](#run)
* [CMD](#cmd)
* [COPY](#copy)
* [USER](#user)
* [WORKDIR](#workdir)
* [ENTRYPOINT](#entrypoint)
* [VOLUME](#volume)
* [EXPOSE](#expose)
* [ENV](#env)
* [Instructions Summarize](#instructions-summarize)
* [ENTRYPOINT vs CMD](#entrypoint-vs-cmd)

## What It Is

- dockerfile runs instructions in order

## Syntax

`<INSTRUCTION> <arguments>`

- `<INSTRUCTION>`: FROM, RUN, CMD, COPY, ADD, ENTRYPOINT, ENV, ARG, VOLUME, EXPOSE, WORKDIR, USER, HEALTHCHECK, SHELL
- `arguments`: like /bin/bash, 4e5da3d5293e

## FROM

description

- Initialize a new [**build stage**](docker-dockerfile.md#build-stage)
- Set a base image for subsequent instructions
- A valid Dockerfile **must start** with a `FROM` instruction
- Can appear multiple times within a single Dockerfile in order

Basic Syntax

- `FROM <image> [AS <name>]`
  - image maybe just from docker hub
  - `AS <name>`: 
    - the `name` represents the `image`
    - the name can be used in subsequent `FROM` and `COPY --from=<name|index>` instructions

Complete Syntax

`FROM [--platform=<platform>] <image> [AS <name>]`

- image

Options

- `--platform=value`: specify the platform
  - `value`: For example, `linux/amd64`, `linux/arm64`, `windows/amd64`
  - default is ...
  - `--platform=$BUILDPLATFORM`: the platform is the platform of machine 

## ARG

description

- define a variable can passed to [docker build](docker-command-line-interface.md#build)

Syntax

- `ARG <name>[=<default value>]`

## RUN

[detail of RUN](dockerfile-instructions-run.md)

description

- use to execute any commands in a new layer
- resulting a [committed](docker-command-list.md#commit) image will be used for the next step

Syntax

`RUN <command>`
`RUN ["executable", "param1", "param2"]`

## CMD

description

- use to provide *defaults* for an **executing container**
- there **can only be one** `CMD` instruction in a Dockerfile
- if not, the last `CMD` instruction will take effect

syntax

- `CMD ["executable","param1","param2"]`
- `CMD command param1 param2`

## COPY

description

- copy files or directories from context
- to the filesystem of the [**container**](docker-glossary.md#container)

syntax

- `COPY [--chown=<user>:<group>] <src>... <dest>`
- `COPY [--chown=<user>:<group>] ["<src>",... "<dest>"]`
  - for path with whitespace

> `--chown, --chmod` only supproted on linux

- `<src>`
  - without `--from` option, it's path to **host machine**
  - with `--from=<name>` option, it's path to previous [build stage](docker-dockerfile.md#build-stage)
    - `<name>` is create by `FROM ... AS <name>`
- `<dest>`: path to container filesystem

`<src>` may contain wildcards

```dockerfile
COPY hom* /mydir/
COPY hom?.txt /mydir/
```

options

- `--from=<name>`:
  - set the source locatoin to a previous [build stage](docker-dockerfile.md#build-stage)
  - instead of use [build context]() send by user

## USER

description

- set user name and optionally user group

## WORKDIR

set working directory for any

- [`RUN`](dockerfile-instructions-run.md)
- [`CMD`](#cmd)
- [`ENTRYPOINT`](#entrypoint)
- `COPY`
- `ADD`

## ENTRYPOINT

- set the primary command to execute when a container is run
- default is `/bin/sh -c` in container
- according to this, you can access to a container's file system

[vs cmd](#entrypoint-vs-cmd)

## VOLUME

- mount a [volume](docker-volume.md)
- can not use to [mount a host directory](docker-bind-mounts.md)

```dockerfile
VOLUME ["/data"]
VOLUME /var/log
```

- `/data`, `/var/log` is on container file system

Changing the volume from within the Dockerfile

- if volume has been declared, **the changes made by Dockerfile** will be discarded

This instruction does not support specifying a `host-dir` parameter

- the volume is managed by docker

## EXPOSE

```dockerfile
EXPOSE <port> [<port>/<protocol>...]
```

- set container listening on which port

## ENV

- set environment variable

## Instructions Summarize

- [FROM](#from)
- [RUN](#run)
- [CMD](#cmd)
- LABEL
- [EXPOSE](#expose)
- ENV
- ADD
- COPY
- ENTRYPOINT
- [VOLUME](#volume)
- USER
- [WORKDIR](#workdir)
- ARG
- ONBUILD
- STOPSIGNAL
- HEALTHCHECK
- SHELL

those instructions can use [environment variable]()

- ADD
- COPY
- ENV
- EXPOSE
- FROM

## ENTRYPOINT vs CMD

**Summarize**

- [`ENTRYPOINT`](#entrypoint) is the command to execute when container is run
  - For you can execute command in container, ENTRYPOINT **default value** is `/bin/sh -c`
- `CMD` is the default argument to the `ENTRYPOINT`

A image built by following Dockerfile 

```dockerfile
FROM ubuntu
ENTRYPOINT ["echo", "hello entrypoint!"]
CMD ["here is the cmd"]
```

build the image with `docker build -t image_demo .`

and run with `docker run image_demo`

```sh
hello entrypoint! here is the cmd
```

when run with `docker run image_demo "here is the argument"`

```sh
hello entrypoint! here is the argument
```



