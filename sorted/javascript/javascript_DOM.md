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
使用css选择器选择document对象

```javascript
document.querySelector("#maze");
```

- 选择`id='maze'`的元素, 参数格式为[css选择器](CSS_Selector.md)


## history对象

- 浏览器的会话历史，不是WebExtensions history
- back(), forward(), go()方法来完成在记录中向后向前跳转