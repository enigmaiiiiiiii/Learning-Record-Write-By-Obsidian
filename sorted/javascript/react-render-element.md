# render an element

- element is cheap to create

## Conditional Render

with logical `&&` operator

```js
render() {
  const count = 0;
  return (
    <div>
      {count && <h1>Count: {count}</h1>}
    </div>
  )
}
```

- if `count` is [true](javascript-foundation-primitive.md#boolean), the element right after `&&` will be rendered
