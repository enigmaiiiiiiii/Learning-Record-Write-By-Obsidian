# Cpp Knowledge Point

## static用法和作用

- 静态局部变量
  - 随着函数的调用而初始化，不随函数结束而销毁
  - 只初始化一次
  - 保存在全局数据区
  - 作用域是局部作用域，不能再函数体外使用
- 静态全局变量
  - 仅当前文件可见
- 静态函数
  - 不能被其它文件所用
- [静态数据成员](c++-static-member.md)

## \#define和const的区别

- \#define
  - 预处理阶段进行处理，是一种宏定义，
  - 没有类型: 定义常量的宏是没有类型的, 是在编译前即预编译阶段进行字符替换
  - 由于是在预处理阶段替换所以不会有类型安全检查
  - **预处理阶段**系统也不会为它分配内存，存储在程序的代码段空间
  - 运行过程中会有多个拷贝
- const  
  - 会分配内存: const是一种Runtime，const常量会在内存中分配，
  - 以后再定义的常量调用时，只是使用对应的内存地址，不再开辟新的空间，，
  - 避免反复分配内存： 在内存中只有一个拷贝, 可以避免反复分配内存，节省空间
  - 可以使堆中也可以是栈中

什么时候用const, \#define

const可调试
const定义的数据有类型
const节省空间

## 堆和栈

- 管理方式：
  - 栈： 编译器管理 
  - 堆： 释放工作由代码控制
- 生长方向  
  - 栈：内存地址减小的方向
  - 堆：内存地址增大的方向
- 栈比堆分配效率高

## 有限自动机

## 深拷贝和浅拷贝

## move的意义

## 为什么要有weak_ptr

## Qt信号和槽

## Qt控件

QLabel, QPushButton, QLayout, QLineEdit，

- QTextEdit: 多行文本
- QComboBox: 下拉列表
- QFontComboBox: 字体下拉列表框
- QSpinBox: 自旋Box
- QCheckBox: 复选
- QRadioButton: 单选
- QTreeView
- QListView
- QScrollBar: 控件

## C语言struct和c++ class的差异

## 虚函数表

## 多态

- 调用函数时是再运行时动态确定的

## 信号量

## Linux命令: AWP

## 进程间通信

## c/c++程序分区

1. 代码区
2. 堆区
3. 栈区
4. 全局/静态存储区

```c++
int a = 4;  // 全局
void punc()
{
    static int b = 5;  // 静态
}
void main()
{
    punc();
    static char c = 'a';
}
```

5. 常量存储区

```c++
#define PI 3.14
const int p = 3;
void main()
{
    char *s = "hello";
}
```