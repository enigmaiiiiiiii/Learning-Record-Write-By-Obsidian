# 术语

## Docker CLI

- Docker Command Line

## Docker Context

- 通过上下文可以使单个Docker CLI管理多个Docker 节点, swarm 集群, 多个 Kubernetes集群
- 一个Docker CLI 可以有多个上下文
- 通过`docker context use <context-name>`命令切换上下文

上下文列表

```bash
docker context ls
```

显示上下文的详细信息

```bash
docker context inspect <context-name>
```

通过系统环境变量**设置当前上下文**

```bash
export DOCKER_CONTEXT=<context-name> # linux
$ENV:DOCKER_CONTEXT=<context-name>   # windows
```

## docker daemon

## docker volume

- docker volume 是一个容器生成和使用**持久化数据卷**
- 完全由docker管理
- 优点
  - 相比挂载更容易备份或迁移
  - 可以通过docker CLI(命令)管理
  - 可以运行在Linux, Windows, Mac上
  - 可以在多个容器之间共享
  - Volume驱动程序允许在远程主机上管理volume
  - 容器可以预填充



