# Rootless mode

## what is this

[Run the Docker daemon as a non-root user (Rootless mode)](https://docs.docker.com/engine/security/rootless/#exposing-privileged-ports)

- allow non-root users to run the Docker daemon and containers
- reduce potential vulnerabilities in the daemon and container runtime
- under rootless mode will not carry [SETUID](/sorted/linux/linux-file-id.md) executable file
- need to use rootless mode when using docker plugin in vscode

## Prerequisites for rootless mode

```bash
sudo dnf install -y fuse-overlayfs
sudo dnf install -y iptables
```

## Restrict

- storage driver support
  - overlay2
  - fuse-overlayfs
  - btrfs
- Cgroup only supports on cgroup v2 and systemd
- unsupported features
  - AppArmor
  - Checkpoint
  - Overlay network
  - Exposing SCTP ports
- when using ping command
  - need to add `net.ipv4.ping_group_range=0 2147483647` to `/etc/syscl.conf`
  - `sudo sysctl --system`
- when want to open privileged port(<1024), need to set variable CAP_NET_BIND_SERVICE, and restart daemon

```bash
sudo setcap cap_net_bind_service=ep $(which rootlesskit)
systemctl --user restart docker
```

- docker inspect 中的地址在命名空间中，主机无法访问到
- ...

## start install

if system wide Docker daemon is running, need to stop it first

```bash
sudo systemctl disable --now docker.service docker.socket
```

install

```bash
dockerd-rootless-setuptool.sh install
```

- when `ERROR` occurs, run following command

```bash
sudo sh -eux <<EOF
modprobe ip_tables
EOF
```

## Usage

```bash
systemctl --user start docker
```

```bash
systemctl --user enable docker
sudo loginctl enable-linger $(whoami)
```

daemon config

- config in directory `~/.config/docker/`

## config registry mirror in rootless mode

add to `~/.config/docker/daemon.json`, if not exist, create it

```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ]
}
```

1. `systemctl --user daemon-reload`
2. `systemctl --user restart docker`

## data file under rootless mode

`~/.local/share/docker`
