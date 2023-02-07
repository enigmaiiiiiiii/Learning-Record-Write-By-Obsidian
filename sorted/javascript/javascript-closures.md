# 闭包

- 嵌套函数就是一个闭包
- 闭包: 可以访问外部函数的参数和变量, 外部函数却不能使用它的参数和变量

## 嵌套函数

```js
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
```

## 形成闭包

- **闭包**和**对象**在保存数据上并没有区别, 在访问数据时闭包更隐蔽
- 闭包内的变量或属性除了闭包内的函数可以访问, 没有其它方式可以访问
- 实现了数据的**封装**和**保存**

```javascript
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
const fnIside = outside(3);  // 返回inside函数
const result = fnInside(5);  // 返回8, 无论何时调用fnInside, 都会使用3作为x的值
fnInside = null;  // 释放对fnInside的引用
```

**内部函数**将**外部函数**作用域链添加到自己的作用域链中, 体现在

- 外部传入outside的参数x, 并不会再执行完毕后销毁
- x的值会一直保存在fnInside中, 直到fnInside被销毁
- `fnInside = null`后， 垃圾回收可以释放内存

使用匿名函数生成闭包

```js
const getCode = (function () {
  const apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

getCode();    // Returns the apiCode
```


## 闭包会占用更多内存