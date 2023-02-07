# 基本类型

- [number](#number)
- [bigint](#bigint)
- [string](#string)
- [boolean](#boolean)
- [null](#null)
- [undifined](#undifined)
- [symbol](#symbol)

## number

- 64位浮点格式

```javascript
let myAge = 17;
let myAge = 2.456;
```

- `Number(value)`, 将value转换成number, 无法转换, 返回NaN
- `new Number(value)`, 将value包装成可操作的数值对象, 很少用

```javascript
new Number(value);
var a = new Number('123');  // a === 123 false
var b = Number('123');  // b === 123 is true
```

## bigint

## string

[string](javascript-string.md)

## boolean

- false值
  - `false` 关键字
  - `0`
  - `-0`
  - `0n`: bigint作为bool值
  - `""`: 空字符串 
  - `null`: 缺少值
  - `undefined`
  - `NaN`: 非数值
- true值
  - 被定义为false值以外的任何值

## null

## undifined

## symbol
