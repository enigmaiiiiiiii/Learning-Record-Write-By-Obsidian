# Parameter

* [Feature](#feature)
* [Arguments Object](#arguments-object)
* [Default Parameters](#default-parameters)
* [Rest Parameters](#rest-parameters)

## Feature

- ECMAScript don't care about the number or type of arguments

## Arguments Object

- `arguments` is an array-like object accessible inside functions
  - `arguments[0]`: represent the first argument
  - `arguments[1]`: represent the second argument
- `arguments.length`: represent the number of arguments
- `arguments` won't show the default value of parameters

## Default Parameters

```javascript
function multiply(a, b = 1) {
}
```

- default parameters value can be
  - primitive
  - object
  - function return value

object destructuring to assign default properties to object parameter types

- array/object destructuring

```js
function filledArray([x = 1, y = 2] = []) {
    return x + y;
}
function filledObject({x = 1, y = 2} = {}) {
    return x + y;
}
```

## Rest Parameters

[Rest Parameters](javascript-function-rest-parameters.md)
