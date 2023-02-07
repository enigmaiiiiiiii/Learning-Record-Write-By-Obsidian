# 概念

## 构建系统

- cmake处理项目代码文件时，入口是项目根目录下的`CMakeLists.txt`
- 添加子目录需要在子目录下包含一个`CMakeLists.txt`
- 顶层目录
- 存储构建系统文件
- 构建输出工件(例如可执行文件和库)
- 建议源文件外构建

缓存

- CMake会写一个CMakeCache.txt文件，将该目录标识为构建树
- 存储持久信息，如构建系统配置选项。
- 可手动修改
? 首次执行cmake构建项目时创建

构建系统

- Makefiles, Ninja, Visual Studio 17 2022

## TARGET

TARGET通常由ADD_EXECUABLE(), ADD_LIBRARY()创建

## 变量

普通变量

- 变量使用`${}`方式取值,但是在IF控制语句中是直接使用变量名
- 类型必须是BOOLEAN, FILEPATH, PATH, STRING, INTERNAL中的一个

环境变量

- 环境变量使用$ENV{}方式取值,使用`SET(ENV{VAR} VALUE)`赋值

list变量相关命令

- `list(LENGTH <list> <out-var>)`, 返回list长度到变量`out-var`
- `list(GET <list> <element index> [<element index> ...] <out-var>)`按索引返回list中元素到变量`out-var`
- `list(APPEND <list> [<element> ...])`
- `list(INSERT <list> <element_index> <element> [<element> ...])

  
## 指令

- 参数使用括号括起,参数之间使用**空格**或**分号**分开。
- 以ADD_EXECUTABLE指令为例：
  - 空格: ADD_EXECUTABLE(hello main.c  func.c)
  - 分号: ADD_EXECUTABLE(hello main.c; func.c)
  
## if 

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
