# Modern CMake

## 1. 变量和缓存

- 缓存: 只是一个文本文件CMakeCache.txt
- 运行CMake时在构建目录中创建的

> 这就是CMake如何记住你设置的任何东西, 所以你不必每次重新列出你的选项重新运行CMake。

### 1.1 普通变量

- 不包含空格的值，加引号和不加引号没有区别
- 用`${}`展开变量时，总是应该用引号括起来`"${MY_PATH}"`

局部变量

```cmake
set(MY_VARIABLE "value")
```

列表变量

```cmake
set(MY_LIST "one" "two")
set(MY_LIST "one;two")
```

- 第一种情况内部会变成`"one;two"`

### 1.2 缓存变量

```cmake
set(MY_CACHE_VARIABLE "VALUE" CACHE STRING "Description")
```

不会修改已存在的变量

- STRING: 变量类型

```cmake
set(MY_CACHE_VARIABLE "VALUE" CACHE STRING "" FORCE)
mark_as_advanced(MY_CACHE_VARIABLE)
```

无论如何都会设置变量的值
mark_as_advanced设置变量当使用`cmake -L`时显示

### 1.3 设置环境变量

尽量避免

```cmake
set(ENV{variable_name} value)
```

### 1.4 属性

```cmake
set_property(TARGET TargetName PROPERTY CXX_STANDARD 11)
```


###  BOOL类型

bool类型变量便捷设置方式

```cmake
option(MY_OPTION "this is settable form the command line" OFF)
```

## How to structure your project

```
- project
    - .gitignore
    - README.md
    - LICENCE.md
    - CMakeLists.txt
    - cmake
        - FindSomeLib.cmake
        - something_else.cmake
    - include
        - project
        - lib.hpp
    - src
        - CMakeLists.txt
        - lib.cpp
    - apps
        - CMakeLists.txt
        - app.cpp
    - tests
        - CMakeLists.txt
        - testlib.cpp
    - docs
        - CMakeLists.txt
    - extern
        - googletest
    - scripts
        - helper.py
```

一个python文件夹用于python绑定

一个cmake文件夹用于辅助cmake文件，如`Find<library>.cmake`文件

- 设置cmake辅助module路径

```cmake
set(CMAKE_MODULE_PATH "${PROJECT_SOURCE_DIR}/cmake" ${CMAKE_MODULE_PATH})
```

在源文件中构建时，`.gitignore`中应该有类似`/build*`的东西

不想在源文件中构建时，在最外层的CMakeList.txt添加以下内容

- 不能再有CMakeList.txt的目录中构建文件

```cmake
file(TO_CMAKE_PATH "${PROJECT_BINARY_DIR}/CMakeLists.txt" LOC_PATH)
if(EXISTS "${LOC_PATH}")
    message(FATAL_ERROR "You cannot build in a source directory (or any directory with a CMakeLists.txt file). Please make a build subdirectory. Feel free to remove CMakeCache.txt and CMakeFiles.")
endif()
```

