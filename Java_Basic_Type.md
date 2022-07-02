# 基本类型

## byte

## 整数类型

short

- 16bits, 4字节

int: 整形

- 32bits, 8字节

```java
int a = 5;  // 5是整数量
double b = 5 / 2; // b = 2.0
```

long: 长整形

- 64bits, 16字节

混合整数类型，短类型向长类型转换

```java
long l1 = 1000000000 * 2 * 10L;  // 10000000000 * 2 int to long
long l2 = 1000000000 * 3 * 10L;  // 10000000000 * 3 int溢出
long l3 = 1000000000L * 3 * 10;  // 始终是long
```

## 浮点类型

float

- 小数点 加 后缀 f, 如`float f = 624.424f;`

double

- `double d = 1.0;`
- 双精度格式浮点数
- 存在误差

```java
double c = 2.0, d = 1.9
System.out.println(c - d);
// 输出0.1000000000000009
```


## boolean

- 4个字节, 只能用true或false赋值

## char : 字符

- java中的char, 2个字节, 范围0~65535
- 16位Unicode字符
- min: \\u0000, min: \\uffff 
- 本质是int
- ASCII码
  - a: 97
  - A: 65
  - 0: 48

```java
char a1 = 'A';
char a2 = 65;
// a1 等于 a2;
```

码点

- 与编码表的某个字符对应的代码值

## 类型转换

### 自动类型转换, 

- 指由短类型转长类型

short type $\rightarrow$ long type排序: 

- byte, short, char$\rightarrow$int$\rightarrow$long$\rightarrow$float$\rightarrow$double

对于byte, short, char<font color="red">参与运算</font>时, 转换为int类型

```java
byte b1 = 5;
byte b2 = 6;
byte b3 = b1 + b2;  // 编译报错
byte b4 = (byte)b1 + (byte)b2;  // 编译报错, (byte)运算优先级高
byte b5 = (byte)(b1 + b2);  // 正确
```

### 强制类型转换

- 强制类型转换: `int a = (long)l;`
- 对于整数类型: 删除高位后, 转换(如添加符号位)

```java
long a = 10000000000L;
int g = (int)a
```

