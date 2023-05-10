# Arrow Function

## Syntax

```javascript
(param) => expression

(param, paramN) => {
    // function body
}
```

- `param`: parameter of arrow function
- when there is only one parameter, the `()` around parameter can be omitted


## Cannot be used as constructors

## Should be used as methods

- because arrow function do not have their own `this`
- but no error raised

## don't have own bindings

- don't have bindings to
  - [`this`]()
  - [`arguments`](javascript-function-arguments.md#arguments-object)
  - [`super`]()
  - [`new.target`]()

```js
const arguments = [1, 2, 3];
const arr = () => arguments[0];
arr(); // 1

function foo(n) {
  // no arguments object for arrow functions
  const f = () => arguments[0];
  return f();
}
foo(3);
```

## Connot use yield

Cannot use [yield](javascript-iteration.md#yield) within their body
