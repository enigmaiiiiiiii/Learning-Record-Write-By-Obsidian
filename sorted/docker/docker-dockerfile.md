# Docker - Dockerfile

* [What Is This](#what-is-this)
* [Take A look](#take-a-look)
* [Instructions](#instructions)
* [Comment](#comment)
* [Environment Variable](#environment-variable)
* [Parser directives](#parser-directives)
* [Build Stage](#build-stage)

## What Is This

- a file named `Dockerfile`
- A text file to **assemble an [image](docker-glossary.md#image)**
- build your project into an image
- usually located in the root of your project directory
- contains all the commands a user could call on the command line
- automaticaly build image by reading Dockerfile

## Feature

- docker will cache the image load by `FROM` instruction
- if any instruction change, the cache will be invalid

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

build in command line

```sh
docker build -t python-hello-image
```

once build complete, run the image

```sh
docker run python-hello-image
```

## Instructions

[Instructions](dockerfile-instructions.md)

## Comment

- `#` start a comment

## Environment Variable

`ENV`: set environment variable

```dockerfile
ENV Foo=/bar
WORKDIR ${Foo}
```

Use Environment Variable `${Foo}` Or `$Foo`

- Support standard bash modifiers
  - `${variable:-word}`: If variable is unset or null, the `word` will be the result
  - `${variable:=word}`: If variable is set then word will be the result, otherwise **empty string**

```dockerfile
FROM busybox
ENV FOO=/bar
WORKDIR ${FOO}  # WORKDIR /bar
ADD . $FOO      # ADD . /bar
COPY \$FOO /quux # COPY $FOO /quux
```

## Parser directives

- syntax: `# directive=value`
  - no space between `directive` and `value`
  - cannot redefined
- must be written in the first line of the file

> because docker will treat the parser directives as comments once it has processed a [builder instruction](#instructions), a blank line, or a comment

- a special comment

> `escape` is a recongnized directive, used to define the escape character, take the escape directive as an example

```dockerfile
# escape=` (backtick)
```

## Build Stage

- Is a procedure that generate something
- which can later be taken and used
- [`FROM` instruction](dockerfile-instructions.md#from) represents the beginning of a new stage

[Multi-stage builds](dockter-multi-stage-builds.md)
