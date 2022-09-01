# this对象

## 闭包中的this

- 内部函数没有使用[箭头函数], 则this绑定在到执行函数的上下文

## 关于this

- 在方法中this表示该方法所属的[对象](javascript_object.md)
- 全局函数中, 非严格模式this表示window, 严格模式下this为undifined
- 对象属性引用链中只有上一层或者说最后一层在调用位置中起作用

```javascript
function foo() {
  console.log(this.a);
}
var obj2 = {
  a:42,
  foo: foo
};
var obj1 = {
  a: 2,
  obj2: obj2
};
obj1.obj2.foo();  // 42
```

- 通过call(), bind(), apply()方法可以显式设置this绑定的对象
- 在[回调函数](callback_function.md)中会失去参数中绑定的this, 因为[参数](JavaScript_Arguments_Object.md)传递是一种赋值 
- 所以在回调函数中使用this的方法，可以回调函数之前使用bind()返回新函数
