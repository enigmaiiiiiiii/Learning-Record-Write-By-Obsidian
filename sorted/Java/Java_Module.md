# 模块

- 模块是一组为重用而设计的包
- 是包含module-info.class(module-info.java编译得到)的目录
- module-info.java文件应包含
  - 声明模块名
  - 列出该模块导出的包(以允许其他模块重用);
  - 列出该模块所需的其他模块(以便重用它们导出的包)。
- 开发环境可能会以模块名命名目录
- project级目录
- 模块可以打包成`.jar`压缩包
- 将package组织成一个模块，模块中由一个或多个package目录表示
  - 其中一个目录包含module-info.java文件
  - 便捷但不是必须

> 比如:
> module a.b.c代表整个系统的`a.b.c`目录
> 模块的声明由a.b.c目录下的文件module-info.java表示。
> module中的package `p.q.r`, module `a.b.c`包含目录树p/q/r

## 创建一个module

创建一个名为moduleA的模块

1. 创建moduleA文件夹
2. 创建`module-info.java`, 内容如下: 

```java
module moduleA {}
```
3. 在模块中添加示例代码, 添加在moduleA/com/company/demomodule目录下

```java
package com.company.demomodule;

public class DemoClass{
    public static void main(String[] args) {
        System.out.println("A module demo");
    }
}
```

4. 编译模块, 指定类文件输出目录, 指定源文件

5. 运行模块, 执行模块中的mainclass

## 关键词: module

- 声明模块

```java
module com.company.mymodule {
}
```

## 关键字: requires

```java
module java.desktop{ 
    requires java.xml;
}
```

关键字: transitive

- 强制读取依赖

```java
module java.desktop{
    requires transitive module_name;
}
```

- 任何读取java.desktop module的模块，也会强制读取java.xml模块

## 关键字: Exports

## 关键字: Uses

## 相关命令

### javac Command

- `--add-modules module, module`

指定路径

- `--module-path path` or `-p path`: 指定哪里去找应用的module-path
- `--module-source-path`: 指定module源文件路径

### java Command

- `-m` or `--module module[/mainclass]`: 执行module中的mainclass
- `--module-path path` or `-p path`: 指定module-path
  - 多个目录用`；`隔开
