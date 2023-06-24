# Linux Command - env

## What env Can do

- print environment variables
- run a command in a [modified environment]()
- add, remove, modified environment variables

## Syntax

`env [OPTION]... [-] [NAME=VALUE]... [COMMAND [ARG]...`

OPTION

NAME=VALUE

- set each `NAME` to `VALUE` in the environment and run `COMMAND`

## 

## print environment variables

- only type `env` in terminal and press enter

## modify environment

assume a script file `script.sh` like that

```sh
#! /bin/bash
echo $USER
```

- execute this script will get current user

```sh
env USER=foo ./script.sh
```

- execute this script will get `foo`

