# 项目构建

## 分离式编译

思想

- 一个文件的代码可能需要使用另一个文件中定义的变量

编译链接**两个**源文件

- **fact.cc** 中有**函数的定义**，
- factMain.cc中有main函数，
- main函数**调用**fact.cc中定义的函数

  ```shell
  g++ factMain.cc fact.cc # 生成可执行文件factMain.exe or a.out
  g++ factMain.cc fact.cc -o main # 生成名为main or main.exe 的可执行文件
  ```

- 当有很多源文件时，用g++编译就不再合适

## 构建工具

- [[CMake]] 是一个构建系统生成器, 可以生成makefile，ninja构建文件
- [makefie](makefile.md) 是一个构建系统
