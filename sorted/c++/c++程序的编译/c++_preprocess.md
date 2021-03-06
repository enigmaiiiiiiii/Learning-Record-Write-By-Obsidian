# 预处理

- 由c++继承自C语言而来
- 预处理指令以#开头
- 比如`#define macro-name replacement-text`，  
这行代码出现在文件中时，所有宏都将会在程序编译之前被替换为replacement-text

[[c++手册#预处理指令]]

## \#include 

- 通常用来包含头文件
- 也可以包含源文件，若包含了源文件,则在用c++项目构建工具时，不需要再包含一次,否则因定义重复而报错
- `#include "func.h"`,func.h在同一个文件夹，直接引用
- `#include "directory/func.h"`, 子目录directory中的func.h,向下引用
- `#include "..func.h"`, func.h在上级目录, `..`返回上级目录后引用

## \#define

- 语法
  1. `#define 标识符 替换列表(optional)`
  2. `#define 标识符(parametres) 替换列表(optional)`
    - macro中参数数量与parameters中一致
  3. `#define 标识符(parameters, ...) 替换列表(optional)`
    - macro中参数数量不少于parameters的参数数量
    - `...`表示可变参数
    
- 定义一个标识符定义为macro
- 对象类(object-like) 以 *替换列表* 替换 *标识符*
- 函数类(function-like) 标识符可以接受一定量的参数, 标识符后的`(`作为参数列表的起点，对应的`)`作为终点 
- `__VA_OPT__`, `__VA_ARGS__`, 用在*替换列表*表示*标识符*中的`...`


## \#if
- `#ifdef` 判断指令，当且仅当变量已定义是为真
- `#ifndef` 判断指令，当且仅当变量未定义时为真

```c++
#ifndef SALES_DATA_H
#define SALES_DATA_H
#include <string>

struct Sales_data{
    std::string bookNo;
    unsigned units_sold = 0;
    double revenue = 0.0;
};
#endif
```

第一次 `#include` 时 `#ifndef`检查为真，预处理器将顺序执行后面的代码，直到 `#endif`;
之后再一次 `#include` 时 编译器见忽略 `#ifndef`到 `#endif` 之间的代码

[[c++_Preprocessor_pramga]]
