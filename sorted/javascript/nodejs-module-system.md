# NodeJs - Module System

* [What is this](#what-is-this)
* [Core modules](#core-modules)
* [Module file](#module-file)
* [`module` object](#`module`-object)
* [Export module](#export-module)
* [Import Module](#import-module)
* [How Node Determine Module System](#how-node-determine-module-system)
* [Handle Circle Dependency](#handle-circle-dependency)
* [Folders as module](#folders-as-module)
* [deep into module system](#deep-into-module-system)

## What is this

- In NodeJs, a file is a module
- NodeJs include two module system
  - [ECMAScript modules](javascript-ecma-module.md)
  - [CommonJS Modules](javascript-commonjs-module.md)
- NodeJs use CommonJS module loading pattern by default

> CommonJS is a module specification, initially designed for Node.js

## Core modules

- `require('node: http');`
- `require('http')`: omit `node:`, the core module also can be found

[Built In Object](nodejs-built-in-libraries.md)

## Module file

- When file name can't be found, NodeJs try to add extension
  - first `.js`, then `.json`, last `.node`
- `.json` will be parsed as JSON text file
- `.node` file will be parsed as compiled addon module
- path start with `/` will be treated as absolute path
- path start with `./` will be treated as relative path, `./` means current directory
- if file not start with `/`, `./`, `../`, the module must be core module or in `node_modules` folder

## `module` object

[module](nodejs-module-object.md)

## Export module

[Export Module](nodejs-module-exports.md)

## Import Module

[Import Module](nodejs-module-imports.md)

## How Node Determine Module System

cases considered as ES modules

- file with `.mjs` extension
- file with `.js` extension, and the nearest parent [`package.json`](nodejs-package-json.md) `type` field is `"type": "module"`
- take stdin text as module, use `node --input-type=module -eval "..."`

```sh
node --input-type=module --eval "import {sep} from 'node:path'; console.log(sep);"
```

cases considered as CommonJS modules

- `.cjs` extension file
- `.js` extension file, and the nearest parent [`package.json`](nodejs-package-json.md) `type` field is `"type": "commonjs"`
- `.js` extension file and it's nearest parent `package.json` does not have `type` field
  - package author better to include `type` field, even all source files are CommonJS
- file extension is not `.mjs`, `cjs`, `json`, `.node`, `.js`
  - It will be treated as CommonJS, when those files is called by `require`, not the entry point of program

## Handle Circle Dependency

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

## Folders as module

- add package.json to the folder root

`somefolder/package.json`内容

```json
{
    "name": "some-library",
    "main": "./lib/some-library.js"
}
```

when `require('./somefolder')`, it will try to load `./somefolder/lib/some-library.js` 

- if there is no `package.json`, it will try to load:
  - `./somefolder/index.js`
  - `./somefolder/index.node`

## deep into module system

variable `require`, `exports`, `module` does not have definition in file

- node compile `.js` file with a wrapping process

```js
(function (exports, require, moduel, __filename, __dirname)) {
    var math = require('math');
    exports.area = function(radius) {
        return Math.PI * radius * radius;
    }
}
```

