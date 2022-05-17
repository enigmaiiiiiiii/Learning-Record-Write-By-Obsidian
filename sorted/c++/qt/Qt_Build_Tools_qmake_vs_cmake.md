# qmake vs cmake

- required libraries

```qmake
QT += core
QT -= gui
QT += network
```

```cmake

find_package(Qt5Core REQUIRED)
find_package(Qt5Network REQUIRED)
```

- Additional Compiler flags

```qmake
CONFIG += c++11
```

```cmake
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++0x")
```

- source files and header files

```qmake
SOURCES += main.cpp \
    test_interface.cpp \
    motomanlibrary.cpp \
    processing.cpp
    
HEADERS += \
    test_interface.h \
    motomanlibrary.h \
    processing.h
```

```

```cmake
set(SOURCES
    main.cpp
    test_interface.cpp
    motomanlibrary.cpp
    processing.cpp
)

# 只需要表示where header files are
include_directory(.)
include_directory(some/where/else) 
```