# Rootless mode

[Run the Docker daemon as a non-root user (Rootless mode)](https://docs.docker.com/engine/security/rootless/#exposing-privileged-ports)

- 允许非root用户运行docker守护进程和容器
- 减少守护进程和容器运行时的潜在漏洞
- rootless模式下不会携带[SETUID](/sorted/linux/linux-file-id.md)使用可执行文件
- 使用vscode的docker插件时需要使用rootless模式

## 使用rootless模式的准备工作

```bash
sudo dnf install -y fuse-overlayfs
sudo dnf install -y iptables
```

## 使用限制

- storage driver支持
  - overlay2
  - fuse-overlayfs
  - btrfs
- Cgroup只有在cgroup v2和systemd下支持
- 不支持的特性
  - AppArmor
  - Checkpoint
  - Overlay network
  - Exposing SCTP ports
- 需要使用ping命令时
  - 需要向/etc/syscl.conf添加`net.ipv4.ping_group_range=0 2147483647`
  - `sudo sysctl --system`
- 想要开放特权端口(<1024), 需要设置变量CAP_NET_BIND_SERVICE, 并restart daemon

```bash
sudo setcap cap_net_bind_service=ep $(which rootlesskit)
systemctl --user restart docker
```

- docker inspect 中的地址在命名空间中，主机无法访问到
- ...

## 开始安装

> 如果系统范围的Docker daemon已经运行，需要先停止它
> ```bash
> sudo systemctl disable --now docker.service docker.socket
> ```

```bash
dockerd-rootless-setuptool.sh install
```

- 出现`ERROR`输入下面命令

```bash
sudo sh -eux <<EOF
modprobe ip_tables
EOF
```

## 使用

```bash
systemctl --user start docker
```

```bash
systemctl --user enable docker
sudo loginctl enable-linger $(whoami)
```

daemon config

- 在`~/.config/docker/`目录下配置

## 配置rootless模式的registry mirror

在`~/.config/docker/daemon.json`中添加, 没有daemon.json则创建

```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ]
}
```

1. `systemctl --user daemon-reload`
2. `systemctl --user restart docker`

## rootless模式下的数据文件

`~/.local/share/docker`
