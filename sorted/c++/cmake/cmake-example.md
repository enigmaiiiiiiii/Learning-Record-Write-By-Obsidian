# CMake - Practical Use

* [Single File](#single-file)
* [Bundle Directory](#bundle-directory)
* [Multi-File and Multi-Directory](#multi-file-and-multi-directory)
* [Add Compile Options](#add-compile-options)
* [Multi Thread Project](#multi-thread-project)

## Single File

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo1)  # Project Name
ADD_EXECUTABLE(demo1 demo/main.cpp)
ADD_EXECUTABLE(demo1 demo/main.cpp demo/demo1.cpp)
```

## Bundle Directory

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo)  # Project Name
AUX_SOURCE_DIRECTORY(. ProjectDirectory)  # Path of this directory assigned to variable "ProjectDirectory"
add_executable(demo ${ProjectDirectory})
```

## Multi-File and Multi-Directory

`CMakeLists.txt` in project root directory

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)

PROJECT(demo2)
ADD_SUBDIRECTORY(mylib)  # subdirectory that cmake need to include
AUX_SOURCE_DIRECTORY(demo SrcVal)  # bundle directory "demo" for "ADD_EXCUTABLE" command using, define this variable name "SrcVal"
ADD_EXECUTABLE(demo2 tutorial.cpp)  # link source file, execute main program
TARGET_LINK_LIBRARIES(demo2 Mylib)  # introduce "Mylib" library in "demo2" project
```

`CMakeLists.txt` in subdirectory, indicate that bundle current directory as static library `Mylib`

```cmake
AUX_SOURCE_DIRECTORY(. DIR_LIB_SRCS)  # 所有原文件打包在DIR_LIB_SRCS变量中
ADD_LIBRARY(Mylib STATIC ${DIR_LIB_SRCS})  # DIR_LIB_SRCS生成为名为Mylib的链接静态库
```

## Add Compile Options

```cmake
cmake_minimum_required(VERSION 3.16)  
project(tmp)  
# 通过修改预设变量: cmake_cxx_flags, 添加编译参数 
set(CMAKE_CXX_FLAGS, "${CMAKE_CXX_FLAGS} 12345")  # through modify predefined variable "cmake_cxx_flags" to add compile options
add_executable(tmp main.cpp)  
```

## Multi Thread Project

```cmake
find_package(Threads REQUIRED) 
# search available thread package, set variable "CMAKE_THREAD_LIBS_INIT" and so on
add_executable(demo demo.cpp)

target_link_libraries(demo ${CMAKE_THREAD_LIBS_INIT}) 
# set libraries that program need to link
```

