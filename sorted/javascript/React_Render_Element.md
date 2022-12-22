# render an element

- element is cheap to create

## conditional render 

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

##
