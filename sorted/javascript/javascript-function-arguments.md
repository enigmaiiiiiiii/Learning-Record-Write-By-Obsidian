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

default parameters value can be

- primitive
- object
- function return value

default primitve parameters

```javascript
function multiply(a, b = 1) {
}
```

default **object parameters**

```js
function foo(obj = {x: 1, y: 2}) {
    return obj.x + obj.y
}
```

object **destructuring** to assign default properties to object parameter types

- array/object destructuring

```js
function fooA([x = 1, y = 2]) {
    return x + y;
}
function fooB({x = 1, y = 2}) {
    return x + y;
}

console.log(fooA([]))  // 3
console.log(fooB({}))  // 3
```

- **HAVE PROBLEMS** when call without argument

```js
console.log(fooA())  // NaN
console.log(fooB())  // TypeError: Cannot read property 'x' of undefined
```

**To Call function without argument, mix destructuring default parameters with object default parameters**

```js
function fooC({x = 1, y = 2} = {}) {
    return x + y;
}
console.log(fooC())  // 3
```

## Rest Parameters

[Rest Parameters](javascript-function-rest-parameters.md)

