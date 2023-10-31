# JavaScript - Array

- can store element of any type
- `let array = [1, 2, 3, 4, 5]`

## Property

`length`

## Methods

`push()`

- add element to the end of array

`pop()`

- delete last element in array, return deleted element

`map(callbackFn[, thisArg])`

> thisArg is optional

- call `callbackFn` function for each element in array
- return value: **a new array**
- `callbackFn` take three parameter automaticlly: `element, index, array`
- type of callbackfn: `(element, index, array) => {}`
  - `element`: current element
  - `index`: element index
  - `array`: array its self
- return value of `callbackFn` will be added to new array
- `thisArg`: argument value of `this` in `callbackFn` 

`forEach(callbackFn)`

- difference with `map()` which will return value, `forEach()` return **undefined**


`find(callbackFn)`

- `callbackFn`: A function should return a boolean
  - function signature `(element, index, array) => boolean`
  - a [truthy value](javascript-foundation-primitive.md#boolean) to indicate a matching element has been found
  - a [falsy value](javascript-foundation-primitive.md#boolean) otherwise
  - **return the first element** in the array that satisfies the provided testing function
  - Otherwise, undefined is returned

`filter(callbackFn)`

- `callbackFn`: A function return boolean
- this method return an new array
  - consist of elements whose value pass to callbackFn is true
  - whose elements are shallow copy of original array

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
