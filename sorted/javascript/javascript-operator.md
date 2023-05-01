# JavaScript Operator

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

