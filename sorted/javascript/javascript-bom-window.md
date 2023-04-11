# JavaScript BOM Window

- [requestAnimationFrame(callback)](#requestanimationframe)

## requestAnimationFrame

- 浏览器的下一次重绘之前调用callback
- 如果想要下次重绘时再次调用callback, 必须在callback中调用`window.requestAnimationFrame(callback)`

Parameters

- callback
  - function to call when next repaint
  - callback receives a single argument
    - parameter for this **callback** is **optional**
    - a DOMHighResTimeStamp representing the **current time**

example 1: element 每帧旋转

```js
function rotate(element) {
  function update(time) {
    element.style.transform = `rotate(${time / 1000}turn)`;
    window.requestAnimationFrame(update);
  }
  update(0);
  // or
  window.requestAnimationFrame(update);
}

const element = document.querySelector('.element');
rotate(element);
```

example2: 2 second duration animation

[code](requestanimationframe-2s-duration.md)
