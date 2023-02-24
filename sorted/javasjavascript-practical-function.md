# JavaScript Practical Function

## throttle

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