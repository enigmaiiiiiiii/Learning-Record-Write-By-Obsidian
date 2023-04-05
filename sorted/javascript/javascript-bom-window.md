# JavaScript BOM Window

## requestAnimationFrame(callback)

- 浏览器的下一次重绘之前调用callback
- 如果想要下次重绘时再次调用callback, 必须在callback中调用`window.requestAnimationFrame(callback)`

Parameter

- callback
  - 下一帧重绘时调用的函数
  - 该函数会接收一个DOMHighResTimeStamp参数, 表示当前时间

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
