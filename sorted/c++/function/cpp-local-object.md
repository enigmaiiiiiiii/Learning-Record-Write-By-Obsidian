# Cpp - Local Object

- 函数的形参和函数内部定义的变量统称为局部变量
- 自动对象：只存在于块执行期间的对象
  - 形参是一种自动对象:形参作用范围在函数体作用域内
- 某些时候需要变量的生命周期贯穿调用及之后的时间

## 局部静态对象

- 需要局部变量的生命周期贯穿函数调用之后的时间，将变量定义为static
- 第一次经过对象是初始化，直到程序终止时销毁
- 如果静态变量没有显示初始值，它将执行[值初始化](c++-initialize.md)

  ```c++
  size_t count_calls()
  {
      static size_t ctr = 0;  // 调用结束后ctr仍然有效
      return ++ctr;
  }
  ```