# CMake - Hello World

* [Build Single File](#build-single-file)
* [Collect All Source File From Directory](#collect-all-source-file-from-directory)
* [Add Header File Search Path](#add-header-file-search-path)
* [Add Subdirectory](#add-subdirectory)
* [Create And Link A Library](#create-and-link-a-library)
* [Add Compile Options](#add-compile-options)
* [Multi Thread Project](#multi-thread-project)

## Build Single File

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo)  # Project Name
ADD_EXECUTABLE(demo main.cpp)
```

## Collect All Source File From Directory

`AUX_SOURCE_DIRECTORY(dir VARIABLE_NAME)`

- this command collect all source file from `dir`, 
- And assign to `VARIABEL_NAME`

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo)  # Project Name
AUX_SOURCE_DIRECTORY(. ProjectDirectory)  # Path of this directory assigned to variable "ProjectDirectory"
add_executable(demo ${ProjectDirectory})
```

## Add Header File Search Path

use command `INCLUDE_DIRECTORIES` to add header file [search path](gcc-options.md#-i-dir) for **all [target](cmake-glossary.md#target)** in a CMakeLists.txt

- for example, directory structure is like this

```
.
├── CMakeLists.txt
├── include
│   └── foo.h
└── main.cpp
```

CMakeLists.txt

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo)  # Project Name
INCLUDE_DIRECTORIES(include)  # 
ADD_EXECUTABLE(demo main.cpp)
```

- add directory "include" to header file search path for all target in this CMakeLists.txt
- then you can `#include foo.h` in `main.cpp`

use command `TARGET_INCLUDE_DIRECTORIES` to add header file [search path](gcc-options.md#-i-dir) for **specific [target](cmake-glossary.md#target)** in a CMakeLists.txt

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo)  # Project Name
ADD_EXECUTABLE(demo main.cpp)
TARGET_INCLUDE_DIRECTORIES(demo PUBLIC include)
```

- add directory "include" to header file search path for all target `demo`
- you can't use `target_include_directories` before command `add_executable` who create the target

## Add Subdirectory

With `ADD_SUBDIRECTORY` to add subdirectory, `CMakeLists.txt` in sub directory will be executed by top level `CMakeLists.txt`

for project structure

```
.
├── CMakeLists.txt
├── subdirectory
│   ├── add.cpp
│   ├── sub.cpp
│   └── CMakeLists.txt
└── main.cpp
```

`CMakeLists.txt` in `subdirectory`

```cmake
AUX_SOURCE_DIRECTORY(. DIR_LIB_SRCS)  # store all source file in current directory in variable "DIR_LIB_SRCS"
MESSAGE(STATUS "DIR_LIB_SRCS: ${DIR_LIB_SRCS}")  # print variable "DIR_LIB_SRCS"
```

- varable `DIR_LIB_SRCS` value is `./add.cpp;./sub.cpp`

`CMakeLists.txt` in project root directory

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)

PROJECT(demo)
ADD_SUBDIRECTORY(./subdirectory)  # subdirectory that cmake need to include
ADD_EXECUTABLE(demo main.cpp)  # link source file, execute main program
```

when run command `cmake -B build`, message `--DIR_LIB_SRCS: ./add.cpp;./sub.cpp` will be printed

## Create And Link A Library



## Add Compile Options

```cmake
cmake_minimum_required(VERSION 3.16)  
project(tmp)  
# modify predefined variable "cmake_cxx_flags" to add compile options
set(CMAKE_CXX_FLAGS, "${CMAKE_CXX_FLAGS} 12345")  # through modify predefined variable "cmake_cxx_flags" to add compile options
add_executable(tmp main.cpp)  
```

## Multi Thread Project

```cmake
find_package(Threads REQUIRED) 
# search available thread package, set variable "CMAKE_THREAD_LIBS_INIT" and so on
add_executable(demo demo.cpp)

target_link_libraries(demo ${CMAKE_THREAD_LIBS_INIT}) 
# set libraries that program need to link
```

