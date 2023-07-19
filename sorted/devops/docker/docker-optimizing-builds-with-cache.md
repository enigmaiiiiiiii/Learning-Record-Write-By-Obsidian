# Docker - Builds Optimizing With Cache

> !this optimization can save precious minutes

## How Build Cache Work

- if a [layer](docker-dockerfile.md#image-layer) changes, all other layers come after it will be affected

## Order Layers

- heavy steps should be placed at the beginning of dockerfile
- layers that change frequently should be placed at the end of dockerfile
  - to avoid triggering unchanged layers rebuild

inefficient dockerfile

```dockerfile
# syntax=docker/dockerfile:1
FROM node
WORKDIR /app
COPY . .          # Copy over all files in the current directory
RUN npm install   # Install dependencies
RUN npm build     # Run build
```

- any file changes will trigger reinstall all dependencies

An optimized dockerfile

```dockerfile
# syntax=docker/dockerfile:1
FROM node
WORKDIR /app
COPY package.json . # Copy over package.json first
RUN npm install     # Install dependencies
COPY . .            # Copy over all files in the current directory
RUN npm build       # Run build
```

## Keep Layers Small

don't include unnecessary files in the image

1. only COPY necessary files, like `COPY ./src /Makefile /src` better than `COPY . /src`
2. use [`.dockerignore`](docker-dockerignore.md) file to exclude files

Use dedicated [RUN](dockerfile-instructions-run.md) Cache

```dockerfile
RUN \
--mount=type=cache,target=/var/cache/apt \
apt-get update && apt-get install -y git
```

- when this layer needs to be rebuild, it will the cache in `/var/cache/apt` instead of downloading from internet

## Use Appropriate Base Image

- In Docker, there are 170 pre-built official images for common development scenario
- use dedicated images for specific purpose
  - flask-mongo: `python:3.7-alpine`

## Use Multi-Stage Build
