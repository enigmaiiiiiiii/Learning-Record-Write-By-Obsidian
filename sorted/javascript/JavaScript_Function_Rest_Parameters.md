# Rest Parameters

- similar syntax to [spread syntax](JavaScript_Spread_Syntax.md)

## Introduction

- `...args` allows a function to accept an **indefinite number of arguments** as `args` **array**
- A function can only one rest parameter in a function
- rest parameter must be the last parameter in a function
- 会导致**其余 未指定名称的 参数**都被包含在一个[数组](JavaScript_Array.md)中

```js
function sum(...theArgs) {
  let total = 0;
  for (let i = 0; i < theArgs.length; i++) {
    total += theArgs[i];
  }
}
console.log(sum(1, 2, 3)); // 6
```

## Difference Between argements Object and Rest Parameters

[`arguments` Object](JavaScript_Function_Arguments.md#arguments-object)

1. array methods like `map`, `reduce` cannot be applied on it

- `arguments` Object is an array-like object, not a real array

2. `argument` Object has callee property

3. in [non-strict]() mode, arguments Object 会同步参数的更新, rest parameters not

```js
function func(a) {
  arguments[0] = 2;
  console.log(a);
}
func(10);  // 2
```

4. arguments Object represent all arguments passed to a function, rest parameters only represent the rest arguments
