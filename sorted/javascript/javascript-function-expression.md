# JavaScript - Function Expression

## Defining Function Expression

1. for function declaration: `function foo(){...}`, the function name `foo` is the function expression
2. assign anonymous function to a variable: `let foo = function(){...}`

```js
const square = function(number) {
    return number * number;
}
var x = square(4);
```

## Arrow Function Expression

[arrow function](javascript-arrow-function.md)

## function expression can be passed as a parameter

```js
function map(f, a) {
    let result = [];
    let i;
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
const f = function(x) {
    return x * x * x;
}
map(f, [0, 1, 2, 5, 10]);
```

