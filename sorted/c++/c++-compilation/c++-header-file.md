# C++ - Header File

* [What It Is](#what-it-is)
* [Why header file is crucial](#why-header-file-is-crucial)
* [Features](#features)
* [Include Guards](#include-guards)
* [what header file should contains](#what-header-file-should-contains)
* [what header file should not contains](#what-header-file-should-not-contains)
* [.inl: another type of header file](#.inl:-another-type-of-header-file)

## What It Is

- A carrier file containing function definitions and data interface declarations
- Does not need to include the logic implementation code of the program itself, serving a descriptive role
- header files are imported using [`#include`](c++-preprocess.md##include) preprocessor directive

they are header file

```c++
#include <stdio.h>  
#include <vector>  
#include "user_defined.h"
```

## Why header file is crucial

- when compile, each .cpp file is compiled independently into a compilation unit

if without header file

- that means when you define a class, a function or a global variable in a file
- you must provide a declaration of that thing in **each file** that use it

**Header file is to minimize the potential errors in each declaration**

## Features

- **header file does not participate in the compilation process**
- c++ is compatible with the C language library, the suffix `.h` is usually for C language library

## Search Path

- default search path:
  - `/usr/local/include`
  - `/usr/include`

## Include Guards

- prevent insert into a single file multiple times

```cpp
// my_class.h
#ifndef MY_CLASS_H
#define MY_CLASS_H
namespace N
{
    class my_class
    {
    public:
        void do_something();
    }
}
#endif /* MY_CLASS_H */
```

## what header file should contains

- declaration
  - non-const variable
  - built-in type definitions at namespace or global scope
  - non-inline function declaration
  - [unnamed namespace]()
  - [aggregate definitions]()
  - using declaration
  - ...
- various of definition
  - definition of const object
  - definition of  inline function
  - definition of function class
  - definition of static function

## what header file should not contains

- Non-static variable
- built-in namespace, for example `using namespace std;`

## .inl: another type of header file

- [inline function](c++-inline-function.md) header file

