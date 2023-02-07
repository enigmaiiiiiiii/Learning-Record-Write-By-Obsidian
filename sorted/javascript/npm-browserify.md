# browserify

- 浏览器没有`require`方法， 但是Node.js有，使用browserify, 可以使用require代码来组织JavsScript代码
- 使用方法

一个main.js文件

```javascript
var unique = require('uniq');
var data = [1, 2, 3, 4, 4, 5];
console.log(unique(data));
```

用browserify命令以递归的方式将通过require引入模块的文件main.js生成一个文件bundle.js
browserify命令解析[AST](abstract-syntax-tree.md)，遍历整个项目的依赖关系图

```shell
browserify main.js -o bundle.js
```

在html中通过`<script>`标签引入bundle.js

```html
<script src="bundle.js"></script>
```


