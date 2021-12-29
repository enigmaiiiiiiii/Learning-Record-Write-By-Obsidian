# add_custom_command

## output

```cmake
add_custom_command(OUTPUT output1 [output2 ...]
                   COMMAND command1 [ARGS] [args1...]
                   [COMMAND command2 [ARGS] [args2...] ...]
                   [MAIN_DEPENDENCY depend]
                   [DEPENDS [depends...]]
                   [BYPRODUCTS [files...]]
                   [IMPLICIT_DEPENDS <lang1> depend1
                   [<lang2> depend2] ...]
                   [WORKING_DIRECTORY dir]
                   [COMMENT comment]
                   [DEPFILE depfile]
                   [JOB_POOL job_pool]
                   [VERBATIM] [APPEND] [USES_TERMINAL]
                   [COMMAND_EXPAND_LISTS])
```

- APPEND 
- BYPRODUCTS
- COMMAND
- COMMENT
- DEPENDS
- COMMAND_EXPAND_LIST
- IMPLICIT_DEPENDS
- JOB_POOL

```cmake
add_custom_command(
 OUTPUT out.c
 COMMAND someTool -i ${CMAKE_CURRENT_SOURCE_DIR}/in.txt
 -o out.c
 DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/in.txt
 VERBATIM)
```

添加自定义命令，执行sometool 生成out.c编译生成库文件, 当in.txt发生改变时，这条规则会重新执行

## build events

```cmake
add_custom_command(TARGET <target>
                   PRE_BUILD | PRE_LINK | POST_BUILD
                   COMMAND command1 [ARGS] [args1...]
                   [COMMAND command2 [ARGS] [args2...] ...]
                   [BYPRODUCTS [files...]]
                   [WORKING_DIRECTORY dir]
                   [COMMENT comment]
                   [VERBATIM] [USES_TERMINAL]
                   [COMMAND_EXPAND_LISTS])
```

- 向target添加自定义命令, 完成一些构建target之前和之后的工作
- 构建项目时执行，项目构建完成后不会执行
- command命令会发生什么取决于以下参数
  - PRE_BUILD: target内执行其他规则之前执行
  - PRE_LINK: command命令执行在源码编译之后，链接文件之前, 且目标不是cmake命令add_custom_target命令创建的
  - POST_BUILD: 目标执行后运行的command命令
