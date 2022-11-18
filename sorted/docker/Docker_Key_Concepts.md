# 术语

## images(镜像)

- 只读**模板**文件
- 用来创建docker容器

> **镜像**和**容器**的关系就像面向对象编程中的**类**和**对象**

## container(容器)

- 一个运行中的镜像**实例**
- 容器是一个独立的**进程**,或特定的任务
- 不会运行一个**Operating System(操作系统)**
- 运行在一个隔离的环境中

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

- 将镜像`0e5574283393`打上`version1.0`的标签

## registry(镜像服务器)

- 用来存放和传递内容的系统，包含了**镜像**和**标有不同标签的不同版本**
- `docker pull ubuntu`是`docker pull docker.io/library/ubuntu`的简写
- `docker pull myregistrydomain:5000/foo/bar`表示docker从`myregistrydomain`的`5000`端口查找镜像`foo/bar`

## 镜像仓库(repository)

- 容纳多个镜像的仓库

