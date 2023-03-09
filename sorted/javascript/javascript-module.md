# 模块模式

## 两种模块模式

[ECMAScript模块](javascript-module-es6.md)

[CommonJS](javascript-module-commonjs.md)

> [ECMASCript]支持模块之前的模块加载模式

[Relate](javascript-module-of-es-and-commonjs.md)

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

## .mjs模块文件

- 比较清晰，指出那些文件是javascript模块文件
- 保证文件被运行时环境和构建工具识别, 比如nodejs和Babel
- 多数服务器可以正确地处理 `.js` 文件的类型，但是`.mjs` 还不行
