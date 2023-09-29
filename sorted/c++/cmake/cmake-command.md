# CMake - Command

> **instruction is case-insensitive**, but **variable is case-sensitive**. It is recommended to use uppercase instruction.

[CMake Practical Command](cmake-practical-command.md)

[CMake Build Project](cmake-build-project.md)

[CMake Library](cmake-library.md)

[Add Directory](cmake-add-directory.md)

[Import External Package](cmake-package.md)

[CMake Add Build Rules](cmake-add-build-rules.md)

[CMake install](cmake-install.md)

[macro](cmake-macro-and-function.md)

## Some Command

4. `FIND_LIBRARY`

```cmake
find_library (<VAR> Name [Path1 Path2 ...])
```

`VAR`: variable to store the result, 
`Name`: name of library to find
`Path`: addon search path except default path

3. MESSAGE

```cmake
MESSAGE([<model>] "message text")
```

```cmake
cmake_minumun_required(version 3.0.0)

message("============================")
message("1. NONE")
message(NOTICE "2. NOTICE")
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

2. `SET`

cached variable will be saved in `CMakeCache.txt`

```cmake
set(<var> <value>... CACHE <type> <docstring> [FORCE])
```

`ADD_TEST(test_file param1 param2)`

```cmake
add_test(NAME mytest
         COMMAND testDriver --config $<CONFIG>
                            --exe $<TARGET_FILE:myexe>)
```


