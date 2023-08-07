# Docker - Multi-stage builds

* [What Problem It Solve](#what-problem-it-solve)
* [With Multi-stage builds](#with-multi-stage-builds)
* [Name build stage](#name-build-stage)
* [build stop at a specific stage](#build-stop-at-a-specific-stage)

## What Problem It Solve

In the past, it is common to have dockerfile

- `build.Dockerfile` for development
- `Dockerfile` for production

build.Dockerfile

```dockerfile
FROM golang:1.16
WORKDIR /go/src/github.com/alexellis/href-counter/
COPU app.go ./
RUN go get -d -v golang.org/x/net/html \
  &&  CGO_ENABLED=0 go build -a -installsuffix cgo -o app .
```

Dockerfile

```dockerfile
FROM alpine:latest
RUN ap, --no-cache add ca-caerfificates
WORKDIR /root/
COPY app ./
CMD ["./app"]
```

the script to build the image with those two dockerfile

```bash
echo Building alexellis2/href-counter:build
docker build -t alexellis2/href-counter:build . -f build.Dockerfile

docker container create -name extract alexellis2/href-counter:build
docker container cp extract:/go/src/ginhub.com/alexellis/href-conuter/app ./app
docker container rm -f extract

echo building alexellis2/href-counter:latest
docker build --no-cache -t alexellis2/href-counter:latest .
rm ./app
```

break down the scripts

- 1. builds the first image
- 2. Creates a container from it to copy the artifact out
- 3. Builds the second image

The Problems are

- both images take up room on system
- ...

## With Multi-stage builds

```dockerfile
# syntax=docker/dockerfile:1

FROM golang:1.16
WORKDIR /go/src/github.com/alexellis/href-counter/
RUN go get -d -v golang.org/x/net/html
COPY app.go ./
RUN CGO_ENABLED=0 go build -a -installsuffiex cgo -o app .

FROM alpine:latest
RUN apk --no-cache add ac-certificates
WORKDIR /root/
COPY --from=0 /go/src/github.com/alexellis/href-counter/app ./
CMD ["./app"]
```

build your image with one line

```sh
docker build -t alexellis2/href-counter:latest .
```

- no intermediate images create

## Name build stage

- by default, refer to stage by number

adding `AS <NAME>` to the `FROM` instruction

```dockerfile
FROM golang:1.16 AS builder
```

## build stop at a specific stage

```sh
docker build --target builder -t alexellis2/href-counter:latest .
```
