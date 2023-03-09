# CommonJS Module

## what is this

- 用于在服务端实现模块代码组织
- 如果想在浏览器中使用CommonJS模块，需要构筑桥梁, 比如[browserify](npm-browserify.md)
- 使用module.exports指定模块的导出内容

> 模块的主要用途是托管类定义

## 无论用require加载多少次，模块永远是单例

```javascript
console.log('moduleA');
var a1 = require('./moduleA')
var a2 = require('./moduleA')
console.log(a1 === a2); // true
```


## export

- exports对象用于导出模块
- exports是module的属性
- module对象对象代表模块自身
- node中一个文件就是一个模块

use `module.exports` to export object

circle.js

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

## import

import object from `cicrle.js`

```js
const circle = require('./circle.js');

const a = circle.area(4);
console.log(a);  // 50.26548245743669
console.log(circle.r); // 4
```


- 使用require()指定依赖

```javascript
var moduleA = require('/module')
```
- node.js中require的参数可以使用
  - 相对路径
  - 绝对路径
  - node_modules目录中的依赖标识符