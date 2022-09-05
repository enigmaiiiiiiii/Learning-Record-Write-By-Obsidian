## CommonJS

- 用于在服务端实现模块代码组织
- 如果想在浏览器中使用CommonJS模块，需要构筑桥梁, 比如[browserify](npm_browserify.md)
- 使用require指定依赖`var moduleA = require('/module')`
- node.js中require的参数可以使用
  1. 相对路径
  2. 绝对路径
  3. node_modules目录中的依赖标识符
- 使用module.exports指定模块的导出内容  

- 模块的主要用途时托管类定义

导出class A
```javascript
class A{}
module.exports = A;
var A = require('./moduleA');
var a = new A();
```

- 无论用require加载多少次，模块永远是单例的

```javascript
console.log('moduleA');
var a1 = require('./moduleA') 
var a2 = require('./moduleA')
console.log(a1 === a2); // true
```

## 指定依赖

- require
