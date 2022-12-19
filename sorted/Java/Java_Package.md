# Package

- 表示一个目录, subpackages表示子目录
- 使用包将java类组织起来，主要原因是确保类名称的唯一性
  - 通过不同的文件夹保存同名类文件
  > package p.q: p\\q on Windows, p/q/r on 其他操作系统
  > package p中的类sample: 是在p目录中以文件`sample.java`表示

```java
java.time.LocalDate today = java.time.LocalDate.now();
```

java中的import与c++中的`#include`不同

- c++编译器无法查看任何文件内部, 除了正在编译的文件
- java中, 显式给出包名，如java.util.Date就可以不使用import
- package类似c++中的[namespace](c++_NameSpace.md)
- import类似c++中的[using](c++_Using.md)

## 将类放入包

必须将包的名字放在源文件开头

```java
package com.horstmann.corejava;
```

- 表示将类放入`com.horstmann.corejava`包中
- 包含该语句的源文件应放在子目录`com/horstmann/corejava`下

## 导入包

- import: 导入包

```java
import java.time.LocalDate;
LocalDate today = LocalDate.now();
```

静态导入

```java
import static java.lang.System.*;
```

导入类的静态方法和静态域

```java
out.println("Good bye");
```

## 编译器在编译源文件时不检查目录结构

- 如果包与目录不匹配, 虚拟机就找不到类

假设源文件开头有下列语句

```java
package com.mycompany;
```

- 如果源文件没有在子目录com/mycompany下
  - 如果不依赖其他包， 则不会出现编译错误
  - 即使不出现编译错误，最终程序将无法运行
