#  基本命令

> 指令是大小写无关的,参数和变量是大小写相关的。推荐全部使用大写指令。

## 单文件或多文件构建项目

- `CMAKE_MINIMUM_REQUIRED`
  - `CMAKE_MINIMUM_REQUIRED(VERSION version_number [FATAL_ERROR])`
  - 声明CMake的版本要求
- `PROJECT`
  - `PROJECT(projectname [CXX] [C] [Java])`
  - 指定工程名称,并可指定工程支持的语言。支持语言列表可忽略,默认支持所有语言
- `ADD_EXECUTABLE`
  - ADD_EXECUTABLE(bin_file_name ${SRC_LIST})
  - 链接生成可执行文件bin_file_name
- `AUX_SOURCE_DIRECTORY`
  - `AUX_SOURCE_DIRECTORY(dir VAR)`
  - <font color="gold">发现一个目录下所有的源代码文件并将列表存储在一个变量中</font>
  - 把当前目录下的所有源码文件名赋给变量DIR_HELLO_SRCS
- `ADD_COMPILE_OPTIONS(<option>)`  
  - 目录范围添加编译选项
- `TARGET_COMPILE_OPTIONS(<target> [BEFORE] <INTERFACE|PUBLIC|PRIVATE) [items1..] [[INTERFACE|PUBLIC|PRIVATE][item2..]..])`  
  - 特定target添加编译选项

## 添加文件夹或链接库的方法

- `ADD_LIBRARY`
  - `ADD_LIBRARY(libname [SHARED | STATIC | MODULE] [EXCLUDE_FROM_ALL] SRC_LIST)`
  - <font color="gold">生成动态库或静态库</font>
  - <font color="gold">可用于子文件CMakeList.txt</font>
  - SHARED 动态库
  - STATIC 静态库
  - MODULE 在使用dyld的系统有效,若不支持dyld,等同于SHARED
  - EXCLUDE_FROM_ALL 表示该库不会被默认构建
- `TARGET_LINK_LIBRARIES`
  - `TARGET_LINK_LIBRARIES(target lib1 lib2 …)`
  - <font color="gold">用于ADD_EXECUTABLE之后</font>
  - 为**项目target**添加需要链接的共享库
  - lib1 lib2由ADD_LIBRARY创建
- `ADD_SUBDIRECTORY`
  - `ADD_SUBDIRECTORY(src_dir [binary_dir] [EXCLUDE_FROM_ALL])`
  - 当前工程需要添加的子目录
  - 向当前工程添加存放源文件的子目录,并可以指定中间二进制和目标二进制的存放位置
  - EXCLUDE_FROM_ALL含义：将这个目录从编译过程中排除
- `INCLUDE_DIRECTORIES`
  - `INCLUDE_DIRECTORIES([AFTER | BEFORE] [SYSTEM] dir1 dir2 … )`
  - 向工程添加多个特定的头文件**搜索路径**,路径之间用空格分隔,如果路径包含空格,可以使用双引号将它括起来,  
  默认的行为为追加到当前头文件搜索路径的后面。有如下两种方式可以控制搜索路径添加的位置：
    - CMAKE_INCLUDE_DIRECTORIES_BEFORE,通过SET这个cmake变量为on,可以将添加的头文件搜索路径放在已有路径的前面
    - 通过AFTER或BEFORE参数,也可以控制是追加还是置前

## 常用命令

- `SET`
  - `set(<variable> <value>... [PARENT_SCOPE])`
  - 设置变量值
  - PARENT_SCOPE设置变量值的影响范围
- `MESSAGE`
  - ``MESSAGE([SEND_ERROR | STATUS | FATAL_ERROR] “message to display” …)
  - 向终端输出用户定义的信息或变量的值
  - SEND_ERROR, 产生错误,生成过程被跳过
  - STATUS, 输出前缀为—的信息
  - FATAL_ERROR, 立即终止所有cmake过程
- `SET_TARGET_PROPERTIES(target PROPERTIES prop1 value1 prop2 value2)`
  - 设置TARGET的属性，比如输出目录
- `SUBDIRS`
  - deprecated,不再推荐使用
  - (hello sample)相当于分别写ADD_SUBDIRECTORY(hello),ADD_SUBDIRECTORY(sample)
- `LINK_DIRECTORIES`
  - LINK_DIRECTORIES(dir1 dir2 …)
  - 添加非标准的共享库搜索路径
- `ADD_DEFINITIONS`
  - 向C/C++编译器添加-D定义
  - ADD_DEFINITIONS(-DENABLE_DEBUG -DABC),参数之间用空格分隔
- `ADD_DEPENDENCIES`
  - ADD_DEPENDENCIES(target-name depend-target1 depend-target2 …)
  - 定义target依赖的其他target,确保target在构建之前,其依赖的target已经构建完毕
- `EXEC_PROGRAM`
  - `EXEC_PROGRAM(Executable [dir where to run] [ARGS &lt;args>][OUTPUT_VARIABLE &lt;var>] [RETURN_VALUE &lt;value>])`
  - 用于在指定目录运行某个程序（默认为当前CMakeLists.txt所在目录）,通过ARGS添加参数,通过OUTPUT_VARIABLE和RETURN_VALUE获取输出和返回值,如下示例

    ```cmake
    # 在src中运行ls命令,在src/CMakeLists.txt添加
    EXEC_PROGRAM(ls ARGS "*.c" OUTPUT_VARIABLE LS_OUTPUT RETURN_VALUE LS_RVALUE)
    IF (not LS_RVALUE)
        MESSAGE(STATUS "ls result: " ${LS_OUTPUT}) # 缩进仅为美观,语法无要求
    ENDIF(not LS_RVALUE)
    ```

- `INCLUDE`
  - `INCLUDE(file [OPTIONAL])` 用来载入CMakeLists.txt文件
  - `INCLUDE(module [OPTIONAL])`用来载入预定义的cmake模块
  - OPTIONAL参数的左右是文件不存在也不会产生错误
  - 可以载入一个文件,也可以载入预定义模块（模块会在CMAKE_MODULE_PATH指定的路径进行搜索）  
    载入的内容将在处理到INCLUDE语句时直接执行
- `FIND_`
  - `FIND_FILE(&lt;VAR> name path1 path2 …)`
    - VAR变量代表找到的文件全路径,包含文件名
  - `FIND_LIBRARY(&lt;VAR> name path1 path2 …)`
    - VAR变量代表找到的库全路径,包含库文件名

    ```cmake
    FIND_LIBRARY(libX X11 /usr/lib)
    IF (NOT libx)
    MESSAGE(FATAL_ERROR "libX not found")
    ENDIF(NOT libX)
    ```

  - `FIND_PATH(&lt;VAR> name path1 path2 …)`
    - VAR变量代表包含这个文件的路径

  - `FIND_PROGRAM(&lt;VAR> name path1 path2 …)`
    - VAR变量代表包含这个程序的全路径
  - `FIND_PACKAGE(<PackageName> [version] [EXACT] [MODULE] [REQUIRED] [COMPONENTS] [componets …]])`
    - 用来调用预定义在CMAKE_MODULE_PATH下的Find&lt;name>.cmake模块,也可以自己定义Find&lt;name> 模块,通过SET(CMAKE_MODULE_PATH dir)将其放入工程的某个目录供工程使用
    - `[REQUIRED]` , 如果有这个参数，在找不到包时，会停止处理并显示错误消息
    - `[QUIET]` 禁用信息显示，包括那些无法找到非REQUIRED包则显示的消息