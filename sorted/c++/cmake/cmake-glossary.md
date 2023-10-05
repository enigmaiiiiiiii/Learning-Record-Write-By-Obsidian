# CMake - Glossary

## Build System

- They are build system: Makefiles, Ninja, Visual Studio 17 2022

## Cache

- CMake will create a CMakeCache.txt file, marking that directory as a build tree
- store persistent information, such as build system configuration options
- can be modified manually
- created when first time run `cmake` to build project

## TARGET

TARGET: mostly build from `ADD_EXECUABLE()`, `ADD_LIBRARY()`

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

`list(INSERT <list> <element_index> <element> [<element> ...])

## Command

- 参数使用括号括起,参数之间使用**空格**或**分号**分开。
- 以ADD_EXECUTABLE指令为例：
  - space: ADD_EXECUTABLE(hello main.c  func.c)
  - semicolon: ADD_EXECUTABLE(hello main.c; func.c)

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
