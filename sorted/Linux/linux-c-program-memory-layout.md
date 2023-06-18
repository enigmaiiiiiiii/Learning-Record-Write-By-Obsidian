# Linux - C language program memory layout

## C程序的组成

### 代码区

-  [可执行文件](可执行文件(executablefile).md)
- CPU执行的机器指令部分, 正文段是可共享的, 频繁执行的程序也只有一个副本 通常是只读的
- 静态函数

### 全局/静态分区

- 全局变量和静态变量

### 常量区

```c++
#define Pi 3.14
const int pi = 3;
```

### 栈

- 函数
- 增长方向由高到低

### 堆

- 用于[动态存储](linux-process-memory-api.md)分配
- 增长方向由低到高

## 典型布局

![C程序典型布局](c程序典型布局.excalidraw.md)