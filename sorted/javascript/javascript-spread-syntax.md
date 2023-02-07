# Spread Syntax

## feature

- similar to [rest parameters](javascript-rest-parameters.md)

## introduction

数组, 字符串, 对象展开

example code for array and string

```js
function fx(x, y, z) {
    console.log(x, y, z)
}
const numbers = [1, 2, 3];
const str = "hello";
fx(numbers);  // 1, 2, 3
fx(str);      // h, e, l
```

example code for object

```js
const obj1 = {foo: 'bar', x: 42};
const mergeobj = {...obj1, y: 13};
console.log(mergeobj); // {foo: "bar", x: 42, y: 13}
// without ...
const mergeobj2 = {obj1, y: 13};
console.log(mergeobj2); // {obj1: {foo: "bar", x: 42}, y: 13}
```

- without `...`, object will be a **property** of the new object

