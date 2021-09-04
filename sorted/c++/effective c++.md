# title

## 视c++为一个语言联邦

- c++不只是c加上面向对象，c++融合各种编程理念
- 支持过程形式，面向对象形式，函数形式，泛型形式，元编程语言
- c语言
  - 仍然是c++的基础
  - array
- Object-Oriented c++
- Template c++
- STL 一个template程序库，容器，迭代器，算法，函数对象
  - vector
- 就内置类型而言，pass-by-value通常比pass-by-reference更高效

## 尽量以从上图enum, enum, inline替换`#define`

## 尽可能使用const

## 确定对象被使用前已先被初始化

- 最好在对象使用前先初始化
- ```int x;``` 不同语境不同初始化

```c++
class Point {
    int x, y;
}

Point p;  // 
```

- array(**C part of c++**)不保证其内容被初始化
- vector(**STL part of c++**)内容会被初始化

## 了解c++默默编写并调用那些函数

## 若不想使用编译器自动生成的函数，就该明确拒绝

## 为多态基类声明virtual析构函数

## 别让异常逃离析构函数

## 绝不在构造和析构过程中调用virtual函数

## 令operator=返回一个reference to*this

## 在operator=中处理"自我赋值"

## 复制对象是勿忘其每一个成分

## 以对象管理资源

## 在资源管理类中小心copying行为

## 在资源管理类中提供对原始资源的访问

## 成对使用new和delete时要采取相同形式

## 以独立语句将newed的对象植入只能指针

## 让接口容易被正确使用，不易被误用

## 设计class犹如设计type

## 宁以pass-by-reference-to-const替换pass-by-value

## 必须返回对象时，别妄想返回其reference

## 将成员变量声明为private

## 宁以non-member,non-friend替换member函数

## 若所有参数皆需类型转换，请为次采用non-member函数

## 考虑写出一个不抛异常的swap函数

## 尽可能延后变量定义式的出现时间

## 避免返回handles指向对象内部成分

## 为“异常安全”而努力是值得的

## 透彻理解inlining的里里外外

## 将文件间的编译依存关系降至最低

## 确定你懂的public继承塑模出is-a关系

## 避免遮掩继承而来的名称

## 区分接口和实现继承

## 考虑virtual函数以外的其他选择

## 绝不重新定义继承而来的non-virtual函数

## 绝不重新定义继承而来的缺省参数值

## 通过符合塑模出has-a或“根据某物实现出”

## 明智而审慎的使用private继承

## 明智而审慎的使用多重继承

## 了解隐式接口和编译器多态

## 了解typename的双重意义

## 学习处理模板化基类内的名称

## 将与参数无关的代码抽离

## 运用成员函数模板接受所有兼容类型

## 需要类型转换时请为模板定义非成员函数

## 请使用traits class表现类型信息

## 认识template元编程

## 了解new-handler的行为

## 了解new和delete的合理替换时机

## 编写new和delete时徐固守常规

## 写了placement new也要写placement delete

## 不要轻易忽略编译器警告

## 让自己熟悉包括TR1在内的标准程序库

## 让自己熟悉Boost