# 类加载器

## 类加载过程

假设从MyProgram.class文件开始运行

1. 加载[类文件](Java_Class_File.md)
2. MyProgram中的 拥有某个类型field 或 扩展超类, 那么这些类文件也会被加载
3. 虚拟机中执行MyProgram中的main方法, main方法中的类也会被加载

## 引导类加载器

- 从[rt.jar]中进行加载系统类，系统类通常用C语言来实现, 没有对应的ClassLoader对象

## 扩展类加载器

- 从jre/lib/ext目录加载标准扩展
- 将jar文件放入jre/lib/ext目录，即使没有任何类路径，扩展器可以找到其中的各个类

> 将包含系统类或扩展jar文件放入jre/lib/ext目录, 会遇到麻烦，扩展类加载器并不使用类路径(CLASSPATH)

## 系统类加载器

- 由 CLASSPATH 环境变量或在[命令行option](Java_Command_Javac.md)中设置的类路径中查找这些类

## 类加载器层次结构

- 每个类都有一个父类加载器, 除引导类加载器
- 