# Docker - Dockerfile

* [What Is This](#what-is-this)
* [Feature](#feature)
* [Build A hello-world Image](#build-a-hello-world-image)
* [Dockerfile Basic Flow](#dockerfile-basic-flow)
* [Instructions](#instructions)
* [Comment](#comment)
* [Environment Variable](#environment-variable)
* [Parser directives](#parser-directives)
* [Build Stage](#build-stage)
* [Optimizing Build With Cache](#optimizing-build-with-cache)
* [Instruction ENTRYPOINT vs CMD](#instruction-entrypoint-vs-cmd)

## What Is This

- A file named `Dockerfile`
- A text file to **assemble an [image](docker-glossary.md#image)**
- build your project into an image
- usually located in the root of your project directory
- contains all the commands a user could call on the command line
- automaticaly build image by reading Dockerfile

## Feature

- docker will [cache] the image load by [`FROM` instruction](dockerfile-instructions.md#from)
- ~~~if any instruction change, the cache will be invalid~~~

## Build A hello-world Image

assume workdir has those files:

- `scirpt.py`
- `Dockerfile`

script.py

```python
print("hello world")
```

Docker

```dockerfile
# syntax=docker/dockerfile:1

FROM python:3

COPY . /app
WORKDIR /app
CMD ["python", "script.py"]
```

[build](docker-build.md) in command line

```sh
docker build -t python-hello-image .
```

when build complete, run the image

```sh
docker run python-hello-image
```

## Dockerfile Basic Flow

```
FROM python:3
RUN pip install --no-cache-dir -r requirements.txt
COPY . /app
WORKDIR /app
CMD ["python", "script.py"]
```

1. from image create container with [FROM](dockerfile-instructions.md#from)
2. install dependencies with [RUN](dockerfile-instructions.md#run)
3. copy local files to **image file system** with [COPY](dockerfile-instructions.md#copy)
4. set workdir with [WORKDIR](dockerfile-instructions.md#workdir), like `cd`, this step is for executing command in workdir
5. run command in container with [CMD](dockerfile-instructions.md#cmd)

## Syntax

[Instructions](dockerfile-instructions.md)

[dockerfile sytax](dockerfile-syntax.md)

## What Is Build Stage

- Is a procedure that generate something
- Which can later be taken and used
- [`FROM` instruction](dockerfile-instructions.md#from) represents the beginning of a new stage

[Multi-stage builds](docker-multi-stage-builds.md)

## Optimizing Build With Cache

[Optimizing Builds](docker-optimizing-builds-with-cache.md)

## Instruction ENTRYPOINT vs CMD

[ENTRYPOINT vs CMD](dockerfile-instructions.md#entrypoint-vs-cmd)

## Best Practice

[Dockerfile Best Practice](dockerfile-best-practice.md)

