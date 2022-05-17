# 特性

- 所有特性类都派生自System.Attribute
- 使用[Type对象](Csharp_Reflection.md)获取类型信息，从而访问特性
- 应用了特性的程序结构称作目标
- 命名方法: Pascal命名，以Attribute后缀结尾
- 应用特性时可以不使用Attribute后缀，如SerializableAttribute应用时可以写作Serializable
- .NET预设了很多特性，也可以自定义特性

## 位映射特性

## 应用特性

- 在结构前放置特性片段来应用特性

```c#
[Serializable]
public class Myclass {}
```

## [几个预定义特性](csharp_attribute_predefined.md)

## [自定义特性](csharp_custom_attribute.md)
