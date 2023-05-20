# Symbol

## What is This

- guaranteed to be unique
- introduced in ECMAScript 2015(es6)

## create a symbol

create by `Symbol("key")`

```js
let sym = Symbol("foo");
```

create by `Symbol.for("key")`

- if already exists, return the existing one, otherwise create a new one

```js
let fooGlobalSymbol = Symbol.for("foo");
let otherFooGlobalSymbol = Symbol.for("foo");
console.log(fooGlobalSymbol === otherFooGlobalSymbol);  // true
```

## get symbol key

Symbol.keyFor()

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString";
```

## As property keys in object

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

## omit by JSON.stringify()

```js
JSON.stringify({[Symbol('foo')]: 'foo'});
// "{}"
```