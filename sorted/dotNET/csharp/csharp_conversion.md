# 转换

[boxing转换](csharp_boxing.md)


## as运算符

```c#
E as T
```

E是返回值的表达式, T是类型

- 无法进行转换时， 返回null
- 仅考虑引用，装箱，取消装箱转换
- 不会引发异常

## 强制转换

- 长类型转换短类型可能损失数据
- 短类型转换为长类型

```c#
short var1 = 5;
sbyte var2 = 10;

var = (sbyte)var1;
```


## 检测溢出

- checked: 溢出抛出异常

```c#
int ten = 10;

checked(2137383647 + ten);
checked
{
    int i3 = 2137483647 + ten;
}
```

## 类型判断 

- is