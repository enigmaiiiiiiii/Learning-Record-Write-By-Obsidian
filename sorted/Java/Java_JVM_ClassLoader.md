# 类加载器

> ClassLoader指类加载器的抽象类，class loader指Java中类加载器的含义

## 类加载器(class loader)

- 因为资源通常和应用程序或库打包在一起，所以除了装入类之外，类加载器还负责定位资源
- 通过识别类的Binary name来加载类

> 比如"Java.lang.String", "javax.swing.JSpinner$DefaultEditor"

- 一个类加载器需要尝试 定位 或 生成定义类的数据

> 普遍做法是将类名称作为路径名称, 然后从文件系统中读取类字节码
> 也有一些类也许会从网络或其他应用构成

- 数组对象由arrayInstance.getClassLoader()返回类加载器, 与元素的类加载器相同

## 类加载过程

假设从MyProgram.class文件开始运行

1. 加载[类文件](Java_Class_File.md)
2. MyProgram中的 拥有某个类型field 或 扩展超类, 那么这些类文件也会被加载
3. 虚拟机中执行MyProgram中的main方法, main方法中的类也会被加载

## Run-time Built-in Class Loaders

1. 引导类加载器(Bootstrap ClassLoader)

- 从[rt.jar]中进行加载系统类，系统类通常用C语言来实现, 没有对应的ClassLoader对象

2. 扩展类加载器

- 从jre/lib/ext目录加载标准扩展
- 将jar文件放入jre/lib/ext目录，即使没有任何类路径，扩展器可以找到其中的各个类

> 将包含系统类或扩展jar文件放入jre/lib/ext目录, 会遇到麻烦，扩展类加载器并不使用类路径(CLASSPATH)

3. 系统类加载器

- 由 CLASSPATH 环境变量或在[命令行option](Java_Command_Javac.md)中设置的类路径中查找这些类

## 类加载器层次结构

- 每个类都有一个父类加载器, 除引导类加载器
- 类加载器首先会让父类加载器尝试加载给定的类, 父类加载失败时，子类加载器才会尝试加载

## 类加载器作为命名空间

## 自定义类加载器

- 只需继承ClassLoader类，重写findClass方法即可
- 重写findClass必须做到以下几点
  - 为来自本地文件系统或者其他来源的类加载其字节码
  - 调用ClassLoader超类的defineClass()方法, 向虚拟机提供字节码

## ClassLoader类

[ClassLoader类](Java_JVM_Class_ClassLoader.md)

## Module类

[Module类](Java_JVM_Class_Module.md)