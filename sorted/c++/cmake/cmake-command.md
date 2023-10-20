# CMake - Command

* [message](#message)
* [add_subdirectory](#add_subdirectory)
* [include_directories](#include_directories)
* [target_link_libraries](#target_link_libraries)
* [install](#install)
* [macro](#macro)
* [function](#function)

> **instruction is case-insensitive**, but **variable is case-sensitive**
> **lowercase** command is recommended

## message

`MESSAGE([SEND_ERROR | STATUS | FATAL_ERROR] “message to display” …)`

```cmake
cmake_minumun_required(version 3.0.0)

message("============================")
message("1. NONE") message(NOTICE "2. NOTICE")
message(STATUS "3. STATUS")
message(WARNING "4. WARNING")
message(DEPRECATION "5. DEPRECATION")
message(AUTHOR_WARNING "6. AUTHOR_WARNING")
message(SEND_ERROR "7. SEND_ERROR")
message(FATAL_ERROR "8. FATAL_ERROR")
message(VERBOSE "9. VERBOSE")
message(DEBUG "10. DEBUG")
message(TRACE "11. TRACE")
message("=============================")
```

## add_subdirectory

`ADD_SUBDIRECTORY(src_dir [binary_dir] [EXCLUDE_FROM_ALL])`

- add sub directory that stores source files to current project, 
- `binary_dir` specify the directory in which to place the output files
- `EXCLUDE_FROM_ALL` means：exclude this directory from the default compile process

## include_directories

`include_directories([AFTER | BEFORE] [SYSTEM] dir1 dir2 … )`

- Add multiple specific [header file](c++-header-file.md) **search paths** to the project, 
- path spliced by space, if path contains space, use double quotes to wrap it
- default behavior is to append to the end of current header file search path. 
- There are two ways to control the location of the search path:
  - `CMAKE_INCLUDE_DIRECTORIES_BEFORE`: set this cmake variable to on, can put the added header file search path in front of the existing path
  - with `AFTER` or `BEFORE` parameter, can also control whether to append or prepend

## target_link_libraries

`target_link_libraries(<target> ... <item> ...)`

- `target`: [cmake target](cmake-glossary.md#target)
- `item` can be
  - a [library target](cmake-glossary.md#target)
  - a full path to a library file
  - a plain library name
  - a link flag, such as `-lfoo`

## install

[Install](cmake-command-install.md)

## macro

```cmake
macro(<name> [<arg1> ...])
 <commands>
endmacro()
```

- define a `macro`, receive series of parameters `<arg1>, ...`, begin with `macro()`，end with `endmacro()`, 
- it wont be execute before it is called

call a macro

```cmake
foo()
Foo()
cmake_language(CALL foo)
```

## function

```cmake
function(<name> [<arg1> ...])
 <commands>
endfunction()
```

