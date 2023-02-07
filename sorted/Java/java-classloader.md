# 类加载器

- [类加载器(class loader)](#类加载器class-loader)
- [类加载过程](#类加载过程)
- [Run-time Built-in Class Loaders](#run-time-built-in-class-loaders)
- [类加载器层次结构](#类加载器层次结构)
- [类加载器作为命名空间](#类加载器作为命名空间)
- [自定义类加载器](#自定义类加载器)
- [ClassLoader类](#classloader类)
- [Module类](#module类)

> ClassLoader指类加载器的抽象类，class loader指Java中类加载器的含义

## Introduction

- 因为资源通常和应用程序或库打包在一起，所以除了装入类之外，类加载器还负责定位资源
- 通过识别类的Binary name来加载类

> binary name比如: "Java.lang.String", "javax.swing.JSpinner$DefaultEditor"

- 一个类加载器需要尝试 定位 或 生成 定义类的数据

> 普遍做法是将类名称作为路径名称, 然后从文件系统中读取类字节码
> 也有一些类也许会从网络或其他应用构成

- 数组对象由fooArray.getClassLoader()返回类加载器, 与其中元素的**Class Loader**相同

## Class Load Process

假设从MyProgram.class文件开始运行

1. 加载[类文件](java-class-file.md)
2. MyProgram中的 拥有某个类型field 或 扩展超类, 那么这些类文件也会被加载
3. 虚拟机中执行MyProgram中的main方法, main方法中的类也会被加载

## Run-time Built-in Class Loaders

1. Bootstrap ClassLoader, 引导类加载器

- 从**rt.jar**中加载**core libraries**
- core library located in `$Java_HOME/jre/lib` directory
- **系统类**通常用C语言来实现, 没有对应的ClassLoader对象

2. 扩展类加载器

- 从`$JAVA_HOME/jre/lib/ext`目录加载标准扩展
- 将jar文件放入jre/lib/ext目录，即使没有任何类路径，扩展器可以找到其中的各个类

> 将包含系统类或扩展jar文件放入jre/lib/ext目录, 会遇到麻烦，扩展类加载器并不使用类路径(CLASSPATH)

3. 系统类加载器

> ~~主要指的是**用户定义的类**~~

- 由 CLASSPATH 环境变量或在[命令行option](java-command-javac.md)中设置的类路径中查找这些类

## 类加载器层次结构

- 除引导类加载器, 每个类都有一个父类加载器
- 类加载器首先会让父类加载器尝试加载给定的类, 父类加载失败时，子类加载器才会尝试加载

## 类加载器作为命名空间

## Custome Classloader

- 继承ClassLoader类，重写findClass方法
- 重写findClass必须做到以下几点
  - 为来自本地文件系统或者其他来源的类加载其字节码
  - 调用ClassLoader超类的defineClass()方法, 向虚拟机提供字节码

## ClassLoader类

[ClassLoader类](java-lang-classloader.md)

## Module类

[Module类](java-jvm-class-module.md)