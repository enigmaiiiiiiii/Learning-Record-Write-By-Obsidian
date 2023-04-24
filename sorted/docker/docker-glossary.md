# Glossary

* [images](#images)
* [container](#container)
* [tag](#tag)
* [registry](#registry)
* [repository](#repository)

## images

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

- 通过标签可以表示同一个镜像(images)的不同版本

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

