#  cmake参考样例

## 单文件

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo1)  # 工程名称
ADD_EXECUTABLE(demo1 demo/main.cpp)
ADD_EXECUTABLE(demo1 demo/main.cpp demo/demo1.cpp)
```

## 打包目录

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo)  # 工程名称
AUX_SOURCE_DIRECTORY(. ProjectDirectory)  # demo文件夹完整路径,定义为变量ProjectDirectory
add_executable(demo ${ProjectDirectory})
```

## 多文件多目录

- 在可执行文件夹中搜索main()入口
- 主程序CMakeList.txt

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)

PROJECT(demo2)

ADD_SUBDIRECTORY(mylib)  # cmake需要包含的子目录

AUX_SOURCE_DIRECTORY(demo SrcVal)  # 打包文件夹demo用于ADD_EXCUTABLE,变量名为SrcVal

ADD_EXECUTABLE(demo2 tutorial.cpp)  # 连接编译的文件,执行主程序

TARGET_LINK_LIBRARIES(demo2 Mylib)  # 在项目demo2中引入Mylib链接库
```

- 子目录CMakeList.txt, 打包当前文件夹为Mylib静态链接库

```cmake
AUX_SOURCE_DIRECTORY(. DIR_LIB_SRCS)  # 所有原文件打包在DIR_LIB_SRCS变量中

ADD_LIBRARY(Mylib STATIC ${DIR_LIB_SRCS})  # DIR_LIB_SRCS生成为名为Mylib的链接静态库
```

## 添加编译选项

```cmake
cmake_minimum_required(VERSION 3.16)  
  
project(tmp)  
  
# 通过修改预设变量: cmake_cxx_flags, 添加编译参数 
set(CMAKE_CXX_FLAGS, "${CMAKE_CXX_FLAGS} 12345")   
  
add_executable(tmp main.cpp)  
```


## 多线程项目 

```cmake
find_package(Threads REQUIRED) 
# 寻找可用的thread包，设置CMAKE_THREAD_LIBS_INIT等相关变量
add_executable(demo demo.cpp)

target_link_libraries(demo ${CMAKE_THREAD_LIBS_INIT}) 
# 设置项目需要连接的libraries
```
