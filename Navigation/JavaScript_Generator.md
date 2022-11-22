# Generator

[CSharp中也有类似的概念](CSharp_IEnumerator_Interface.md)

- 三个方法: next(), return(), throw()

## next()

- 返回的对象包含两个属性
    - `value`属性: 生成器函数中`yield`表达式的值
    - `done`属性: 生成器函数是否已经执行完毕
      - 通过yield退出的生成器函数, `done`属性为`true`
      - 通过`return`退出的生成器函数, `done`属性为`true`
- next()方法如果传入了参数, **yield*表达式(expression)***的值就是这个参数

## return()

- 提前终止生成器函数
- 返回: `{done: true, value: <return()方法的参数>}`

## throw()

- g.throw(errorObj)将一个错误注入到生成器函数中
- 如果生成器函数内部没有处理错误, 生成器就会关闭
- 如果生成器函数内部有处理错误, 生成器会跳过本次yield, 恢复执行

函数体未处理错误

```js
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}
const g = generatorFn();  // suspended
console.log(g);
try {
    g.throw('foo');
} catch (e) {
    console.log(e);
}
console.log(g);  // closed
```

函数体处理了错误

```js
function * generatorFn() {
    try {
        for (const x of [1, 2, 3]) {
            yield x;
        }
    } catch (e) {
        console.log(e);
    }
}
const g = generatorFn();  // suspended
console.log(g.next());   // {value: 1, done: false}
g.throw('foo');
console.log(g.next());   // {value: 3, done: false}
```

## 内置Generator对象

[CSharp中相似的概念: 枚举器](CSharp_IEnumerator_Interface.md)

- 生成器对象
- 符合[Iterator](#Iterator-protocol(迭代器协议))和[Iterable](#iterable-protocol(可迭代协议))协议

三个方法, `next`, `return`, `throw`

- Generator.prototype.next(): 返回yield表达式的值
- Generator.prototype.return(): 返回给定的值, 并结束遍历Generator对象
- Generator.prototype.throw(): 抛出一个错误