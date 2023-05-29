# Docker - Installation

> ~~maybe meaningless~~

## Ubuntu



## CentOS

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
# yum-utils
sudo yum install -y yum-utils
# config repo address
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

use aliyun mirror
```bash
sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

```bash
sudo yum install [--allowerasing] docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

- `--allowerasing`: sometimes need to avoid problem

## start

```bash
sudo systemctl start docker
```

run test

```bash
sudo docker run hello-world
```

## set mirror download address

add following content to `/etc/docker/daemon.json`

```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
   ]
}
```

restart daemon, restart docker let the config take effect

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

check if modify success

- if rootless mode is enabled, need to use sudo to check default [context](docker-terms.md#docker-context) config

```bash
docker info
```
