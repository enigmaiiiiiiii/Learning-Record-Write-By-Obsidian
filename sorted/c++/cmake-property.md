# CMake - Property

```cmake
set_property(<GLOBAL                      |
              DIRECTORY [<dir>]           |
              TARGET    [<target1> ...]   |
              SOURCE    [<src1> ...]
                        [DIRECTORY <dirs> ...]
                        [TARGET_DIRECTORY <targets> ...] |
              INSTALL   [<file1> ...]     |
              TEST      [<test1> ...]     |
              CACHE     [<entry1> ...]    >
             [APPEND] [APPEND_STRING]
             PROPERTY <name> [<value1> ...])
```

first argument specifies the scope of the property, available scopes as follow:

- GLOBAL: global unique
- DIRECTORY `[<dir>]`: directory scope property, if `<dir>` is not specified, the current directory is used
- TARGET:
- SOURCE: can be accessed by targets in the same directory
- INSTALL
- TEST
- CACHE

???

- `OUTPUT_NAME`
- `RUNTIME_OUTPUT_DIRECTORY` 
  - initialized by [cmake predefined variable]() `CMAKE_RUNTIME_OUTPUT_DIRECTORY`
