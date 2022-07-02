# CMake 0 to 1

对于main.cpp

0. CMakeLists.txt

```c++
CMAKE_MINIMUM_REQUIRED(VERSION 3.15)

PROJECT(app)

add_executable(app main.cpp) 
```

用于构建可执行文件

1. 生成构建系统

```shell
cmake -S . -B build
```

表示在用当前目录下的CMakeLists.txt生成构建系统，放在当前目录的build目录中

- 构建系统: 用于描述如何使用自动化构建工具从其源代码构建项目的可执行文件和库

> 例如，一个构建系统可能是与命令行make工具一起使用的Makefile，或者集成开发环境(IDE)的项目文件。
> 为了避免维护多个这样的构建系统，项目可以使用CMake语言编写的文件抽象地指定其构建系统。
> 从这些文件中，CMake通过一个称为生成器的后端在本地为每个用户生成首选的构建系统。


2. 生成可执行文件或库文件

```shell
cmake --build <dir>
```

dir: 构建系统所在目录

3. 设置可执行文件输出目录

```cmake
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/bin")
```

可执行文件输出在: `顶级CMakeList.txt所在目录/bin`

```cmake
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/bin")
```

CMAKE_BINARY_DIR: CMake[构建系统](CMake_Concept.md#构建系统)目录

4. 
