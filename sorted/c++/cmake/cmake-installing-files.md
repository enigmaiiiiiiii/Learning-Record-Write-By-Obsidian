# CMake - Install Files

## What It Is

- software is typically installed into a directory separate from the source and build trees
- cmake provide [install command](cmake-command-install.md) to specify how a project is installed
- each [install command](cmake-command-install.md) defines some installation rules
- for makefile generator, run `make install` in [build tree directory](cmake-glossary.md#build-tree) to install the project
- install command have several signature: `TARGET`, `PROGRAMS`, `DIRECTORY`, `SCRIPT`, `CODE`, `EXPORT`

## Install Binary

for example install a executable at `/usr/local/bin`

```cmake
cmake_minimum_required(VERSION 3.12)
project(hello)
add_executable(hello main.cpp)
install(TARGETS hello DESTINATION /usr/local/bin)
```

build and install

```sh
$ cmake -B build
$ cd build
$ make install
```

## Install Library

for example install a library at `$HOME/Tutorial`

Directory Structure

```
.
├── include
│   └── foo.h
├── foo.pc
├── CMakeLists.txt
├── add.cpp
└── sub.cpp
```

> header file `foo.h` is not used in source file, it's for other project to use this library

CMakeLists.txt

```cmake
# Set the minimum required version of CMake
cmake_minimum_required(VERSION 3.12)

# Define the project and specify its name
project(libfoo)

set(LIBFOO_NAME "foo")
set(FOO_HEADER_FILES "${LIBFOO_NAME}.h")
set(INSTALL_DIR "$ENV{HOME}/Tutorial/")       # install in $HOME/Tutorial
set(FOO_PKG_CONFIG_FILE "${LIBFOO_NAME}.pc")  # for pkg-config, if pkg-config used

add_library(${LIBFOO_NAME} SHARED add.cpp sub.cpp)  # add source file

set_target_properties(${LIBFOO_NAME} PROPERTIES VERSION 1.0)  # Optional

# install target and files
install(TARGETS ${LIBFOO_NAME} DESTINATION ${INSTALL_DIR}/lib)                    # install shared library file, .dylib or .so
install(FILES ./include/${FOO_HEADER_FILES} DESTINATION ${INSTALL_DIR}/include)   # install header file
install(FILES ./${FOO_PKG_CONFIG_FILE} DESTINATION ${INSTALL_DIR}/lib/pkgconfig)  # install pkg-config file
```

build and install

```
cmake -B build
cd build
make install
```

link the library with g++

```sh
g++ -o hello main.cpp -lfoo -L$HOME/Tutorial/lib -I$HOME/Tutorial/include
```

## Install System Library



