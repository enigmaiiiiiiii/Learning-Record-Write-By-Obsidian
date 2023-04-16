# JavaScript Operator

## Math Operator

- `+`, `-`, `*`, `/`, `%`, `**`
- `++`, `--`
- `+=`, `-=`, `*=`, `/=`

## Compare Operator

`==`: 操作数相等返回true

- 比较时，等式两边先转换为相同类型, 最终比较方式等同于`===`

`===`: 操作数相等且**类型相同**返回true

- 被比较值都不进行隐式转换

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

