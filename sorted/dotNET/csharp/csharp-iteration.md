# Iteration In CSharp

## IEnumerator(枚举器)

[IEnumerator](csharp-ienumerator-interface.md)

- 可枚举类型调用GetEnumerator方法返回IEnumerator接口的实例

## IEnumerable(可枚举类型)

[IEnumerable](csharp-ienumerable.md)通过GetEnumerator方法返回一个IEnumerator

- 用于`foreach(Type VarName in EnumerableObject)`, `EnumerableObject`必须是可枚举类型
- IEnumerable通过定义一个返回枚举器的方法， IEnumerable可以灵活的将迭代逻辑转移到另一个类上

## 迭代器

[迭代器](csharp-iterator.md)
