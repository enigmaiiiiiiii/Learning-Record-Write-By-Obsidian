# Docker - Nginx

## Run Nginx Container

```sh
docker run --name hello-nginx -p 80:80 -d nginx
```

docker ps

```sh
CONTAINER ID   IMAGE                       COMMAND                  CREATED         STATUS         PORTS                            NAMES
394410b3945d   nginx                       "/docker-entrypoint.…"   6 seconds ago   Up 6 seconds   0.0.0.0:80->80/tcp               hello-docker
```

## New Nginx Image

Dockerfile

```dockerfile
FROM nginx
# copy local config file `nginx.conf` to container's `/etc/nginx/nginx.conf`
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
```

build image and start

```sh
$ docker build -t hello-nginx .
$ docker run --name hello-nginx -d hello-nginx
```

- `CMD ["nginx", "-g", "daemon off;"]` is not required

if no CMD instruction in Dockerfile, Start the container as follows

```sh
docker run --name hello-nginx -d nginx
```

## Manage Content and Configuration

Serveral Ways to Manage Content and Configuration:

1. [Files maintained on docker host](#bind-on-host-file-system)
2. [Copy Config File to container](#copy-to-container)
3. [Files are maintained in the container(docker volume?)](#docker-volume)

## Bind On Host File System

- use [bind mounts](docker-bind-mounts.md) to store nginx configuration files

## Copy To Container

For Directory Structure

```
.
├── conf
│   └── nginx.conf
├── static
│   └── index.html
└── dockerfile
```

dockerfile

```dockerfile
FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80
COPY content /usr/share/nginx/html
COPY conf/nginx.conf /etc/nginx/nginx.conf
```

nginx.conf

```
events { }
http {
    server {
        listen 80;
        location / {
            root /usr/share/nginx/html;
            index index.html;
        }
    }
}
```

build image and start

```sh
$ docker build -t hello-nginx:1.0 . 
$ docker run --name hello-nginx -p 80:80 -d hello-nginx:1.0
```

access use `localhost:80/index.html`

## Docker Volume

```dockerfile
FROM nginx
COPY content /usr/share/nginx/html
COPY conf /etc/nginx
VOLUME /usr/share/nginx/html
VOLUME /etc/nginx
```

- [VOLUME instruction](dockerfile-instructions.md#volume)

## Nginx Plus

- [nginx plus](nginx.md#nginx-plus) is not available at [Docker Hub]()
