# Qt - CMake

## Add Resource

[Add resource](qt-cmake-add-resource.md)

## Import Qt

`find_package(Qt6 REQUIRED COMPONENTS Core)`

- this will let cmake find Qt6 and import Core module
  - with `REQUIRED` identifier, if Qt6 not found, CMake will stop

[Qt Variable In CMake](sorted/c++/qt/qt-cmake-variable.md)

## Link Qt

`target_link_libraries(helloQt Private Qt6::Core Qt::Gui)`

## Multiple Project

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

crreate a library named `businesslogic`

```cmake
target_link_libraries(businesslogic PRIVATE Qt6::Core)
```

link Qt6::Core, when build `businesslogic` library file,

```cmake
target_include_directories(businesslogic INTERFACE ${CMAKE_CURRENT_SOURCE_DIR})
```

Add Header File Search Path, `CMAKE_CURRENT_SOURCE_DIR` is the path of directory where CMakeLists.txt is in

```cmake
target_link_libraries(helloworld PRIVATE
    businesslogic
    Qt6::Widgets)
```

在main.cpp中使用businesslogic库

## 翻译

##  Qt5兼容
