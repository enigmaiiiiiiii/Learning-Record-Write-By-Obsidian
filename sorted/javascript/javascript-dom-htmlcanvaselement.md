# HTMLCanvasElement

* [width and height](#width-and-height)
* [clientWidth and clientHeight](#clientwidth-and-clientheight)
* [clientWidth/clientHeight vs width/height](#clientwidthclientheight-vs-widthheight)

## width and height

- set the number of pixels that the canvas
- default is 300x150

compare with [`clientWidth` and `clientHeight`](javascript-dom-element.md#clientWidth)

- if `canvas.width = 10` and `canvas.clientWidth = 100px`
- there are 10 pixels in 100px horizontally

```html
<canvas id="c"
  width="10"
  height="15"
  style="width: 100px; height: 300px;"
>
</canvas>
```

```js
const canvas = document.getElementById('c')
console.log(canvas.width);  // 10
console.log(canvas.clientWidth);  // 100px
```


