# NodeJs模块管理系统

- [What is this](#what-is-this)
- [Core mudules 核心模块](#core-mudules-核心模块)
- [module file 模块文件](#module-file-模块文件)
- [`module` object](#module-object)
- [导出模块](#导出模块)
- [导入模块](#导入模块)
- [How Node Determine Module System](#how-node-determine-module-system)
- [处理Circle(循环依赖)](#处理circle循环依赖)
- [Folders as module 文件夹当做模块](#folders-as-module-文件夹当做模块)
- [deep into module system](#deep-into-module-system)

## What is this

- NodeJs中一个文件就是一个模块
- Node.js包括两个模块系统
  - [ECMAScript modules](javascript-module-es6.md)
  - [CommonJS Modules](javascript-module-commonjs.md)
- Nodejs默认使用CommonJS模块加载模式

> CommonJS是一种模块规范, 最初用于Nodejs

## Core mudules 核心模块

- `require('node: http');`
- `require('http')`: 省略`node:`也能找到核心模块

[Built In Object](nodejs-built-in-libraries.md)

## module file 模块文件

- 找不到文件名时, Node.js尝试添加扩展名
  - 先尝试`.js`, `.json`, 最后`.node`
- `.json`被解析为JSON文本文件
- `.node`文件解析为编译过的插件模块
- 以`/`开始的路径名为绝对路径
- 以`./`开始的路径名为相对路径, `./`表示当前目录
- 文件不是用`/`, `./`, `../`表示的, 则模块必须是核心模块或`node_modules`中的文件夹

## `module` object

[module](nodejs-module-object.md)

## 导出模块

[导出模块](nodejs-module-exports.md)

## 导入模块

[导入模块](nodejs-module-imports.md)

## How Node Determine Module System

被认为ES modules的情况

- `.mjs`扩展名文件
- `.js`扩展名文件最近的父级[package.json](nodejs-package-json.md)的type字段为`"type": "module"`
- 将命令字符串当做module, 使用`node --input-type=module -eval "..."`

```sh
node --input-type=module --eval "import {sep} from 'node:path'; console.log(sep);"
```

被认为CommonJS模块的情况

- `.cjs`扩展名文件
- `.js`扩展名文件最近的父级[package.json](nodejs-package-json.md)的type字段为`"type": "commonjs"`
- `.js`扩展名文件最近的父级`package.json`的没有type字段

> package作者应该包含type字段, 即使所有源文件都是CommonJS)

- 文件扩展名不是`.mjs`, `cjs`, `json`, `.node`, `.js`

> 这些文件被require时, 被识别为CommonJS, 而不是在程序的入口点(entry point)

## 处理Circle(循环依赖)

a.js

```javascript
console.log('a starting');
exports.done = fales;
const b - require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a.done');
```
b.js

```javascript
console.log('b starting');
exprots.done = false;
const a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');
```
main.js

```javascript
console.log('main starting');
const a = require('./a.js');
const b = require('./b.js);
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);
```

## Folders as module 文件夹当做模块

- 在文件夹根目录添加`package.json`

`somefolder/package.json`内容

```json
{
    "name": "some-library",
    "main": "./lib/some-library.js"
}
```

- 当使用`require('./somefolder')`时, 时会尝试加载`./somefolder/lib/some-library.js`
  - 如果没有`package.json`,会尝试加载
    - `./somefolder/index.js`
    - `./somefolder/index.node`

## deep into module system

require, exports, module变量在文件中并没有定义

- node 编译`.js`文件有一个包装文件的过程

```javascript
(function (exports, require, moduel, __filename, __dirname)) {
    var math = require('math');
    exports.area = function(radius) {
        return Math.PI * radius * radius;
    }
}
```

