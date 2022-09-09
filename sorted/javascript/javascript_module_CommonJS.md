# CommonJS

- 用于在服务端实现模块代码组织
- 如果想在浏览器中使用CommonJS模块，需要构筑桥梁, 比如[browserify](npm_browserify.md)
- 使用module.exports指定模块的导出内容  

- 模块的主要用途是托管类定义

导出class A
```javascript
class A{}
module.exports = A;
var A = require('./moduleA');
var a = new A();
```

## 无论用require加载多少次，模块永远是单例

```javascript
console.log('moduleA');
var a1 = require('./moduleA') 
var a2 = require('./moduleA')
console.log(a1 === a2); // true
```

## 导入模块

- 使用require()指定依赖

```javascript
var moduleA = require('/module')
```
- node.js中require的参数可以使用
  - 相对路径
  - 绝对路径
  - node_modules目录中的依赖标识符

## 导出模块

- exports对象用于导出模块 
- exports是module的属性
- module对象对象代表模块自身
- node中一个文件就是一个模块

导出函数

```javascript
exports.func = function () {
    // function body
}
```
