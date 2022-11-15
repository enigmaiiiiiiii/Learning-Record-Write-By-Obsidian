# 命令

## help

- `docker --help`
- `docker [command] --help`

## run

```bash
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

- IMAGE: 用于创建容器实例的镜像模板
- OPTIONS
  - `-d`: 后台运行
  - `-p`: 端口映射
  - `--name`: 容器名
- COMMAND


```bash
docker run -d -p 80:5000 training/webapp python app.py
```

- `-d`: 后台运行
- `-p`: 端口映射
  - `80`: 宿主机端口
  - `5000`: 容器端口

## ps

- 列出正在运行的容器

## stop

- 停止容器

## rm

- 删除容器

## pull

- 从镜像仓库下载镜像