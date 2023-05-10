# Generator Function

* [Generator Function](#generator-function-1)
* [keyword yield](#keyword-yield)

## Generator Function

- use `function*` declare a generator function
- `*methodName()` declare a generator method

generator function

```js
function* generator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}
const gen = generator(2);
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4
console.log(gen.next().value); // 5
```

generator method

```js
class Foo {
    *generatorMethod(i) {
        yield i + 1;
        yield i + 2;
        yield i + 3;
    }
}
```


## keyword yield

[here is yield in CSharp](csharp-yield.md)

syntax

`[rv] = yield [expression]`

- `rv`: 传递给生成器对象的[next()](javascript-generator.md)方法的参数
- `expression`: 返回给生成器函数的值

```js
function* generator() {
    yield 10;
    x = yield 'foo';
    yield x;
}
var gen = generator();
console.log(gen.next()); // { value: 10, done: false }
console.log(gen.next()); // { value: 'foo', done: false }
console.log(gen.next(5)); // 执行x=5, 返回{ value: 5, done: false }
```

how to understand yield

1. 用来暂停和恢复生成器函数的执行
2. 生成器函数在遇到`yield`表达式之前, 正常执行
3. 生成器函数在遇到yield关键字时, 会暂停执行, 并将yield后面的表达式的值作为返回值
4. 生成器函数在下一次调用next()方法时, 会从暂停的位置继续执行
5. 遇到`yield`时, 停止执行
6. 可以作为函数中的参数, yield会接收传递给`next()`的第一个值

```js
function* generatorFn(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
}
let generatorObject = generatorFn('foo');
generatorObject.next('bar');  // foo
generatorObject.next('baz');  // baz
generatorObject.next('qux');  // qux
```

`yield*`

- 将迭代行为传递给另一个可迭代对象

```js
function* generatorFn() {
    yield* [1, 2, 3];
}
```
