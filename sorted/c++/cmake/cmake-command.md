#  Command

#cmake

> 指令是大小写无关的,参数和变量是大小写相关的。推荐全部使用大写指令。

[经常用到的命令(未分类的)](cmake-unsorted-common-command.md)

[cmake构建项目](cmake构建项目.md)

[cmake-library](cmake-library.md)

[添加目录](cmake添加文件夹.md)

[引入外部依赖](cmake-package.md)

[添加构建规则](cmake添加构建规则.md)

[cmake install](cmake-install.md)

[macro](cmake-macro-and-function.md)

## fragment

4. find_library

```cmake
find_library (<VAR> Name [Path1 Path2 ...])
```

Var: 存储变量
Name: 要查找的库 
Path: 除了默认位置外还要搜索的目录

3. message命令

```cmake
message([<model>] "message text")
```

```cmake
cmake_minumun_required(version 3.0.0)

message("============================")
message("1. NONE")
message(NOTICE "2. NOTICE")
message(STATUS "3. STATUS")
message(WARNING "4. WARNING")
message(DEPRECATION "5. DEPRECATION")
message(AUTHOR_WARNING "6. AUTHOR_WARNING")
message(SEND_ERROR "7. SEND_ERROR")
message(FATAL_ERROR "8. FATAL_ERROR")
message(VERBOSE "9. VERBOSE")
message(DEBUG "10. DEBUG")
message(TRACE "11. TRACE")
message("=============================")
```

2. set: 设置用户可以手动修改缓存条目，

缓存变量会被保存在CMakeCache.txt中

```cmake
set(<var> <value>... CACHE <type> <docstring> [FORCE])
```

1. add_test(测试文件名称 参数1 参数2)

```cmake
add_test(NAME mytest
         COMMAND testDriver --config $<CONFIG>
                            --exe $<TARGET_FILE:myexe>)
```


