# 添加链接库

## ADD_LIBRARY

- 二进制library

  > `ADD_LIBRARY(libname [SHARED | STATIC | MODULE] [EXCLUDE_FROM_ALL] SRC_LIST)`
  - <font color="gold">生成动态库或静态库</font>
  - <font color="gold">可用于子文件CMakeList.txt</font>
  - SHARED 动态库
  - STATIC 静态库
  - MODULE 在使用dyld的系统有效,若不支持dyld,等同于SHARED
  - EXCLUDE_FROM_ALL 表示该库不会被默认构建
- object library

  > `ADD_LIBRARY(archive OBJECT archive.cpp zip.cpp lzma.cpp)`  
  - 由源文件产生连接文件(.o)

- 连接二进制和object

  > `Add_library(archive STATIC $<target_objects:name> extras.cpp)`
  - 通过语法`$<target_obects:name>`, 将object库为文件name提供给其他源文件, 生成二进制库文件
  
## TARGET_LINK_LIBRARIES

> `TARGET_LINK_LIBRARIES(target <item1> <item2> …)`
- <font color="gold">用于ADD_EXECUTABLE之后</font>
- ``<target>`不是变量
- `<target>`通过命令add_executable()或add_library()等类似命令创建
- `<target>`不能是ALIAS target
- `<item>`可以是
  - 目标库名称
  - 目标库文件完整路径
  - 链接选项
  - [生成表达式](cmake生成表达式.md)
  - 调试优化关键字
- 为**项目target**添加需要链接的共享库
- lib1 lib2由ADD_LIBRARY创建
  