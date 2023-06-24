# throttle function

## feature

- a function that return a new function that can throttle the execution of a given function
- when you want limit the frequency of calling a funciton

## code

```js
function throttle(fn, delay) {
  let last = 0, timer = null;

  return function() {
    let context = this;
    let args = arguments;
    let now = +new Date();

    if (now - last < delay) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
```

## demonstration

script.js

```js
function throttle(fn, delay) {
  // ...
}

function handleScroll() {
  console.log('scroll event throttled');
}

window.addEventListener('scroll', throttle(handleScroll, 1000));
```

index.html

```html
<script src="script.js"></script>
<body>
  <div></div>
</body>
<style>
  div {
    width: 100px;
    height: calc(100vh + 500px);
    background-color: red;
  }
</style>
```
