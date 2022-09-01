# 使用Javascript

## html文件引入脚本

- `<script>`标签用于嵌入或引用脚本
  - src: 外部脚本URI
  - type: 定义脚本语言类型
    - 默认视作javascript
    - 支持mime类型, 包括text/javascript, text/ecmascript, aplication/javascript, application/ecmascript
    - 值为module: 代码会被当做Javascript[模块](JavaScript_Module.md) 

## 外部引入

```html
<script src='main.js'></script>
```

## 内部引入

- var定义的变量属于window对象的属性

```html
<script>
    var x = 'hello';
    console.log(x);
</script>
```
