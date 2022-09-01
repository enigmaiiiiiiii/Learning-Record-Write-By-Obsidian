# 绑定调用对象

- apply(), call(), bind()方法都可以用来设置调用函数的[this](JavaScript_this.md)
  - `func.apply(obj, [arg1, arg2, ...])`
  - `func.call(obj, arg1, arg2, ...)` 
  - `func.bind(obj, arg1, arg2, ...)` 
  
  > call和bind的的区别，bind返回一个函数，call直接调用
