# DOcker - Common Use Images

## mysql

[mysql](https://hub.docker.com/-/mysql)

Start A mysql Container

```bash
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

- `--name some-mysql`: name container as `some-mysql`
- `-e MYSQL_ROOT_PASSWORD=my-secret-pw`: set environment variable `MYSQL_ROOT_PASSWORD`, use to set password for user `root`
- `-d`: running in background
- `mysql:tag`: image name and tag

execute shell in mysql conainter

- some-mysql: container name

```bash
docker exec -it some-mysql bash
```
