# Docker - Nginx

## Hello Docker Nginx

Dockerfile

```sh
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
```

> copy local config file `nginx.conf` to container's `/etc/nginx/nginx.conf`

## Manage Content and Configuration 

Serveral Ways to Manage Content and Configuration:

1. [Files maintained on docker host](#bind-on-host-file-system)
2. [Copy Config File to container](#copy-to-container)
3. [Files are maintained in the container(docker volume?)](#docker-volume)

## Bind On Host File System

- use [bind mounts](docker-bind-mounts.md) to store nginx configuration files

## Copy To Container

```dockerfile
FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY content /usr/share/nginx/html
COPY conf /etc/nginx
```
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

