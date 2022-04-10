# c\#基础

[预处理](Csharp_Preprocess.md)

[关键字](Csharp_Keyword.md)

[注释](Csharp_Annotation.md)

[变量](csharp_variable.md)

[值类型和引用类型](csharp_value_reference.md)

[字符和字符串](Csharp_String.md)

[数组](Csharp_Array.md)

[运算符](Csharp_Operator.md)

[集合](csharp_set.md)


## 可空类型

- 可以从任意值类型创建可空类型
- 不能从引用类型或其他可空类型创建可空类型
- 可空类型和相应的非可空类型之间可以实现隐式转换

```c#
int? myNInt = 28;
```

int?可空类型，myNInt可空变量

- 可空类型赋值
  - `??`运算符: `myNInt ?? -1`, myNInt如果不为空保持原值，为空则赋值-1
