# CMake - Add Directory

`ADD_SUBDIRECTORY`

- `ADD_SUBDIRECTORY(src_dir [binary_dir] [EXCLUDE_FROM_ALL])`
- add subdirectory to this project
- add subdirectory that stores source files to current project, and can specify the location of intermediate binary and target binary
- `EXCLUDE_FROM_ALL` means：exclude this directory from the default compile process

`INCLUDE_DIRECTORIES`

- `INCLUDE_DIRECTORIES([AFTER | BEFORE] [SYSTEM] dir1 dir2 … )`
- add multiple specific header file search paths to the project, path spliced by space, if path contains space, use double quotes to wrap it
- default behavior is to append to the end of current header file search path. There are two ways to control the location of the search path:
  - `CMAKE_INCLUDE_DIRECTORIES_BEFORE`: set this cmake variable to on, can put the added header file search path in front of the existing path
  - with `AFTER` or `BEFORE` parameter, can also control whether to append or prepend
