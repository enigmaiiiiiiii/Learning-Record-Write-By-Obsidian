# Dockerfile

## What Is This

- a text file that contains all the commands a user could call on the command line to assemble an image
- automaticaly build image by reading Dockerfile

## Instructions

- Syntax: `INSTRUCTION arguments`
  - INSTRUCTION: FROM, RUN, CMD, LABEL, EXPOSE, ENV, ADD, COPY, ENTRYPOINT, VOLUME, USER, WORKDIR, ARG, ONBUILD, STOPSIGNAL, HEALTHCHECK, SHELL
  - arguments

those instructions can use [environment variable](#environment-variable)

- ADD:
- COPY:
- ENV:
- EXPOSE:
- FROM:

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

- 一种特殊的注释

> escape是一个可识别的指令, 用来定义转义符, 以escape指令为例

```dockerfile
# escape=` (backtick)
```

