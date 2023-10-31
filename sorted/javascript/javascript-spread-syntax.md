# JavaScript - Spread Syntax

## Feature

- similar to [rest parameters](javascript-function-rest-parameters.md)

## Introduction

> array, string, object spread

for array and string

```js
function fx(x, y, z) {
    console.log(x, y, z)
}
const numbers = [1, 2, 3];
const str = "hello";
fx(...numbers);  // 1, 2, 3
fx(...str);      // h, e, l
```

for object

```js
const obj1 = {foo: 'bar', x: 42};

// with "..." syntax
const mergeObj = {...obj1, y: 13};
// without "..." syntax
const mergeObj2 = {obj1, y: 13};
```

- without `...`, object will be a **property** of the new object, property name is variable name

object shape

```js
mergeobj = {
  foo: 'bar',
  x: 42,
  y: 13
}
mergeobj2 = {
  obj1: {
    foo: 'bar',
    x: 42
  },
  y: 13
}
```
