# C++ - Virtual Function

## What is Virtual Function

- These are functions that the **base class** expects the **derived class** to override, but the derived class can choose not to override virtual functions.
- The `virtual` keyword appears before the declaration statement inside the class.
- The return type of a virtual function in the derived class must be the same as that in the base class or satisfy an inheritance relationship conversion.
- Once a function is declared as a virtual function, it is a virtual function in all derived classes.

## Defining Virtual Function

- Must be Defined; unlike normal functions, which can be declared without being defined
- If derived class overrides a virtual function, the parameter list must be the same as the overridden base class virtual function, more details in [Scope in Inheritance](c++-scope-in-inheritance.md)
- Can not be defined at [outside of class]()

## Dynamic Binding

- <font color="red">虚函数的版本是由运行时根据指针或引用所绑定对象的实际类型来选择执行也叫动态绑定</font>

> 普通函数由指针类型决定

- 使用**指针**或**引用**调用虚函数时，该调用将被动态绑定
- 通过**指针**或**引用**对虚函数的调用直到运行时才被解析

> That is to say: which virtual function is called is determined at runtime based on the bound object

## keyword override

- 用在**派生类**中
- **基类同名虚函数参数列表**以及[尾置返回类型](c++-funtion-return-type.md#尾置返回类型)之后
- <font color="red">表示该函数需与原函数参数列表必须完全一致, 否则编译器报错</font>

> <font color="red">不一致是允许的但是不推荐</font>

> 在派生类中，定义与基类虚函数同名，参数列表不同的函数是允许的; 但不推荐，因为不方便调试发现错误，所以新标准添加了override关键字

## final keyword  

- `final`表示该函数不能被覆盖, 不希望被其他类继承
  - 用在形参列表及尾置返回类型后
- 通过`int i = B->A::func()`来强制调用基类A中的成员func,即使func在派生类B中重新实现过

## Pure Virtual Function

- 可以不定义，并在不定义的状态下被派生类覆盖
- 在函数体处填写`=0`,用来表示这是一个纯虚函数, 表示该函数无定义
- 若要提供定义须在类外部定义
- 含有纯虚函数的类被称为抽象基类
  - 定义接口供派生类实现
  - 不能创建抽象基类的对象
- 专门用来继承，避免编写无意义代码

## [虚函数表](c++-virtual-function-vtable.md)
