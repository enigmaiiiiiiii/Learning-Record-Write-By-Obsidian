# JavaScript Regex

- [Create A Regex](#create-a-regex)
- [Escape Character](#escape-character)

## Create A Regex

this three ways are to create the same regex

```js
/ab+c/i
new RegExp(/ab+c/, 'i');
new RegExp("ab+c", 'i')
```

1. use charactor `/`

```js
var re = /ab+c/;
```

- 正则表达式不需要修改时，使用这种方式可以获得更好的性能

2. use constructor

- `RegExp(pattern[, flags])`

```js
new RegExp("ab+c", i)
new RegExp(/ab+c/, i)
```

flags

- `g`: Find all matches instead of stopping after the first match
- `i`: ignore case
- `m`
- `s`
- `u`
- `y`

## Escape Character

`\`: escape character

- `/ab\+c/`: match string that contains `ab+c`

## Methods

## Methods

[Regex Method](JavaScript_Regex_Method.md)

## Practical Use

[Regex Pratical Use](JavaScript_Regex_Practical_Use.md)
