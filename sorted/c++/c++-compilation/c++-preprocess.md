# C++ - Preprocess

* [What It Is](#what-it-is)
* [#include ](##include)
* [\#define](#\#define)
* [\#if](#\#if)

## What It Is

- Inherited from language C
- Preprocessor directives start with `#.`

For example, `#define macro-name replacement-text`

- when this line of code appears in a file
- all `macros-name` will be replaced with `replacement-text` before the program is compiled.

## #include

- Typically used to include header files.
- It can also include source files
  - If a source file is included, you don't need to include it again when using C++ project build tools
  - otherwise, it will result in errors due to duplicate definitions.

`#include <func.h>`

- search for system header files, search directory is determined by compiler and system
- common search directory is `/usr/inlcude`, `usr/local/include`

`#include "func.h"` 

- search same directory as the file containing `#include "func.h"`
- search directory specified by [`-I` option](gcc-options.md#-i-dir)

`#include "directory/func.h"` 

- search `func.h` from the subdirectory `directory`

`#include "../func.h"` 

- includes `func.h` from the parent directory. `..` is used to go up to the parent directory before referencing.

## #define

Define a text replacement

- ...

Define a macro

- Syntax:

1. `#define identifier replace_list(optional)`
2. `#define identifier(parameters) replace_list(optional)`
3. `#define identifier(parameters, ...) replace_list(optional)`
  - `...` represents a mutable number of parameters
    
- 对象类(object-like) 以 *替换列表* 替换 *标识符*
- 函数类(function-like) 标识符可以接受一定量的参数, 标识符后的`(`作为参数列表的起点，对应的`)`作为终点 
- `__VA_OPT__`, `__VA_ARGS__`, 用在*替换列表*表示*标识符*中的`...`

```c++
#define PI 3.1415926
```

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
