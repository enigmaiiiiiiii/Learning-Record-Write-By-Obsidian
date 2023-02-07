# 重载函数调用运算符

- 可以像使用函数一样使用该类的对象
- 必须是成员函数
- 对比[函数指针](c++-function-pointer.md)，函数的返回类型和型参共同确定函数类型, *重载函数调用运算符的类* 的 *成员函数的参数* 与可调用类型无关
- 一个类可以定义多个不同版本的调用运算符

```c++
struct absInt {
  int operator()(int val) const {
    return val < 0 ? -val : val;
  }
}
int i = -42;
absInt absObj;
int ui = absObj(i);
```

> absInt类只定义了一种操作: 函数调用运算符 

