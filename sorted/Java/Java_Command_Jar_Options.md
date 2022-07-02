# 参数

## 主要操作模式

> 使用jar时必须指定的参数, 通常是第一个参数

`-c` or `--create`

-  创建档案

`-i=FILE` or `--generate-index=FILE`

- 为指定的JAR文件生成索引信息。

`-t` or `--list`

- 列出档案目录

`-u` or `--update`

- 更新已存在的JAR file

`-x` or `--extract`

- 从档案中提取指定的文件

`-d` or `--describe-module`

- 打印文档描述符或自动模块名称

## 任何情况下都能使用的操作修正参数

`-C DIR files`

- 修改指定的目录，并将files文件加入档案。

`-f=FILE` or `--file=FILE`

- 指定档案文件的名称

`--release VERSION`

- 创建一个多版本JAR文件。将选项后面指定的所有文件放入JAR文件的版本目录中
- 该文件名为`META-INF/versions/VERSION/`
  - 其中VERSION必须是一个大于等于9的正整数
- 在运行时，当JAR中存在一个类的多个版本时，JDK将使用它找到的第一个版本
  - 搜索顺序
      1. 首先, 在目录树中搜索版本号与JDK主版本号匹配的版本号
      2. 然后, 依次查找版本号较低的目录，
      3. 最后, 查找JAR的根目录。

`-v` or `--verbose`

- 向标准输出发送或打印详细输出。


## 创建和更新时可以使用的操作修正参数

`-e=CLASSNAME` or  `--main-class=CLASSNAME`

- 为捆绑到<font color="red">模块化</font>或<font color="red">可执行的模块化</font>JAR文件中的独立应用程序指定应用程序入口点

`-m=FILE` or `--mainfest=FILE`

- 包括来自清单文件的清单信息
- FILE: 清单文件

`-M` or ``--no-manifest`

- 不为jar文件, 创建清单信息

`--module-version=VERSION`

- 创建或更新时，指定版本

`--hash-modules=PATTERN`

`-p` or `--module-path`

指定生成hash

`@file`

- 从文本文件加载参数