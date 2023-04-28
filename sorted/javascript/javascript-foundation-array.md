# JavaScript Array

- can store element of any type
- `let array = [1, 2, 3, 4, 5]`

## Property

`length`

## Methods

`push()`

- add element to the end of array

`pop()`

- delete last element in array, return deleted element

`map(callbackfn[, thisArg])`

> thisArg is optional

- call `callbackfn` function for each element in array
- return value: **a new array**
- `callbackfn` pass three parameter automaticlly: `element, index, array`
- type of callbackfn: `(element, index, array) => {}`
  - `element`: current element
  - `index`: element index
  - `array`: array its self
- thisArg: callbackfn中的this值

`forEach(callbackFn)`

> difference with `map()` is return value

- `forEach()` return **undefined**

`find(callbackFn)`

- `callbackFn` is a function should return a boolean
  - a [truthy value](javascript-foundation-primitive.md#boolean) to indicate a matching element has been found
  - a falsy value otherwise
  - arguments `element, index, array` are same as `map()`
  - return the first element in the array that satisfies the provided testing function
  - Otherwise, undefined is returned

```js
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
]
function isCherries(fruit) {
  return fruit.name === 'cherries'
}
console.log(inventory.find(isCherries));
```

`flat(depth)`

- create a new array with all sub-array elements concatenated into it
- depth: default 1

```
[0, 1, 2, [3, 4]] -> [0, 1, 2, 3, 4]
```
