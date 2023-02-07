# Dockerfile

- 文本文档, 包含用户可以在**命令行**上调用的所有命令
- 通过读取Dockerfile自动构建镜像
- Dockerfile本身的指令语法: `INSTRUCTION arguments`
  - INSTRUCTION: 指令, 如FROM, RUN, CMD, LABEL, EXPOSE, ENV, ADD, COPY, ENTRYPOINT, VOLUME, USER, WORKDIR, ARG, ONBUILD, STOPSIGNAL, HEALTHCHECK, SHELL
  - arguments: 指令参数

## 注释

- `#` 表示注释行

## 环境变量

`ENV`: 设置环境变量

```dockerfile
ENV Foo=/bar
WORKDIR ${Foo}
```

可以使用环境变量的指令

- ADD:
- COPY:
- ENV:
- EXPOSE:
- FROM:

## 解析器指令

Parser directives(解析指令)

- 语法: `# directive=value`
  - 不允许空格
  - 不能使用未知的directive指令
  - 不能重复定义
- 必须位于最顶端,  因为docker一旦处理了一个**构建器指令, 空行, 注释**, 就会将解析指令视为注释
- 一种特殊的注释

> escape是一个可识别的指令, 用来定义转义符, 以escape指令为例

```dockerfile
# escape=` (backtick)
```

## 
