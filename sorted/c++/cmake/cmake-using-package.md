# CMake - Using Package

* [What Is Package In CMake](#what-is-package-in-cmake)
* [The key Command](#the-key-command)
* [This Command has 2 search modes](#this-command-has-2-search-modes)
* [Searched Files](#searched-files)
* [Search Path](#search-path)
* [Who provide those .cmake file](#who-provide-those-.cmake-file)
* [How To Use Package](#how-to-use-package)
* [Create Package](#create-package)

## What Is Package In CMake

- package in cmake is a concept like other programming language, provide a mechanism to import extra [command](cmake-glossary.md#command) and predefined [variable](cmake-glossary.md#variable)

> similar concept in program lanaguage [nodejs module](nodejs-module-system.md), [java import](), [python package](python-import.md)

- when a package is found, extra commands and variable will be add to cmake

## The key Command

- [command `find_package()`](cmake-command-find-package)

## This Command has 2 search modes

- [Module mode](cmake-command-find-package.md#module-mode)
- [Config mode](cmake-command-find-package.md#config-mode)

## Searched Files

[module mode](cmake-command-find-package.md#module-mode)

- `Find<PackageName>.cmake`

[config mode](cmake-command-find-package.md#config-mode)

- `<PackageName>Config.cmake`
- `<lowercasepackagename>-config.cmake`
- `<PackageName>ConfigVersion.cmake`

## Search Path

module mode

- search path is determined by cmake

config mode

- ...

## Who provide those .cmake file

who provide `Find<PackageName>.cmake` file

- maybe operating system
- maybe CMake itself
- maybe project who called `find_package()`

who provide config mode .cmake file

- those files are [installed](c-library-file.md#install-a-shared-library-on-system) as a part of package

## How To Use Package

Using `PkgConfig` package as example

- [`pkg-config`](linux-pkg-config.md) is a tool for getting library build information
- `PkgConfig` is a module as a part of CMake distribution

When `PkgConfig` is found

- command `pkg_check_modules()`, `pkg_check_module()`, `pkg_search_module()` will be add
- variable `pkg_config_found`, `pkg_config_version_string`, `pkg_config_executable`, `pkg_config_argn` will be add

```cmake
find_package(PkgConfig REQUIRED)
pkg_check_modules(OPENCV REQUIRED opencv4)
message("opencv linker flags: ${OPENCV_LDFLAGS})
```

- when pkg-config check modules, several variable will be set
  - `OPENCV_LDFLAGS`: [linker flags](gcc-options.md#-lfoo,--l-libfoo.a)
  - `OPENCV_FOUND`
  - `OPENCV_LIBRARIES`: 
  - `OPENCV_LINK_LIBRARIES`:
  - `OPENCV_LIBRARY_DIRS`
  - `OPENCV_INCLUDE_DIRS`
- value of variable `OPENCV_LDFLAGS` is equal to `pkg-config --libs opencv4`


the output looks like:

```
opencv linker flags: -L/opt/homebrew/opt/opencv/lib;-lopencv_gapi;-lopencv_stitching;-lopencv_alphamat;-lopencv_aruco;-lopencv_bgsegm;-lopencv_bioinspired;-lopencv_ccalib;...
-- Configuring done (0.0s)
-- Generating done (0.0s)
```

## Create Package

- .cmake file
- install .cmake to 
