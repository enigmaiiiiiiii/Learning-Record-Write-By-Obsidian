# Symbol

- ECMA6新增的数据类型

```js
let sym = Symbol();
```

使用全局符号注册

```js
let fooGlobalSymbol = Symbol.for('foo');
let otherFooGlobalSymbol = Symbol.for('foo');
console.log(fooGlobalSymbol === otherFooGlobalSymbol);  // true
```

- Symbol.for(name), 如果已经存在, 则返回已有的, 否则创建一个新的

## 符号可以作为属性

- 符号可以出现在使用字符串或数值作为属性的地方

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

## Symbols 不能在for...in中被枚举

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

## 被JSON.stringify()忽略

```js
JSON.stringify({[Symbol('foo')]: 'foo'});
// "{}"
```