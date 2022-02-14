# DOM

- Document Object Model
- 用document表示HTML对象

查找id为maze的HTML元素

```javascript
var x = document.getElementById("maze");
```

html元素的样式

```javascript
var x = document.getElementById("maze").style.property;
```

按css选择器回元素
选择`id='maze'`的元素
参数为[css选择器](CSS选择器.md)

```javascript
document.querySelector("#maze");
```