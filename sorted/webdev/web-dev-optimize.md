# web dev optimization

## glossary

- layout: 浏览器为元素计算几何信息, size and location 过程, 这个过程在chrome, opera, safari中叫做reflow, 在firefox中叫做layout
- reflow: layout in Firefox

## Pipeline Shipping A Frame

Shipping a frame(帧) to screen order(装载一帧的顺序):

JS -> Style -> Layout -> Paint -> Composite

1. JS: js, css animation, web animation api
2. Style: css file
3. layout: width
4. paint: color, background
5. composite: layer

three changes pipeline

1. visual change: JS -> Style -> Layout -> Paint -> Composite
2. paint change: JS-> Style -> Paint -> Composite
3. composite change(layer change): JS -> Style -> Composite

## Avoid Forced Synchronous Layout

- **Synchronous Layout**: it is posible to for a browser to perform a layout earlier with js

optimize example

- some properties like offsetHeight, offsetWidth will trigger synchronous layout

```js
requestAnimationFrame(logBoxHeight);

function logBoxHeight() {
  box.classList.add('super-big');  // change style
  console.log(box.offsetHeight);
}
```

- get box.offsetHeight will trigger synchronous layout
- 如果不需要立即获取 style 改变之后的 box.offsetHeight, get it before re-layout

```js
console.log(box.offsetHeight);
box.classList.add('super-big');
```

## force reflow


