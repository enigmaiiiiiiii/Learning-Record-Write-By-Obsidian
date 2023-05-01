# Graphics Rotate

Rotation around x axis

- rotate with angle π/3 around x axis

```js
const angle = Math.PI / 3 // π/3
const matrix = [
  [1, 0, 0, 0],
  [0, Math.cos(angle), -Math.sin(angle), 0],
  [0, Math.sin(angle), Math.cos(angle), 0],
  [0, 0, 0, 1]
]
```