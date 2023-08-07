# Docker - logs

## docker logs

About log infomation

1. Is the text that container print to [stdout and stderr]() at the time of execution
2. the stdout and stderr are belong to the container system, not host system

for example an image named `hello-logs`

- print "hello logs" to stdout

```sh
echo "hello logs"
```

run with -d option and check logs

```sh
$ docker run -d hello-logs 
$ docker logs <hello-logs-id>
hello logs
```

## docker logs --follow

- contiuously show container logs

## docker logs --until

- show logs before timestamps

