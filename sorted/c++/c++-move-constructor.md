# C++ - Move Constructor

- 第一个参数是该类类型的一个[右值引用](c++-rvalue-reference.md)
- `Foo(Foo &&f) noexcept {}`
- 不分配任何新内存
- 移动后的源对象要保证销毁它是无害的
- 在移动构造函数中保证源对象(被移动对象)执行析构函数是安全的

Synthesized move constructor

- 永远不会隐式定义为删除函数
- 显式=default在编译器不能移动所有成员时，会定义为删除函数
- 编译器不会为某些类合成移动操作
  - 比如一个类定义了自己的拷贝构造函数，拷贝赋值运算符，或者析构函数
- 不是必须的，没有也可以, 类会使用拷贝操作来代替移动操作
- 编译器合成移动构造函数的必要条件
  - 当一个类没有定义任何自己的拷贝控制成员(拷贝，赋值，析构)
  - 所有数据成员都能**移动构造**或**移动赋值**时
