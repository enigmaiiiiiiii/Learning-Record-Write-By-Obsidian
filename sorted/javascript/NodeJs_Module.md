# NodeJs模块管理系统

- Node.js包括两个模块系统
  - [ECMAScript modules](JavaScript_Module_ES6.md)
  - CommonJS Modules

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

## Folders as module 文件夹当做模块

- 在文件夹根目录添加`package.json`

```json
{
    "name": "some-library",
    "main": "./lib/some-library.js"
}
```

## 默认为CommonJS模块的情况

- `.cjs`扩展名文件
- `.js`扩展名文件最近的父级[package.json](npm_package_json.md)的type字段为common.js
- `.js`扩展名文件最近的父级`package.json`的没有type字段
> package作者应该包含type字段, 即使所有源文件都是CommonJS)
- 文件扩展名不是`.mjs`, `cjs`, `json`, `.node`, `.js`
> 这些文件被require时, 被识别为CommonJS, 而不是在程序的入口点(entry point)

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