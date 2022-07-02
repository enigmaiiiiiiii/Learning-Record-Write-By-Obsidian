# 组织源文件

- 在Java语言中，类和接口可以组织成包，包可以组织成模块
- Javac期望在文件系统目录中的源文件的物理排列会将类的组织镜像到包中，将包的组织镜像到模块中

> 命名约定: 模块名和包名以小写字母开头，类名以大写字母开头

## package: 包

package表示一个目录, subpackages表示子目录

- package p.q ,p\\q on Windows, p/q/r on 其他操作系统

`.java`文件表示一个类

- p中的类X, 在p目录中以文件`X.java`表示

建议将文件分为多个目录，并将列表传递给[javac]

## Module: 模块

- 模块是一组为重用而设计的包
- 除了类和接口的.java文件之外，每个模块都有一个源文件module-info.java
  - 声明模块名
  - 列出该模块导出的包(以允许其他模块重用);
  - 列出该模块所需的其他模块(以便重用它们导出的包)。
- 将package组织成一个模块，模块中由一个或多个package目录表示
  - 其中一个目录包含module-info.java文件
  - 便捷但不是必须

for example:

- module a.b.c代表整个系统的`a.b.c`目录
- 模块的声明由a.b.c目录下的文件module-info.java表示。
- module中的package `p.q.r`, module `a.b.c`包含目录树p/q/r

开发环境可能会以模块名命名目录

