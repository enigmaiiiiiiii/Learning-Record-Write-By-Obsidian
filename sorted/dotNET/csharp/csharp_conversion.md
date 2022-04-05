# 转换

[boxing转换](csharp_boxing.md)

## 隐式转换

- 短类型转换为长类型

```c#
short var1 = 5;
sbyte var2 = 10;

var = (sbyte)var1;
```

## 显示转换

- 长类型转换短类型可能损失数据

## 检测溢出

- checked: 溢出抛出异常
