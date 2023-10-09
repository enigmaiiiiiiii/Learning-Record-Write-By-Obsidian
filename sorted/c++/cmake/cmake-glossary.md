# CMake - Glossary

* [buildsystem](#buildsystem)
* [Source Tree](#source-tree)
* [Build Tree](#build-tree)
* [Generator](#generator)
* [Cache](#cache)
* [TARGET](#target) [Compile Features](#compile-features)
* [Compile Definition](#compile-definition)
* [Variable](#variable)
* [List](#list)
* [Command](#command)
* [IF](#if)
* [option](#option)

## buildsystem

- describe how to build a project's executable and libraries from its source code use [build tools](c++-compile.md#build-tools)
- A buildsystem include following part
  - [source tree](#source-tree)
  - [build tree](#build-tree)
  - [generator](#generator)

## Source Tree

- top-level directory containing project's source files
- starting with the top-level CMakeLists.txt file

## Build Tree

- the top-level directory in which buildsytem files and build output artifacts
- mostly create by command `cmake -B <build_tree>`

A build tree directory looks like

```
.
├── CMakeCache.txt
├── CMakeFiles
│   └── ...
├── Makefile
├── cmake_install.cmake
└── install_manifest.txt
```

## Generator


## Cache

- CMake will create a CMakeCache.txt file, marking that directory as a build tree
- store persistent information, such as build system configuration options
- can be modified manually
- created when first time run `cmake` to build project

## TARGET

- TARGET: mostly create by `ADD_EXECUABLE()`, `ADD_LIBRARY()`
- [Executable File](executable-file.md) Or [Library File](c-library-file.md)

for example

```cmake
add_library(foo STATIC foo1.c foo2.c)
```

- foo is a available target can be used everywhere in the porject

## Compile Features

- a mechanism that allows you to specify the languages features
- These features are typically associated with a specific version of the C or C++ standard

## Compile Definition

- define [preprocessor](c++-preprocess.md) macros and constanst 

## Variable

common variable

- use `${}` to get variable value. But in [IF statement](#IF), use variable name directly
- variable type must be one of **BOOLEAN, FILEPATH, PATH, STRING, INTERNAL**

environment variable

- use `$ENV{}` to get environment variable value
- use `SET(ENV{VAR} VALUE)` to set environment variable value

## List

Handle List Variable

`list(LENGTH <list> <out-var>)`

- set list length to `out-var`

`list(GET <list> <element index> [<element index> ...] <out-var>)`

- set elements from the list to the variable `out-var` based on an index.

`list(APPEND <list> [<element> ...])`

`list(INSERT <list> <element_index> <element> [<element> ...])`

## Command

- argument is write in parentheses, 
- argument is separate by **space** or **semicolon**
- command name is case-insensitive, **lower case** command is recommended
- command arguments are case-sensitive

for example command `ADD_EXECUTABLE`

- `space`: ADD_EXECUTABLE(hello main.c  func.c)
- `semicolon`: ADD_EXECUTABLE(hello main.c; func.c)

## Signature

- used to identify a command
- command signature include
  - Command Name
  - Arguments and Types

## Find Module

- 

## Utility Module

## IF

```cmake
if (<contion>)
    <commands>
elseif (<condition>)    
    <commands>
else()
    <commands>
endif()    
```

- true包括： 1, ON, YES, TRUE, Y, non-zero number 
- false包括：0, OFF, NO, FALSE, N, IGNORE, NOTFOUND, empty string
- `if(<variable>)` 如果variable已被定义，则条件为真
- `if (COMMAND command-name)` command-name是命令, marco,function则返回为true
- `if (POLICY policy-id)` policy-id 是一个存在的policy
- `if (TARGET target-name)`
- `if (DEFINED <name>)` True if variable, cache variable or environment variable with given `<name>` if defined, the value of the variable does not matter, macro arguments are not varivable
  
## option

```cmake
option (<option_variable> "help string describing option" [initial value])
```

- 提供ON or OFF选项， 如果未提供初始值(initial value), OFF是默认值
