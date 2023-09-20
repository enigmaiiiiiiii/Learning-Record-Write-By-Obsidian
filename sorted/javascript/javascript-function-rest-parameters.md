# JavaScript - Rest Parameters

- similar syntax to [spread syntax](javascript-spread-syntax.md)

## What is this

- `...args` allows a function to accept an **indefinite number of arguments** as `args` **array**
- A function can only one rest parameter in a function
- rest parameter must be the last parameter in a function
- will cause all the rest arguments that have not been given a separate name to be placed within a [array](javascript-foundation-array.md)

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

[`arguments` Object](javascript-function-arguments.md#arguments-object)

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
