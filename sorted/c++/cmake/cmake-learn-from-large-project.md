# CMake - Learn CMake From Large Project

## sqlbrowser

### Command

```cmake
set(CMAKE_MODULE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/cmake" "${CMAKE_MODULE_PATH}")
```

`set`:设置CMAKE_MODULE_PATH的值

```cmake
target_compile_options(${PROJECT_NAME} PRIVATE -Wall -Wextra -Wshadow -Wnon-virtual-dtor -Wold-style-cast -Wcast-align -Wunused -Woverloaded-virtual -Wpedantic -Wconversion -Wsign-conversion)
```

添加编译选项

`target_comile_definitions`: 向目标文件添加编译选项
- public, private指定范围

```cmake
add_dependencies(${PROJECT_NAME} qscintilla2)
```

`add_dependencies`: 

- 顶级目标之间的依赖, 所以参数都是target
- 顶级目标：由add_executable() 或 add_library创建的

### 变量

CMAKE_MODULE_PATH: 

- 分号分隔的列表
- 检查默认模块之前, 由include() 和 find_package()加载

CMAKE_CURRENT_SOURCE_DIR

- CMakeList.txt所在的目录

```
EXECUTABLE_OUTPUT_PATH
LIBRARY_OUTPUT_PATH
```

- 设置文件输出目录 

