# DOcker - Common Use Images

## mysql

[mysql](https://hub.docker.com/-/mysql)

启动一个mysql容器

```bash
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

- `--name some-mysql`: 容器名称
- `-e MYSQL_ROOT_PASSWORD=my-secret-pw`: 设置环境变量MYSQL_ROOT_PASSWORD, 用于设置root用户的密码
- `-d`: 后台运行
- `mysql:tag`: 镜像名称

use docker 中的 mysql 的 shell

- some-mysql: 容器名称

```bash
docker exec -it some-mysql bash
```