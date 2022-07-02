# day02

## 1. module

- project级目录
- 包含module-info.class的目录
- module-info.class有module-info.java编译得到

哪些文件是模块

- `.Jar`压缩包, JMOD文件

## 创建一个module

创建一个名为moduleA的模块

1. 创建moduleA文件夹
2. 创建`module-info.java`, 内容如下: 

```java
module moduleA {}
```
3. 在模块中添加示例代码, 添加在moduleA/com/company/demomodule目录下

```java
package com.company.demomodule;

public class DemoClass{
    public static void main(String[] args) {
        System.out.println("A module demo");
    }
}
```

4. 编译模块, 指定类文件输出目录, 指定源文件

5. 运行模块, 执行模块中的mainclass

### 关键词: module

- 声明模块

```java
module com.company.mymodule {
}
```

### 关键字: requires

```java
module java.desktop{ 
    requires java.xml;
}
```

关键字: transitive

- 强制读取依赖

```java
module java.desktop{
    requires transitive module_name;
}
```

- 任何读取java.desktop module的模块，也会强制读取java.xml模块

### 关键字: Exports

### 关键字: Uses

### 相关命令

#### javac Command

- `--add-modules module, module`

指定路径

- `--module-path path` or `-p path`: 指定哪里去找应用的module-path
- `--module-source-path`: 指定module源文件路径

#### java Command

- `-m` or `--module module[/mainclass]`: 执行module中的mainclass
- `--module-path path` or `-p path`: 指定module-path
  - 多个目录用`；`隔开


## 2. Java Jar Command 

- jar命令是一个通用的归档和压缩工具，基于ZIP和ZLIB压缩格式
- 最初，jar命令被设计用于打包Java小程序（自JDK 11以来不支持）或应用程序
- 然而，从JDK 9开始，用户可以使用jar命令创建模块化JAR。对于运输和部署，通常将模块打包为模块化JAR会更方便。

语法

- jar命令的语法类似于tar命令的语法。
- 它有几个主要的操作模式，由一个强制操作参数定义。
- 其他参数要么是修改操作行为的选项，要么是执行操作所需的参数。

压缩

- 应用程序的模块或组件(文件、图像和声音)合并到单个归档中
- 缩短了下载时间。

> 由Java代理(如浏览器)在单个HTTP事务中下载，而不需要为每个部分建立新的连接。

- jar命令还可以压缩文件，这进一步提高了下载时间。
- jar允许对文件中的各个条目进行签名，从而验证来源
- 不管是否压缩，JAR文件都可以用作类路径条目。

module-info.class

- 根目录或`.JAR`归档文件的根目录中包含模块描述符module-info.class, 归档文件就变成了模块化JAR


## 3. 八种基本数据类型

### byte

### 整数类型

short

int: 整形

- 32bits, 8字节

```java
int a = 5;  // 5是整数量
double b = 5 / 2; // b = 2.0
```

long: 长整形

- 64bits, 8字节

混合整数类型，短类型向长类型转换

```java
long l1 = 1000000000 * 2 * 10L;  // 10000000000 * 2 int to long
long l2 = 1000000000 * 3 * 10L;  // 10000000000 * 3 int溢出
long l3 = 1000000000L * 3 * 10;  // 始终是long
```

### 浮点类型

float

- 小数点 加 后缀 f, 如`float f = 624.424f;`

double

- `double d = 1.0;`
- 双精度格式浮点数
- 存在微小误差

```java
double c = 2.0, d = 1.9
System.out.println(c - d);
// 输出0.1000000000000009
```

浮点数二进制编码格式

$$
(-1)^s \times 1.f \times 2^{e-1023}
$$

- float类型: s=1位符号位， e=8位指数位， f=23位有效数字 
- double类型: s=1位符号位， e=11位指数位， f=52位有效数字 
  - 指数位, 首位表示符号, 指数能表示的范围-1024 ~ 1024 
  - 0 ~ 1023表示负数, 1024 ~ 2048表示正数

以`float f = 624.424`为例

- 二进制编码为: `1 00010000 0111000001101100100011`

### boolean

- 4个字节, 只能用true或false赋值

### 类型转换

#### 自动类型转换, 

- 是由短类型转长类型

short type $\rightarrow$ long type: 

- byte, short, char$\rightarrow$int$\rightarrow$long$\rightarrow$float$\rightarrow$double

- 对于byte, short, char<font color="red">参与运算</font>时, 转换为int类型

```java
byte b1 = 5;
byte b2 = 6;
byte b3 = b1 + b2;  // 编译报错
byte b4 = (byte)b1 + (byte)b2;  // 编译报错, (byte)运算优先级高
byte b5 = (byte)(b1 + b2);  // 正确
```

#### 强制类型转换

- 强制类型转换: `int a = (long)l;`
- 对于整数类型: 删除高位后, 转换(如添加符号位)

```java
long a = 10000000000L;
int g = (int)a
```

### 字符

- java中的char, 2个字节, 范围0~65535
- 16位Unicode字符
- min: \u0000, min: \uffff 
- 本质是int
- ASCII码
  - a: 97
  - A: 65
  - 0: 48
- 特殊符号

```java
char a1 = 'A';
char a2 = 65;
// a1 等于 a2;
```

码点

- 与编码表的某个字符对应的代码值

## 4. String

String

Stringbuilder

## 5. intellij idea

- `.iml`文件, intellij idea的工程配置文件
