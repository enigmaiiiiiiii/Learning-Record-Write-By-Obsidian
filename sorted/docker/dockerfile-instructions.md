# Dockerfile - Instructions

## Syntax

`INSTRUCTION arguments`

- `INSTRUCTION`
- `arguments`

## From

description

- initialize a new build stage
- set a base image for subsequent instructions
- a valid Dockerfile must start with a `FROM` instruction
- can appear multiple times within a single Dockerfile in order

`FROM [--platform=<platform>] <image> [AS <name>]`

## ARG


## RUN

description

- use to execute any commands in a new layer
- resulting a [committed](docker-command-list.md#commit) image will be used for the next step

Syntax

`RUN <command>`
`RUN ["executable", "param1", "param2"]`


## CMD

description

- use to provide *defaults* for an **executing container**
- only be one `CMD` instruction in a Dockerfile
- if not, the last `CMD` instruction will take effect

syntax

- `CMD ["executable","param1","param2"]`
- `CMD command param1 param2`

## Instructions Summary

- FROM
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
- WORKDIR
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
