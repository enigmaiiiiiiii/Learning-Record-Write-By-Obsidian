# cmake中的属性

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

第一个参数指定作用范围

- GLOBAL: 全局唯一
- DIRECTORY `[<dir>]`: 不指定dir则为范围是当前文件 
- TARGET:
- SOURCE: 对同目录的target可见
- INSTALL:
- TEST:
- CACHE:

- `OUTPUT_NAME` 输出文件名
- `RUNTIME_OUTPUT_DIRECTORY` 构建目标文件过程中的输出目录
  - 由[[cmake预定义变量]]CMAKE_RUNTIME_OUTPUT_DIRECTORY初始化