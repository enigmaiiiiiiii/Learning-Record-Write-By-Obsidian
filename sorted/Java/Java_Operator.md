# 运算符

## 逻辑运算符短路现象

&&: 第一个false值后 的 表达式不再执行
||: 第一个true值后 的 表达式不再执行

```java
int a = 1, b = 2, c = 3;
if (b > a || b++ < c) {
    System.out.printf("b < a为false, &&后的表达式不在执行, b=%c", b);
}
```

## 扩展赋值

- +=, -=, *=, /=
- 存在隐式强制[类型转换]()

```java
short s = 5;
s = s + 10;  // 错误, 因为s + 10会转换成int后运算 
s += 10;     // s = (short)(a + 10);
```


## [instanceof运算符](Java_Instanceof_Operator.md)

