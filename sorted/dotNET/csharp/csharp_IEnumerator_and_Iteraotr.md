# 枚举器和迭代器

- 用于`foreach(Type VarName in EnumerableObject)`, Enumerabler必须是可枚举类型
- [IEnumerator](CSharp_IEnumerator_Interface.md)枚举器: 实现Reset, Movenext, Current方法
- [IEnumerable](CSharp_IEnumerable.md)可枚举类型: 通过GetEnumerator方法返回一个IEnumerator
- IEnumerable通过定义一个返回枚举器的方法， IEnumerable可以灵活的将迭代逻辑转移到另一个类上

## `IEnumerable<T>`和`IDisosable`

- `IEnumerable<T>`继承自`IDisposable`

> 这样枚举器就可以保有像数据库连接这样的资源，而且可以在枚举结束后(或中途停止)确保释放这些资源

## 迭代器

[迭代器](CSharp_Iterator.md)