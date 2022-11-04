# DOM

- 文档对象模型(Document Object Model)
- 用document表示HTML对象

返回查找id为maze的HTML元素

```javascript
var x = document.getElementById("maze");
```

返回html元素的style属性

- style属性是一个CSSStyleDeclaration对象
- 不包含通过层叠机制从文档样式和外部样式中继承而来的样式

```javascript
var x = document.getElementById("maze").style.property;
```
使用css选择器选择document对象

```javascript
document.querySelector("#maze");
```

- 选择`id='maze'`的元素, 参数格式为[css选择器](CSS_Selector.md)

## HTMLCollection


## XMLHttpRequest

[XMLHttpRequest](JavaScript_XMLHttpRequest.md)

- 允许页面在不刷新的情况下与服务器交换数据
- 大量用于AJAX编程