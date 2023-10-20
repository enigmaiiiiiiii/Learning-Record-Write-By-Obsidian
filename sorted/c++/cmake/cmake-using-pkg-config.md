# CMake - Using pkg-config

- [`pkg-config`](linux-pkg-config.md) is a tool for getting library build information
- `PkgConfig` is a module as a part of CMake distribution

## When PkgConfig is found

- command `pkg_check_modules()`, `pkg_check_module()`, `pkg_search_module()` will be add
- variable `pkg_config_found`, `pkg_config_version_string`, `pkg_config_executable`, `pkg_config_argn` will be add

## set variable

```cmake
find_package(PkgConfig REQUIRED)
pkg_check_modules(OPENCV REQUIRED opencv4)
message("opencv linker flags: ${OPENCV_LDFLAGS}")

add_executable(main main.cpp)
target_link_directories(main PUBLIC ${OPENCV_LIBRARY_DIRS})
target_include_directories(main PUBLIC ${OPENCV_INCLUDE_DIRS})
target_link_libraries(main ${OPENCV_LDFLAGS})
```

- when pkg-config check modules, several variable will be set
  - `OPENCV_LDFLAGS`: [linker flags](gcc-options.md#-lfoo,--l-libfoo.a)
  - `OPENCV_INCLUDE_DIRS`: [-I flags](gcc-options.md#-i-dir)
  - `OPENCV_LIBRARY_DIRS`: [-L flags](gcc-options.md#-ldir)
  - `OPENCV_FOUND`
  - `OPENCV_LIBRARIES`: 
  - `OPENCV_LINK_LIBRARIES`:
- value of variable `OPENCV_LDFLAGS` is equal to `pkg-config --libs opencv4`

the output looks like:

```
opencv linker flags: -L/opt/homebrew/opt/opencv/lib;-lopencv_gapi;-lopencv_stitching;-lopencv_alphamat;-lopencv_aruco;-lopencv_bgsegm;-lopencv_bioinspired;-lopencv_ccalib;...
-- Configuring done (0.0s)
-- Generating done (0.0s)
```


