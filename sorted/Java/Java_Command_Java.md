# java命令

运行一个类文件

- 目标参数通常是: [mainclass](Java_MainClass.md), jarfile, module

[快速入门的例子](Java_Example_Of_Java_Command.md)

[描述](Java_Command_Java_Description.md)

[简介](Java_Command_Java_Synopsis.md)

[Argument File](Java_Command_Java_Argument_File.md)

## 运行单个源文件

## JDK_JAVA_OPTIONS 运行环境变量

- 内容是由空格字符分隔的参数列表
- JDK_JAVA_OPTIONS中的参数在JAVA命令参数的前面

```shell
export jdk_java_options='-g @file1 -Dprop=value @file2 -Dws.prop="white sapces"'
java -Xint @file3
```

等价于

```shell
java -g @file1 -Dprop=value @file2 -Dws.prop="white spaces" -Xint @file3
```