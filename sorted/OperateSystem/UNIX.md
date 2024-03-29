# Begin With Operating System Background

## Linux Unix GNU

### What is Unix

- 1969年开发的操作系统
- 特点：
  - 多用户
  - 多进程
  - 所有数据以纯文本形式存储
  - 比Multics操作更加简单

#### Unix Philosophy

- Build **modular** programs 模块
- Write **readable** programs 可读性
- Use composition
- Separate mechanisms from policy
- Write simple programs
- Write small programs
- Write transparent programs
- Write robust programs
- Make data compllicated when required,not the program
- Builid on potential users exoected knowledge
- Avoid unneccessary output
- Write programs which fail in a way that is easy to diagnose
- Value developer time over machine time
- Write abstract programs that generate code instead of writing code by hand
- Prototype software before polishing it
- Write flexible and open programs
- Make the program and protocols **entensible**

抄自英文wiki百科

### What is Linux

- 基于Unix原理的开源**操作系统内核**
- 通常所说的Linux发行版通常指的是GNU/Linux的发行版
- Linux操作系统包含了Linux内核与其他自由软件项目中的GNU组件和软件

### What is GNU

- GNU is not unix,GNU是操作系统项目，包括编辑器，编译器，调试器，c库
- GNU的发起人希望发展出一套完整的开放源代码操作系统来取代Unix
- GNU的发展仍未完成，最大的问题在于具有完整功能的内核尚未被开发成功，GNU的内核，成为Hurd
- 实际使用中多半使用Linux内核,GNU开发人员已经GNU应用程序和工具的Linux移植

#### GNU组成

- GCC: GNU编译器套装
- glibc: GNU的C库
- coreutils——以及GNU核心工具组
- [GDB](unix-gdb.md): GNU调试器
- binutils: GNU二进制实用程序


## UNIX实现

- linux
- freeBSD
- MacOS
- Solaris