# CMake - Build Project

`CMAKE_MINIMUM_REQUIRED`

- `CMAKE_MINIMUM_REQUIRED(VERSION version_number [FATAL_ERROR])`
- 声明CMake的版本要求

`PROJECT` ^cmakeproject

- `PROJECT(projectname [CXX] [C] [Java])`
- 指定工程名称,并可指定工程支持的语言。支持语言列表可忽略,默认支持所有语言

`ADD_EXECUTABLE`

- `ADD_EXECUTABLE(bin_file_name ${SRC_LIST})`
- 链接生成可执行文件`bin_file_name`

`AUX_SOURCE_DIRECTORY`

- `AUX_SOURCE_DIRECTORY(dir VAR)`
- <font color="gold">发现一个目录下所有的源代码文件并将列表存储在一个变量中</font>
- 把当前目录下的所有源码文件名赋给变量DIR_HELLO_SRCS

`ADD_COMPILE_OPTIONS(<option>)`  

- 目录范围添加编译选项

`TARGET_COMPILE_OPTIONS(<target> [BEFORE] <INTERFACE|PUBLIC|PRIVATE) [items1..] [[INTERFACE|PUBLIC|PRIVATE][item2..]..])`  

- 特定target添加编译选项

添加依赖  

- `add_dependencies(<target> [<target-dependency>]...)`

