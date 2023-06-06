# Dockerfile

## What Is This

- a text file to **assemble an image**
- contains all the commands a user could call on the command line 
- automaticaly build image by reading Dockerfile

## Take A look

```sh
# syntax=docker/dockerfile:1

FROM python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD ["python", "-m", "flask", "run", "--host=0.0.0.0"]
```

- FROM
- RUN
- COPY
- CMD
- WORKDIR

## Instructions

[instructions](dockerfile-instructions.md)

## Comment

- `#` start a comment

## environment variable

`ENV`: set environment variable

```dockerfile
ENV Foo=/bar
WORKDIR ${Foo}
```

## Parser directives

- syntax: `# directive=value`
  - no space between `directive` and `value`
  - cannot redefined
- must be written in the first line of the file

> because docker will treat the parser directives as comments once it has processed a [builder instruction](#instructions), a blank line, or a comment

- a special comment

> escape是一个可识别的指令, 用来定义转义符, 以escape指令为例

```dockerfile
# escape=` (backtick)
```

