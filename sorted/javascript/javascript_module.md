# 模块模式

## html页面中引入module

设置script标签type属性为`type="module"`

- 代码中使用模块

```html
<script type="module">
  // 模块代码
</script>
```
- 通过外部资源引入模块

```html
<script type="module" src="path/to/myModule.sj"></script>
```

## ECMAScript模块模式

[ECMAScript模块](JavaScript_Module_ES6.md)

## CommonJS模块模式

- ES支持模块之前的模块加载模式

[CommonJS](javascript_module_CommonJS.md)

## CommonJS与ES6

区别

- CommonJS模块输出的是值的拷贝，ES6输出值的引用 
- CommonJS导出单个值，ES6导出多个值
- CommonJS运行时加载，ES6编译时输出接口
- CommonJS可以写在语句里，ES6只能写在[顶层](JavaScript_Context.md)
- CommonJS this是window，ES6 this是undifined

***

- ES只将`.js`, `.mjs`, `cjs`扩展名文件当做javascript文件
- CommonJS把所有缺少`.json`和`.node`扩展名的文件当做javascript文件 

***

- CommonJS不允许加载ES6模块, ES6可以加载CommonJS模块
- ES不支持以文件夹作为模块加载

相同特性

- 模块代码只在加载后执行
- 模块只能加载一次
- 模块是单例
- 模块可以定义公共接口
- 模块可以请求加载其他模块
- 支持循环依赖

EC6新增特性

- 默认严格模式下执行
- 不共享全局命名空间
- 顶级模块this的值时undifined(常规脚本中是window)
- 模块中的var声明不会添加到window对象
- ES6模块是异步加载和执行的

## .mjs模块文件

- 比较清晰，指出那些文件是javascript模块文件
- 保证文件被运行时环境和构建工具识别, 比如nodejs和Babel
- 多数服务器可以正确地处理 `.js` 文件的类型，但是`.mjs` 还不行
