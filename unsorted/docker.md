# docker

- 程序运行的环境而不包括操作系统额外的界面

## 安装

[official install docuementation](https://docs.docker.com/engine/install/)

```bash
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

```bash
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

```bash
sudo yum install [--allowerasing] docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

## 启动

```bash
sudo systemctl start docker
```

运行测试

```bash
sudo docker run hello-world
```

## 命令

help

- `docker --help`
- `docker [command] --help`



## 术语

[docker术语](Docker_Terms.md)

