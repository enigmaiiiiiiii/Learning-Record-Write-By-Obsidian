# DOM

- Document Object Model
- 用document表示HTML对象

返回查找id为maze的HTML元素

```javascript
var x = document.getElementById("maze");
```

返回html元素的样式

```javascript
var x = document.getElementById("maze").style.property;
```

选择`id='maze'`的元素, 参数格式为[css选择器](CSS_Selector.md)

```javascript
document.querySelector("#maze");
```