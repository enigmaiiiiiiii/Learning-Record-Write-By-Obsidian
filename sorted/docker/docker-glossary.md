# Glossary

* [image](#image)
* [container](#container)
* [tag](#tag)
* [registry](#registry)
* [repository](#repository)
* [Docker CLI](#docker-cli)
* [Docker Context](#docker-context)
* [docker daemon](#docker-daemon)
* [docker volume](#docker-volume)

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
```
```bash
docker ps
```
- show nothing

```bash
docker ps -a
```

## tag

- use tag to represent different version of the same image

```bash
docker tag 0e5574283393 fedora/httpd:version1.0
```

- mark image `0e5574283393` with `version1.0` tag

## registry

- 用来存放和传递内容的系统，包含了**镜像**和**标有不同标签的不同版本**
- `docker pull ubuntu`: simply write of `docker pull docker.io/library/ubuntu`
- `docker pull myregistrydomain:5000/foo/bar`: docker search image foo/bar from host `myregistrydomain` port `5000`

## repository

- 容纳多个镜像的仓库

## Docker CLI

- Docker Command Line

## Docker Context

- 通过上下文可以使单个Docker CLI管理多个Docker 节点, swarm 集群, 多个 Kubernetes集群
- 一个Docker CLI 可以有多个上下文
- 通过`docker context use <context-name>`命令切换上下文

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
