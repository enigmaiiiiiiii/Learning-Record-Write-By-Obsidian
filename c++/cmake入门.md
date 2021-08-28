# c++项目构建工具cmake

## cmake基本语法

- cmake变量使用${}方式取值,但是在IF控制语句中是直接使用变量名
- 环境变量使用$ENV{}方式取值,使用SET(ENV{VAR} VALUE)赋值
- 指令(参数1 参数2…)
- 参数使用括弧括起,参数之间使用**空格**或**分号**分开。
- 以ADD_EXECUTABLE指令为例：
  - 空格: ADD_EXECUTABLE(hello main.c  func.c)
  - 分号: ADD_EXECUTABLE(hello main.c; func.c)
  
## 应用

### CMakeList.txt单文件构建方法

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo1)  # 工程名称
ADD_EXECUTABLE(demo1 demo/main.cpp)
```

### CMakeList.txt多文件构建方法

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo1)  # 工程名称
AUX_SOURCE_DIRECTORY(. ProjectDirectory)  # demo文件夹完整路径,定义为变量ProjectDirectory
ADD_EXECUTABLE(demo1 demo/main.cpp demo/demo1.cpp)
```

### CMakeList.txt多文件多目录构建

- 主程序CMakeList.txt

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)

PROJECT(demo2)

ADD_SUBDIRECTORY(mylib)  # cmake需要包含的子目录

AUX_SOURCE_DIRECTORY(demo SrcVal)  # 打包文件夹demo用于ADD_EXCUTABLE,变量名为SrcVal

ADD_EXECUTABLE(demo2 ${demofile})  # 连接编译的文件,执行主程序

TARGET_LINK_LIBRARIES(demo2 Mylib)  # 在项目demo2中引入Mylib链接库
```

- 打包当前文件夹为Mylib静态链接库

```cmake
AUX_SOURCE_DIRECTORY(. DIR_LIB_SRCS)  # 所有原文件打包在DIR_LIB_SRCS变量中

ADD_LIBRARY(Mylib STATIC ${DIR_LIB_SRCS})  # DIR_LIB_SRCS生成为名为Mylib的链接动态库
```

## 基本命令

### 单文件或多文件构建项目

- CMAKE_MINIMUM_REQUIRED
  - CMAKE_MINIMUM_REQUIRED(VERSION version_number [FATAL_ERROR])
  - 声明CMake的版本要求
- PROJECT
  - PROJECT(projectname [CXX] [C] [Java])
  - 指定工程名称,并可指定工程支持的语言。支持语言列表可忽略,默认支持所有语言
- ADD_EXECUTABLE
  - ADD_EXECUTABLE(bin_file_name ${SRC_LIST})
  - 链接生成可执行文件bin_file_name
- AUX_SOURCE_DIRECTORY
  - AUX_SOURCE_DIRECTORY(dir VAR)
  - <font color="gold">发现一个目录下所有的源代码文件并将列表存储在一个变量中</font>
  - 把当前目录下的所有源码文件名赋给变量DIR_HELLO_SRCS

### 添加文件夹或链接库的方法

- ADD_LIBRARY
  - ADD_LIBRARY(libname [SHARED | STATIC | MODULE] [EXCLUDE_FROM_ALL] SRC_LIST)
  - <font color="gold">生成动态库或静态库</font>
  - <font color="gold">可用于子文件CMakeList.txt</font>
  - SHARED 动态库
  - STATIC 静态库
  - MODULE 在使用dyld的系统有效,若不支持dyld,等同于SHARED
  - EXCLUDE_FROM_ALL 表示该库不会被默认构建
- TARGET_LINK_LIBRARIES
  - TARGET_LINK_LIBRARIES(target lib1 lib2 …)
  - 为**项目target**添加需要链接的共享库
  - lib1 lib2由ADD_LIBRARY创建
- ADD_SUBDIRECTORY
  - ADD_SUBDIRECTORY(src_dir [binary_dir] [EXCLUDE_FROM_ALL])
  - 当前工程需要添加的子目录
  - 向当前工程添加存放源文件的子目录,并可以指定中间二进制和目标二进制的存放位置
  - EXCLUDE_FROM_ALL含义：将这个目录从编译过程中排除
- INCLUDE_DIRECTORIES
  - INCLUDE_DIRECTORIES([AFTER | BEFORE] [SYSTEM] dir1 dir2 … )
  - 向工程添加多个特定的头文件**搜索路径**,路径之间用空格分隔,如果路径包含空格,可以使用双引号将它括起来,  
  默认的行为为追加到当前头文件搜索路径的后面。有如下两种方式可以控制搜索路径添加的位置：
    - CMAKE_INCLUDE_DIRECTORIES_BEFORE,通过SET这个cmake变量为on,可以将添加的头文件搜索路径放在已有路径的前面
    - 通过AFTER或BEFORE参数,也可以控制是追加还是置前

## 常用命令

- SET
  - SET(VAR [VALUE] [CACHE TYPE DOCSTRING [FORCE]])
  - 定义变量(可以定义多个VALUE,如SET(SRC_LIST main.c util.c reactor.c))
- MESSAGE
  - MESSAGE([SEND_ERROR | STATUS | FATAL_ERROR] “message to display” …)
  - 向终端输出用户定义的信息或变量的值
  - SEND_ERROR, 产生错误,生成过程被跳过
  - STATUS, 输出前缀为—的信息
  - FATAL_ERROR, 立即终止所有cmake过程
- SET_TARGET_PROPERTIES
  - 设置输出的名称,设置动态库的版本和API版本
- SUBDIRS
  - deprecated,不再推荐使用
  - (hello sample)相当于分别写ADD_SUBDIRECTORY(hello),ADD_SUBDIRECTORY(sample)
- LINK_DIRECTORIES
  - LINK_DIRECTORIES(dir1 dir2 …)
  - 添加非标准的共享库搜索路径
- ADD_DEFINITIONS
  - 向C/C++编译器添加-D定义
  - ADD_DEFINITIONS(-DENABLE_DEBUG -DABC),参数之间用空格分隔
- ADD_DEPENDENCIES
  - ADD_DEPENDENCIES(target-name depend-target1 depend-target2 …)
  - 定义target依赖的其他target,确保target在构建之前,其依赖的target已经构建完毕
- EXEC_PROGRAM
  - EXEC_PROGRAM(Executable [dir where to run] [ARGS &lt;args>][OUTPUT_VARIABLE &lt;var>] [RETURN_VALUE &lt;value>])
  - 用于在指定目录运行某个程序（默认为当前CMakeLists.txt所在目录）,通过ARGS添加参数,通过OUTPUT_VARIABLE和RETURN_VALUE获取输出和返回值,如下示例

    ```cmake
    # 在src中运行ls命令,在src/CMakeLists.txt添加
    EXEC_PROGRAM(ls ARGS "*.c" OUTPUT_VARIABLE LS_OUTPUT RETURN_VALUE LS_RVALUE)
    IF (not LS_RVALUE)
        MESSAGE(STATUS "ls result: " ${LS_OUTPUT}) # 缩进仅为美观,语法无要求
    ENDIF(not LS_RVALUE)
    ```

- INCLUDE
  - INCLUDE(file [OPTIONAL]) 用来载入CMakeLists.txt文件
  - INCLUDE(module [OPTIONAL])用来载入预定义的cmake模块
  - OPTIONAL参数的左右是文件不存在也不会产生错误
  - 可以载入一个文件,也可以载入预定义模块（模块会在CMAKE_MODULE_PATH指定的路径进行搜索）  
    载入的内容将在处理到INCLUDE语句时直接执行
- FIND_
  - FIND_FILE(&lt;VAR> name path1 path2 …)
    - VAR变量代表找到的文件全路径,包含文件名
  - FIND_LIBRARY(&lt;VAR> name path1 path2 …)
    - VAR变量代表找到的库全路径,包含库文件名

    ```cmake
    FIND_LIBRARY(libX X11 /usr/lib)
    IF (NOT libx)
    MESSAGE(FATAL_ERROR "libX not found")
    ENDIF(NOT libX)
    ```

  - FIND_PATH(&lt;VAR> name path1 path2 …)
    - VAR变量代表包含这个文件的路径

  - FIND_PROGRAM(&lt;VAR> name path1 path2 …)
    - VAR变量代表包含这个程序的全路径
  - FIND_PACKAGE(&lt;name> [major.minor] [QUIET] [NO_MODULE] [[REQUIRED | COMPONENTS] [componets …]])
    - 用来调用预定义在CMAKE_MODULE_PATH下的Find&lt;name>.cmake模块,你也可以自己定义Find&lt;name>  
      模块,通过SET(CMAKE_MODULE_PATH dir)将其放入工程的某个目录供工程使用

## cmake预定义变量

- PROJECT_SOURCE_DIR 工程的根目录
- PROJECT_BINARY_DIR 运行cmake命令的目录,通常是${PROJECT_SOURCE_DIR}/build
- CMAKE_INCLUDE_PATH 环境变量,非cmake变量
- CMAKE_LIBRARY_PATH 环境变量
- CMAKE_CURRENT_SOURCE_DIR 当前处理的CMakeLists.txt所在的路径
- CMAKE_CURRENT_BINARY_DIR target编译目录
- 使用ADD_SURDIRECTORY(src bin)可以更改此变量的值
- SET(EXECUTABLE_OUTPUT_PATH &lt;新路径>)并不会对此变量有影响,只是改变了最终目标文件的存储路径
- CMAKE_CURRENT_LIST_FILE 输出调用这个变量的CMakeLists.txt的完整路径
- CMAKE_CURRENT_LIST_LINE 输出这个变量所在的行
- CMAKE_MODULE_PATH 定义自己的cmake模块所在的路径
- SET(CMAKE_MODULE_PATH ${PROJECT_SOURCE_DIR}/cmake),然后可以用INCLUDE命令来调用自己的模块
- EXECUTABLE_OUTPUT_PATH 重新定义目标二进制可执行文件的存放位置
- LIBRARY_OUTPUT_PATH 重新定义目标链接库文件的存放位置
- PROJECT_NAME 返回通过PROJECT指令定义的项目名称
- CMAKE_ALLOW_LOOSE_LOOP_CONSTRUCTS 用来控制IF ELSE语句的书写方式

### 系统信息

- CMAKE_MAJOR_VERSION cmake主版本号,如2.8.6中的2
- CMAKE_MINOR_VERSION cmake次版本号,如2.8.6中的8
- CMAKE_PATCH_VERSION cmake补丁等级,如2.8.6中的6
- CMAKE_SYSTEM 系统名称,例如Linux-2.6.22
- CAMKE_SYSTEM_NAME 不包含版本的系统名,如Linux
- CMAKE_SYSTEM_VERSION 系统版本,如2.6.22
- CMAKE_SYSTEM_PROCESSOR 处理器名称,如i686
- UNIX 在所有的类UNIX平台为TRUE,包括OS X和cygwin
- WIN32 在所有的win32平台为TRUE,包括cygwin

### 开关选项

- BUILD_SHARED_LIBS 控制默认的库编译方式。如果未进行设置,使用ADD_LIBRARY时又没有指定库类型,默认编译生成的库都是静态库 （可在t3中稍加修改进行验证）
- CMAKE_C_FLAGS 设置C编译选项
- CMAKE_CXX_FLAGS 设置C++编译选项



指令是大小写无关的,参数和变量是大小写相关的。推荐你全部使用大写指令。

## CMakeList.txt内容

- CMakeList.txt文件中支持大写，小写，大小写混用

```python
cmake_minium_required(version 3.15)  # 设置运行此配置文件的最低版本
project(Tutorial)  # 项目名称
add_excutable(Tutorial tutorial.cxx)  # 可执行文件
```
