# JavaScript - Function Definition

## 3 Ways To Define A Function

- function definition will be read into context before code execution

option 1

```js
function foo(arg0, arg1, arg2) {
    // fucntion body
}
```

option 2

```js
let foo = function(arg0, arg1,arg2) {
    // fucntion body
}
```

option 3

```js
let foo = new Function("arg0", "arg1", "function body") { }
```

- those functions are can be called by `foo()`

## (IIFE)Immediately Invoked Function Expression

- used to emulate [block-level scope]()
- after ECMAScript6, IIFE is not necessary to emulate block-level scope

```javascript
(function() {
  // Scope Field
})();
```

es6 block scope

```js
{
    const foo = 1;
}
```
