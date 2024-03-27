# CSharp - Anonymous Types

```c#
new {FieldProp = InitExpr, FieldProp = InitExpr, ...};
```

- 创建匿名类型对象
  - 关键字new
  - 有成员对象初始化语句
  - 没有类名和构造函数
- 编译器为匿名类型提供一个名称，但是应用程序无法访问它

## 匿名成员的两种特殊初始化形式

- 简单标识符
- 成员访问表达式
- 又称为投影初始化

> 个人解释: 将外部同名类型识别为匿名类型的成员

## Cases that do not create a new anonymous type

When Compiler encounters another anonymous type with

- same parameter names
- same inferred types
- same order

