# JavaScript - Symbol


* [What Is This](#what-is-this)
* [Create A Symbol](#create-a-symbol)
* [Get Symbol Key](#get-symbol-key)
* [As Property Keys In Object](#as-property-keys-in-object)
* [Symbols Cannot be enumrated in for...in loop](#symbols-cannot-be-enumrated-in-for...in-loop)
* [Omitted by JSON.stringify()](#omitted-by-json.stringify())

## What Is This

- guaranteed to be unique
- mainly used as object property key
- introduced in ECMAScript 2015(ES6)

## Take A Look

create Symbol is simple

- wrapping a string or number in `Symbol()`
- the string or number wrapped by `Symbol()` is called symbol key

```js
let sym = Symbol("foo");
```

> `"foo"` the symbol key

create by `Symbol.for("key")`

- if already exists, return the existing one, otherwise create a new one

```js
let fooGlobalSymbol = Symbol.for("foo");
let otherFooGlobalSymbol = Symbol.for("foo");
console.log(fooGlobalSymbol === otherFooGlobalSymbol);  // true
```

## Use Symbol

Use As Object Property

```js
const objA = {};
const sym = Symbol("symbol key");
objA[sym] = "value A";

const objB = {
    [sym]: "value B"
};
```

- both ways are available

> can't used as function name

## Get Symbol Key

Symbol.keyFor()

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString";
```

## As Property Keys In Object

- symbol can be appear in the place where string or number can be used as property

```js
let s1 = Symbol('foo');
let s2 = Symbol('bar');
let s3 = Symbol('baz');
let s4 = Symbol('qux');
let o = {
    [s1]: 'foo',
    [s2]: 'bar',
    [s3]: 'baz',
    [s4]: 'qux'
};
```

## Symbols Cannot be enumrated in for...in loop

[for...in](javascript-statement.md#forin-statement) loop only iterates over enumerable, non-Symbol properties

```js
const obj = {};
obj[Symbol('a')] = 'a';
obj[Symbol.for('b')] = 'b';
obj['c'] = 'c';
obj.d = 'd';
for (const i in obj) {
    console.log(i);
}
// "c", "d"
```

## Omitted By JSON.stringify()

```js
JSON.stringify({[Symbol('foo')]: 'foo'});
// "{}"
```

## Well-Known Symbols

- Well-Known Symbols are served as "protocols" for certain built-in javascript

`Symbol.iterator`

- represents symbol `@@iterator`

`Symbol.asyncIterator`

- represent symbol `@@asyncIterator`

> `@@iterator` and `@@asyncIterator` are both property keys of an object

## Access To Symbol Properties On Objects 

- method `Object.getOwnPropertySymbols()` returns an array of symbols

