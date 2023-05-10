# JavaScript BOM Window

- [requestAnimationFrame(callback)](#requestanimationframe)

## requestAnimationFrame

- `window.requestAnimationFrame(callback)`
- browser want to called `callback` on next repaint
- you must call `requestAnimationFrame(callback)` in callback body, if you want to call callback on next repaint
- generally match the display refresh rate

Parameters

- `callback`
  - function to call when next repaint
  - callback receives a single argument
    - parameter for this **callback** is **optional**
    - a DOMHighResTimeStamp representing the **current time**

example 1: element rotate on every repaint

```js
function rotate(element) {
  function update(time) {
    element.style.transform = `rotate(${time / 1000}turn)`;
    // call window.requestAnimationFrame() in callback body
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


## prompt
