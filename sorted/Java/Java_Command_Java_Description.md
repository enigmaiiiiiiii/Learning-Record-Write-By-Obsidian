# 描述

- java命令启动java应用程序
- 通过启动Java虚拟机(JVM)、加载指定的类并调用该类的main()方法来实现这一点。

程序入口main()方法

```java
public static void main(String[] args)
```

- 必须声明为公共和静态的
- 不能返回任何值
- 必须接受String数组作为参数

***

- 在Source-File Mode下，可以启动单个源文件中声明的类
- 默认情况下，第一个不是java命令选项的参数就是要调用的类的完全限定名
- 如果指定了`-jar`，那么它的参数是包含应用程序的类和资源文件的[JAR文件](Java_Jar_File.md)的名称, 启动类必须由其清单文件中的Main-Class清单头来指示