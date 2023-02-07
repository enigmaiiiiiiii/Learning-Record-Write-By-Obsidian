# 安装

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
# 配置仓库地址
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

使用aliyun地址
```bash
sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

```bash
sudo yum install [--allowerasing] docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

- `--allowerasing`: 有时需要避免问题

## 启动

```bash
sudo systemctl start docker
```

运行测试

```bash
sudo docker run hello-world
```

## 设置镜像下载地址

在/etc/docker/daemon.json添加

```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
   ]
}
```

重启daemon, 重启docker使配置生效

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```
检查是否修改成功

- 如果启用了rootless模式, 需要使用sudo, 来查看default[上下文](docker-terms.md#docker-context)的配置

```bash
docker info
```
