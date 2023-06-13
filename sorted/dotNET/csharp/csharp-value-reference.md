# 值类型和引用类型

- 值类型变量初始化时
  - 变量拥有单独内存
- 引用类型初始化时
  - 是对象的别名
  - 指向堆中相同区域

## 值类型

- 值类型存放在栈中，只需要一块内存
- 预定义: sbyte, byte, float, short, float, short, ushort, double, int, uint, char, long, ulong, decimal, bool
- 用户定义类型：struct, enum

## 引用类型

- 引用类型需要两段内存
  - 引用，在栈中也可以在堆中，指向实际数据
  - 实际的数据，在堆中
- 预定义类型：object, string, dynamic
- 用户定义类型: class, interface, delegate, array
  
## 内容连接

[C语言程序在内存中的分布](linux-c-program-memory-layout.md)

[javascript中的原始值和引用值](javascript-variable-copy-and-reference.md)