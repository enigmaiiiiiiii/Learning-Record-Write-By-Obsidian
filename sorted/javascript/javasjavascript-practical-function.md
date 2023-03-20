# JavaScript Practical Function

## throttle

[throttle](throttle.md)

```js
function throttle(fn, delay) {
  let last = 0,
    timer = null;

  return function() {
    let context = this;
    let args = arguments;
    let now = +new Date();

    if (now - last < delay) {
      if (timer) {
        cancelAnimationFrame(timer);
      }
      timer = requestAnimationFrame(function() {
        last = now;
        fn.apply(context, args);
      });
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
```

## partially applied function

```js
function add(a) {
  return function(b) {
    return a + b;
  }
}

const add5 = add(5);
console.log(add5(3));




