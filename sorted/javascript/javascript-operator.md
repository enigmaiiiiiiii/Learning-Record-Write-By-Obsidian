# JavaScript Operator

* [Math Operator](#math-operator)
* [Compare Operator](#compare-operator)
* [delete](#delete)
* [bit operator](#bit-operator)

## Logic Operator

- `&&`, `||`, `!`

```js
function createArray(array) {
  array || (array = new Array(5));
  return array;
}
```

expression `array || (array = new Array(5))` means

- if `array` is [falsy](), then `array = new Array(5)` will be executed
- else do nothing

## Math Operator

- `+`, `-`, `*`, `/`, `%`, `**`
- `++`, `--`
- `+=`, `-=`, `*=`, `/=`

## Compare Operator

`==`: loose equality

- when compare，two operands will first convert to same type, then compare use `===`

```js
"1" == 1 // true
0 == false // true
0 == null // false
null == undefined // true
```

`===`:

- do not convert type before compare

```js
"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true
[] === [];  // false
```

`Object.is(val1, val2)`

```js
Object.is([], [])
```

## delete

- remove **property** from object

```js
const Employee = {
  firstname: 'John',
  lastname: 'Doe',
}

delete Employee.firstname
console.log(Employee.firstname) // undefined
```

## bit operator

`<<`: left shift

- excess bits are discarded
- zero bits are added to the right

```js
const a = 5  // 00000000000000000000000000000101
const b = a << 2  // 00000000000000000000000000010100
console.log(b)  // 20
```

- equal to `a * 2^2`

`>>`: right shift

- excess bits are discarded
- zero bits are added to the left

```js
const a = 100  // 00000000000000000000000001100100
const b = a >> 2  // 00000000000000000000000000011001
console.log(b)  // 25
```

- equal to `a / 2^2`

## typeof

`typeof operand`

- operand 
- return value is a string, and is one of following values
  - string
  - number
  - bigint
  - boolean
  - symbol
  - undefined
  - object
  - function

```js
typeof 3 // "number"
```

## in

`prop in object`

- return `true` if `object` has `prop` property or `prop` is on [prototype chain](javascript-prototype.md#prototype-chain)

> check direct property use [`Object.hasOwn()`](javascript-global-object.md#objecthasown) instead

