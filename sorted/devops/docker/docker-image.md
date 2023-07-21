# Docker - Image

* [Create Image](#create-image)
* [Major Difference Between Container](#major-difference-between-container)
* [Illustration Of Image History](#illustration-of-image-history)
* [Image Layer](#image-layer)
* [illustration of Copy-On-Write](#illustration-of-copy-on-write)
* [Thin Writable Layer](#thin-writable-layer)

## Create Image

1. [dockerfile](docker-dockerfile.md)
2. [docker build](docker-command-line-interface.md#build)

## Feature

- Image is build based on other images
- base image is shared between containers


## Major Difference Between Container

- every container has its own [top writable layer](#thin-writable-layer)

## Illustration Of Image History

> there are no specific definition

Here is a good example to understand the concept of image history

There are 3 files in the same directory

- file `dockerfile.base` content

```dockerfile
# syntax=docker/dockerfile:1
FROM alpine
RUN apk add --no-cache bash
```

- file `dockerfile` content

```dockerfile
# syntax=docker/dockerfile:1
FROM acme/my-base-image:1.0
COPY . /app
RUN chmod +x /app/hello.sh
CMD /app/hello.sh
```

- file `script.sh` content

```sh
echo "hello world!"
```

Build Base Image

```sh
docker build -t base-image:1.0 -f dockerfile.base .
```

Build Final Image

```sh
docker build -t final-image:1.0 -f dockerfile .
```

check both images history

```sh
$ docker history base-image:1.0
IMAGE          CREATED          CREATED BY                                      SIZE      COMMENT
887e9ea84405   8 minutes ago   RUN /bin/sh -c apk add --no-cache bash # bui…   4.17MB    buildkit.dockerfile.v0
<missing>      5 weeks ago     /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>      5 weeks ago     /bin/sh -c #(nop) ADD file:289c2fac17119508c…   7.66MB

$ docker history final-image:1.0
IMAGE          CREATED          CREATED BY                                      SIZE      COMMENT
8d61375cb29e   10 minutes ago   CMD ["/bin/sh" "-c" "/app/hello.sh"]            0B        buildkit.dockerfile.v0
<missing>      10 minutes ago   RUN /bin/sh -c chmod +x /app/hello.sh # buil…   41B       buildkit.dockerfile.v0
<missing>      10 minutes ago   COPY . /app # buildkit                          312B      buildkit.dockerfile.v0
<missing>      17 minutes ago   RUN /bin/sh -c apk add --no-cache bash # bui…   4.17MB    buildkit.dockerfile.v0
<missing>      5 weeks ago      /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>      5 weeks ago      /bin/sh -c #(nop) ADD file:289c2fac17119508c…   7.66MB
```

- The final-image includes all steps of base-image 

> `<missing>` indicates that 
> the image is built on another system
> or were built with BuiltKit as builder 

## Image Layer

- image layer is contains a image
- check out layers of each image build in previous [section](#illustration-of-image-history)

```sh
$ docker image inspect --format "{{json .RootFS.Layers}}" base-image:1.0
[
  "sha256:61f2871f545a9b23a9340f96b331fb660b43008a9e84a03ad8564271bce5743b",  # layer identical in both images
  "sha256:ebbda7c8fa76f4c34881a81ba8ae34a8788813c3696f1d092ecf910c864168e3",  # layer identical in both images
]
$ docker image inspect --format "{{json .RootFS.Layers}}" final-image:1.0
[
  "sha256:61f2871f545a9b23a9340f96b331fb660b43008a9e84a03ad8564271bce5743b",  # layer identical in both images
  "sha256:ebbda7c8fa76f4c34881a81ba8ae34a8788813c3696f1d092ecf910c864168e3",  # layer identical in both images
  "sha256:32e8f24a24d2ddb333fe2edd4426add217dbc2f19896e1a0c96a3dd4a6742212",  # additional layer
  "sha256:32f036e0505db37614ea64c5fcc6072b0032aac20b8f76ac39b12d1bb9e72cf1"   # additional layer
]
```

summarize from the output

- first two layers are identical in both images
- **Image is build based on other images**

from docker documentation

- shared images are only stored once on a host

## illustration of Copy-On-Write

what is Copy-On-Write

- Search through the image layers for the file to update. 
  - The process starts at the newest layer and works down to the base layer one layer at a time. 
  - When results are found, they are added to a cache to speed future operations.
- copy the file that is found to the [container’s writable layer](#thin-writable-layer).
- Any modifications are made to this file, 
  - container cannot see the read-only copy of the file that exists in the lower layer

use the image build in previous [section](#illustration-of-image-history)

1. run 5 containers from the same image

```sh
docker run -dit --name my_container_1 final-image:1.0 bash \
  && docker run -dit --name my_container_2 final-image:1.0 bash \
  && docker run -dit --name my_container_3 final-image:1.0 bash \
  && docker run -dit --name my_container_4 final-image:1.0 bash \
  && docker run -dit --name my_container_5 final-image:1.0 bash
```

2. check containers running status `docker ps --size --format "table {{.ID}}\t{{.Names}}\t{{.Size}}\t{{.Status}}"`

```sh
CONTAINER ID   NAMES                         SIZE                     STATUS
1bd230309a0d   my_container_5                0B (virtual 11.8MB)      Up 2 minutes
a71869061975   my_container_4                0B (virtual 11.8MB)      Up 2 minutes
a53f69f87a12   my_container_3                0B (virtual 11.8MB)      Up 2 minutes
4d5bbb937c2a   my_container_2                0B (virtual 11.8MB)      Up 2 minutes
8924fb9a4e6f   my_container_1                0B (virtual 11.8MB)      Up 2 minutes
```

3. Use container's storage

```sh
$ for i in {1..3}; do docker exec -it my_container_$i bash -c "echo 'hello world' > /app/hello.txt"; done
$ docker ps --size --format "table {{.ID}}\t{{.Names}}\t{{.Size}}\t{{.Status}}"
CONTAINER ID   NAMES                         SIZE                     STATUS
1bd230309a0d   my_container_5                0B (virtual 11.8MB)      Up 3 minutes
a71869061975   my_container_4                0B (virtual 11.8MB)      Up 3 minutes
a53f69f87a12   my_container_3                5B (virtual 11.8MB)      Up 3 minutes
4d5bbb937c2a   my_container_2                5B (virtual 11.8MB)      Up 3 minutes
8924fb9a4e6f   my_container_1                5B (virtual 11.8MB)      Up 3 minutes
```

- this write operation cost 5B storage
- this data is unique to each container, and not shared

## Thin Writable Layer

- Often called the container layer

