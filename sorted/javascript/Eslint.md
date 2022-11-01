# ESlint

- find and fix problems in your JavaScript code
- 用于帮助发现javascript中的问题, 问题可能是潜在的运行时错误, 没有遵循最佳实践, 或者格式问题
- `rules`是ESlint的核心
- `plugins`: ESlint的插件, 是一个npm模块, 包含一组ESlint规则，配置，处理程序和环境
- `parser`: 将代码解析为抽象语法树(AST), 默认使用`espree`
- `formatters`: 用于格式化代码

## 安装eslint

```bash
npm install --save-dev eslint
```

- 因为esling是代码检查工具, 所以通过--save-dev安装在开发环境中

## 配置文件.eslintrc.{js, yml, json}

```bash
./node_modules/.bin/eslint --init # or
npm init @eslint/config
```

.eslintrc.json文件

```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

- `["error", "always"]`: 
  - error: 错误级别
  - always: 规则值
- `"semi"`: 检查分号
- `"quotes"`: 检查引号

错误级别:

- off or 0: 关闭规则
- warn or 1: 开启规则, 使用警告级别的错误: `warn`, 不影响exit code
- error or 2: 开启规则, 使用错误级别的错误: `error`, exit code为1

使用推荐的配置

```json
{
    "extends": "eslint:recommended"
}
```

## ESlint命令行

```bash
eslint [options] files.js [file.js] [dir]
```

- `--init`: 运行初始化配置程序
- `-c, --config`: `eslint -c ~/my-eslint.json`



## Vscode 中的 ESlint插件


## vue-cli 中的 ESlint

- 用于检查.vue文件中的`<template>`和`<script>`中的代码
  - 语法错误检查
  - Vue指令的错误使用
  - 错误的代码风格