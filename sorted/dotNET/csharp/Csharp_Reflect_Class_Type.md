# Type类

- BCL定义的一个抽象类
- CLR创建一个Type(RuntimeType)派生的实例
- 对于程序中用到的每一个类型，CLR都会创建一个包含这个类型星系的Type类型的对象
- 程序中用到的每一个类型都会关联到独立的Type类的对象
- 不管创建的类型有多少个实例，只有一个Type对象关联这些实例

## Type类成员

属性

- Name: 类型名称
- Namespace: 类型的命名空间
- Assembly: 类型的[程序集](csharp_programset.md)

方法

- GetFields: 类型的字段列表
- GetProperties: 类型的属性列表
- GetMethodsa: 类型的方法列表

## 获取Type对象

- object类型的GetType()方法, t.GetType()
- typeof运算符, typeof(t)