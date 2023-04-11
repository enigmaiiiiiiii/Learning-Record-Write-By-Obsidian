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