# ESlint

- [ESlint](#eslint)
  - [Introduction](#introduction)
  - [terminology](#terminology)
  - [安装eslint](#安装eslint)
  - [配置文件.eslintrc.{js, yml, json}](#配置文件eslintrcjs-yml-json)
  - [use eslint](#use-eslint)
  - [eslint command](#eslint-command)
  - [Vscode 中的 ESlint插件](#vscode-中的-eslint插件)
  - [vue-cli 中的 ESlint](#vue-cli-中的-eslint)

## Introduction

- find and fix problems in your JavaScript code
- 用于帮助发现javascript中的问题, 问题可能是
  - 潜在的运行时错误
  - 没有遵循最佳实践
  - 格式问题

## terminology

`rules`

- ESlint的核心

`plugins`

- provide you with a set of rules that you can **individually apply depending on your needs**

```json
{
  "plugins": [
    "react"
  ]
}
```

`extends`

- extends 应用一系列**配置好的rules** as a base for the current configuration file

```json
{
    "extends": "eslint:recommended",
}
```

`parser`

- 将代码解析为抽象语法树(AST), 默认使用`espree`

`formatters`

- controls apprearance of the results

## 安装eslint

```bash
npm install --save-dev eslint
```

- 因为esling是代码检查工具, 所以通过`--save-dev`安装在开发环境中

## 配置文件.eslintrc.{js, yml, json}

```bash
npm init @eslint/config
```

[Configuration File](Eslint_Configuration_File.md)

## use eslint


## eslint command

```bash
npx eslint [options] file1.js [file2.js] [dir]
```

- `--init`: 运行初始化配置程序
- `-c, --config`: `eslint -c ~/my-eslint.json`

修复文件或目录中代码问题

```bash
npx eslint --fix file1.js [file2.js] [dir]
```

## Vscode 中的 ESlint插件

## vue-cli 中的 ESlint

- 用于检查.vue文件中的`<template>`和`<script>`中的代码
  - 语法错误检查
  - Vue指令的错误使用
  - 错误的代码风格