# Dockerfile - Instructions

* [What It Is](#what-it-is)
* [Syntax](#syntax)
* [From](#from)
* [ARG](#arg)
* [RUN](#run)
* [CMD](#cmd)
* [COPY](#copy)
* [USER](#user)
* [WORKDIR](#workdir)
* [Instructions Summary](#instructions-summary)

## What It Is

- dockerfile runs instructions in order

## Syntax

`INSTRUCTION arguments`

- `INSTRUCTION`
- `arguments`

## From

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

- `--platform`: specify the platform
  - default is ...

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
  - with `--from=<name>` option, it's path to previous [build stage]()
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
  - instead of use build context send by user

## USER

description

- set user name and optionally user group

## WORKDIR

set working directory for any

- [`RUN`](dockerfile-instructions-run.md)
- [`CMD`](#cmd)
- `ENTRYPOINT`
- `COPY`
- `ADD`

## Instructions Summary

- [FROM](#from)
- RUN
- CMD
- LABEL
- EXPOSE,
- ENV
- ADD
- COPY
- ENTRYPOINT
- VOLUME
- USER
- [WORKDIR](#workdir)
- ARG
- ONBUILD
- STOPSIGNAL
- HEALTHCHECK
- SHELL

those instructions can use [environment variable](#environment-variable)

- ADD
- COPY
- ENV
- EXPOSE
- FROM
