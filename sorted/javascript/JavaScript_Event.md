# Event

## Event Loop

[Event Loop](JavaScript_Event_Loop.md)

## web预定义事件

clickEvent as a example

- add clickevent on a button
  - 通过`addEventListener`添加事件
  - 通过`onclick`属性添加事件

```js
var btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
  alert("Hello World!");
});
btn.onclick = function() {
  alert("Hello World!");
};
```

- keypress event
- paste event
- fullscreenchange event
- [...](https://developer.mozilla.org/zh-CN/docs/Web/Events)

## Event接口

Event():

- Event对象的构造函数

属性

- Event.bubbles
- Event.type: 事件类型

## 基于Event接口的事件

keyboard event as a example

属性

- KeyboardEvent.key: 按键的值

## handle event

处理键盘事件

```js
document.onkeydown = function(e) {
  if (e && e.keyCode == 27) {
    // things to do when ESC key is pressed
  }
  if (e && e.keyCode == 113) {
    // things to do when F2 key is pressed
  }
  if (e && e.keyCode == 13) {
    // thing to do when enter key is pressed
  }
};
```