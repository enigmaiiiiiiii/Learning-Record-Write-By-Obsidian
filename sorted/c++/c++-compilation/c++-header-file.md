# C++ - Header File

## What It Is

```c++
#include <stdio.h>  
#include <vector>  
#include "user_defined.h"
```

- A carrier file containing function definitions and data interface declarations
- Does not need to include the logic implementation code of the program itself, serving a descriptive role

## Features

- c++ is compatible with the C language library, the suffix `.h` is usually for C language library

what header file should contains

- declare, include varible and function declaration
- definition
  - definition of const object
  - definition of  inline function
  - definition of function class
  - definition of static function

what header file should not contains

- Non-static variable
- built-in namespace, for example `using namespace std;`


## .inl: another type of header file

- [inline function](c++-inline-function.md)头文件 

