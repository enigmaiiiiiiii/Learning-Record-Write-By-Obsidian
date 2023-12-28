# CommonJS Module

* [what is this](#what-is-this)
* [always singleton](#always-singleton)
* [exports Object](#exports-object)
* [import](#import)

## what is this

- use for organize code in server side
- if you want to use CommonJS module，need tools, like [browserify](npm-browserify.md)
- use module.exports to export object

> module's main purpose is to host class definition

## always singleton

- no matter how many times you use `require` to load a module, the module is always a singleton

```javascript
console.log('moduleA');
var a1 = require('./moduleA')
var a2 = require('./moduleA')
console.log(a1 === a2); // true
```

## Exports Object

- module is a object represent current module itself
- exports is a property of module
- exports value is an object use to export module

> in node a file is a module

use `module.exports` to export object

`circle.js`

```js
const { PI } = Math;
module.exports.area= (r) => PI * r ** 2;

module.exports = {
  r: 4
  color: 2
}
```

use shotcut `exports` to export a object

- if use `module.exports` to in a module, then `exports` will be ignored

```javascript
exports.func = function () {
    // function body
}
```

## Import

use [`require()`]() to specify dependencies

- basic syntax

```js
const moduleA = require('/module')
```

- import object from `cicrle.js`

```js
const circle = require('./circle.js');

const a = circle.area(4);
console.log(a);  // 50.26548245743669
console.log(circle.r); // 4
```

- node.js `require()` parameter can be the following string
  - relative path
  - absolute path
  - `node_modules` directory dependency identifier

