# java命令

## Practical Example

[Practical Example](java-command-java-practical-example.md)

## Introduction

运行一个类文件

- 目标参数通常是:
  - [mainclass](java-mainclass.md)
  - [jarfile](java-jar-file.md)
  - [module](java-module.md)
- 选项的参数
  - 可以用空格, 冒号, 等号与选项分隔
  - 字节作为参数, 不需要单位; k 或 K表示KB, m 或 M 表示 MB
  - 百分比作为参数，使用0到1之间的小数


[简介](java-command-java-synopsis.md)

[描述](java-command-java-description.md)

## Options

[options](java-command-java-options.md)

[参数文件](java-command-java-argument-file.md)

[高级选项](java-command-java-advanced-options.md)

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