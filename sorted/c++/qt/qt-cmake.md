# CMake

[添加资源](qt-cmake-add-resource.md)

## 引入Qt

`find_package(Qt6 REQUIRED COMPONENTS Core)`

- 让CMake查找Qt6, 并导入Core模块 
  - `REQUIRED`标志, 如果找不到则终止

[CMake中QT相关变量](sorted/c++/qt/qt-cmake-variable.md)

## 链接QT

`target_link_libraries(helloQt Private Qt6::Core Qt::Gui)`

## 多项目

```
<project root>
├── CMakeLists.txt
└── src
    ├── app
    │   ├── ...
    │   └── main.cpp
    └── businesslogic
        ├── CMakeLists.txt
        ├── businesslogic.cpp
        └── businesslogic.h
```

```cmake
add_library(businesslogic SHARED businesslogic.cpp)
```

创建名为businesslogic的库

```cmake
target_link_libraries(businesslogic PRIVATE Qt6::Core)
```

构建businesslogic库文件时，链接Qt6::Core

```cmake
target_include_directories(businesslogic INTERFACE ${CMAKE_CURRENT_SOURCE_DIR})
```

添加头文件搜索路径, CMAKE_CURRENT_SOURCE_DIR为当前CMakeList.txt文件所在目录的路径,

```cmake
target_link_libraries(helloworld PRIVATE
    businesslogic
    Qt6::Widgets)
```

在main.cpp中使用businesslogic库

## 翻译

##  Qt5兼容