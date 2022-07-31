# 类型转换

## 自动类型转换

> 由短类型转长类型

- short type $\rightarrow$ long type排序: 
  - byte, short, char$\rightarrow$int$\rightarrow$long$\rightarrow$float$\rightarrow$double

- 对于byte, short, char<font color="red">参与运算</font>时, 转换为int类型

```java
byte b1 = 5;
byte b2 = 6;
byte b3 = b1 + b2;  // 编译报错
byte b4 = (byte)b1 + (byte)b2;  // 编译报错, (byte)运算优先级高
byte b5 = (byte)(b1 + b2);  // 正确
```

## 强制类型转换

- 强制类型转换, 通过括号加类型名实现: 如`int a = (long)l;`
- 对于整数类型的大转小: 删除高位后, 转换(如添加符号位)

```java
long a = 10000000000L;
int g = (int)a
```
