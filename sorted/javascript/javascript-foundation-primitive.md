# Primitive

* [number](#number)
* [bigint](#bigint)
* [string](#string)
* [boolean](#boolean)
* [null](#null)
* [undifined](#undifined)
* [null vs undefined](#null-vs-undefined)
* [symbol](#symbol)

## number

- 64 bits floating point format

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

falsy

- `false`: the keyword
- `0`: Number zero
- `-0`: Number negative zero, also `-0.0`, `-0x0`
- `0n`: BigInt zero
- `""`: Empty string
- `null`: the keyword, absence of any value
- `undefined`: the keyword
- `NaN`: not a number

truthy

- except falsy values

## null

- **intentional** absence of any [object] value

## undifined

- variable that has been declared not been assigned a value
- function returns undefined if a value was not returned

## null vs undefined

```js
typeof null;  // object
typeof undefined // 'undefined'
null === undefined; // false
null == undefined; // true
Number.isNaN(1 + null);  // false
Number.isNaN(1 + undefined);  // true
```

## symbol

[symbol](javascript-symbol.md)

