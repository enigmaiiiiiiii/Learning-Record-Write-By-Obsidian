# CMake - Practical Command

## SET

```cmake
set(<variable> <value>... [PARENT_SCOPE])`设置一般变量, 
```

- variable : 变量名称
- value : 变量值

```cmake
set(<variable> <value>... CACHE <type> <docstring> [FORCE])
```

- 设置缓存变量
- type: 限定为BOOL, FILEPATH, PATH, STRING, INTERNAL

```cmake
set(ENV{<variable>} <value>... [PARENT_SCOPE])
```

设置环境变量

> PARENT_SCOPE设置变量值的影响范围

## MESSAGE

- `MESSAGE([SEND_ERROR | STATUS | FATAL_ERROR] “message to display” …)
- 向终端输出用户定义的信息或变量的值
- SEND_ERROR, 产生错误,生成过程被跳过
- STATUS, 输出前缀为—的信息
- FATAL_ERROR, 立即终止所有cmake过程

 ## SET_TARGET_PROPERTIES 
 
- `SET_TARGET_PROPERTIES(target PROPERTIES prop1 value1 prop2 value2)`
- 设置TARGET的属性，比如输出目录

## SUBDIRS

- `subdirs(dir1 dir2 ...[EXCLUDE_FROM_ALL exclude_dir1 exclude_dir2 ...] [PREORDER])`
- 添加子目录        
        
  
## LINK_DIRECTORIES

- LINK_DIRECTORIES(dir1 dir2 …)
- 添加非标准的共享库搜索路径
  
## ADD_DEFINITIONS

- 向C/C++编译器添加-D定义
- ADD_DEFINITIONS(-DENABLE_DEBUG -DABC),参数之间用空格分隔
  
## ADD_DEPENDENCIES

- `ADD_DEPENDENCIES(target-name depend-target1 depend-target2 …)`
- 定义target依赖的其他target,确保target在构建之前,其依赖的target已经构建完毕
  
## EXEC_PROGRAM

- `EXEC_PROGRAM(Executable [dir where to run] [ARGS &lt;args>][OUTPUT_VARIABLE &lt;var>] [RETURN_VALUE &lt;value>])`
- 用于在指定目录运行某个程序（默认为当前CMakeLists.txt所在目录）,通过ARGS添加参数,通过OUTPUT_VARIABLE和RETURN_VALUE获取输出和返回值,如下示例

    ```cmake
    # 在src中运行ls命令,在src/CMakeLists.txt添加
    EXEC_PROGRAM(ls ARGS "*.c" OUTPUT_VARIABLE LS_OUTPUT RETURN_VALUE LS_RVALUE)
    IF (not LS_RVALUE)
        MESSAGE(STATUS "ls result: " ${LS_OUTPUT}) # 缩进仅为美观,语法无要求
    ENDIF(not LS_RVALUE)
    ```

## INCLUDE

- `INCLUDE(file [OPTIONAL])` 用来载入CMakeLists.txt文件
- `INCLUDE(module [OPTIONAL])`用来载入预定义的cmake模块
  - OPTIONAL参数的左右是文件不存在也不会产生错误
  - 可以载入一个文件,也可以载入预定义模块（模块会在CMAKE_MODULE_PATH指定的路径进行搜索）  
    载入的内容将在处理到INCLUDE语句时直接执行
    
## FIND_

```cmake
FIND_FILE(<VAR> name path1 path2 …)
```

- VAR变量代表找到的文件全路径,包含文件名

```cmake
FIND_LIBRARY(<VAR> name path1 path2 …)
```

- VAR变量代表找到的库全路径,包含库文件名

  ```cmake
  FIND_LIBRARY(libX X11 /usr/lib)
  IF (NOT libx)
  MESSAGE(FATAL_ERROR "libX not found")
  ENDIF(NOT libX)
  ```

```cmake
FIND_PATH(&lt;VAR> name path1 path2 …)
```

- VAR变量代表包含这个文件的路径

```cmake
FIND_PROGRAM(&lt;VAR> name path1 path2 …)
```

- VAR变量代表包含这个程序的全路径

```cmake
FIND_PACKAGE(<PackageName> [version] [EXACT] [MODULE] [REQUIRED] [COMPONENTS] [componets …]])
```

- 用来调用预定义在CMAKE_MODULE_PATH下的`Find<name>.cmake`模块,也可以自己定义`Find<name>`模块,通过`SET(CMAKE_MODULE_PATH dir)`将其放入工程的某个目录供工程使用
- `[REQUIRED]` , 如果有这个参数，在找不到包时，会停止处理并显示错误消息
- `[QUIET]` 禁用信息显示，包括那些无法找到非REQUIRED包则显示的消息
