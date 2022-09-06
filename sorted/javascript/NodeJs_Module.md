# NodeJs模块管理系统

- Node.js包括两个模块系统
  - [ECMAScript modules](JavaScript_Module_ES6.md)
  - [CommonJS Modules](JavaScript_Module_CommonJS.md)
- Nodejs默认使用CommonJS模块加载模式

> CommonJS是一种模块规范, 最初用于Nodejs

## Core mudules 核心模块

- `require('node: http');`
- `require('http')`: 省略`node:`也能找到核心模块

## module file 模块文件

- 找不到文件名时, Node.js尝试添加扩展名
  - 先尝试`.js`, `.json`, 最后`.node`
- `.json`被解析为JSON文本文件
- `.node`文件解析为编译过的插件模块
- 以`/`开始的路径名为绝对路径
- 以`./`开始的路径名为相对路径, `./`表示当前目录
- 文件不是用`/`, `./`, `../`表示的, 则模块必须是核心模块或`node_modules`中的文件夹

## 导出子路径

- todo

## 从`node_modules`文件夹加载模块

- 传给`require("module_name")`的参数不是以`./`, `../`, `/`, nodejs则开始从`./node_modules`加载
  - 可以指定特定文件`module_name/path/to/file`
- `/home/ry/projects/foo.js`调用`require("bar.js")`时NodeJs的搜索顺序
  - `/home/ry/projects/node_modules/bar.js`
  - `/home/ry/node_modules/bar.js`
  - `/home/node_modules/bar.js`
  - `/node_modules/bar.js`

## 从全局变量加载模块

- NodeJs在哪里都找不到指定模块时, 从NODE_PATH中搜索模块

## 确定模块系统

被认为ES modules的情况

- `.mjs`扩展名文件
- `.js`扩展名文件最近的父级[package.json](NodeJs_Package_Json.md)的type字段为`"type": "module"`
- 命令行参数传入`--input-type=module`

```shell
node --input-type=module --eval "import {sep} from 'node:path'; console.log(sep);"
```

被认为CommonJS模块的情况

- `.cjs`扩展名文件
- `.js`扩展名文件最近的父级[package.json](NodeJs_Package_Json.md)的type字段为`"type": "commonjs"`
- `.js`扩展名文件最近的父级`package.json`的没有type字段
> package作者应该包含type字段, 即使所有源文件都是CommonJS)
- 文件扩展名不是`.mjs`, `cjs`, `json`, `.node`, `.js`
> 这些文件被require时, 被识别为CommonJS, 而不是在程序的入口点(entry point)

## `module` object

## 处理Circle

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
