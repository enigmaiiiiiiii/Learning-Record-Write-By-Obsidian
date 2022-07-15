# 简介

运行class文件

```shell
java [options] mainclass [args ...]
```

运行 JAR file 中的 mainclass

```shell
java [options] -jar jarfile [args ...]
```

运行module中的main class

```shell
java [options] -m module[/mainclass][args...]
```

- or

```shell
java [options] --module module[/mainclass][args...]
```

运行单个源文件

```shell
java [options] source-file [args...]
```

## 参数说明

[options](Java_Command_Java_Options.md)

- 可选:指定以空格分隔的命令行选项

[mainclass]

- 指定要启动的类的名称。classname后面的命令行条目是main方法的参数。

`-jar jarfile`

- 执行jarfile中的程序, jarfile为封装的[Jar包](Java_Jar_File.md)
  - 包含清单文件
  - 清单文件包含一行`Main-Class:classname`，
  - 该行使用公共静态`void main(String[] args)`方法定义类，
  - 该方法用作应用程序的起点。
- 使用`-jar`指定的JAR文件是所有用户类的源, 而其他类路径设置将被忽略

`-m or --module module[/mainclass]`

- 如果给出了main class指定的模块中的[main类](Java_MainClass.md)，则执行该模块中的main类
- 如果没有给出，则执行该模块中的值
- 换句话说，mainclass可以在模块没有指定它的时候使用，或者在模块指定它的时候覆盖它的值。

`source-file`

- 仅用于启动单个源文件程序。指定的源文件是包含主类的源文件

`args...`

- 可选参数
  - mainclass
  - source-file
  - jar jarfile
  - -m或--module module/mainclass
