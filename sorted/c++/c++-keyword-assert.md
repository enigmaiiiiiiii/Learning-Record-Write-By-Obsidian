# C++ - assert

- 帮助程序源寻找错误，通过崩溃来处理异常情况，产生有限的调试输出

```c
#include <assert.h>
void assert(scalar expression)
```

-  如果expression为假，assert输出信息并通过调用abort()终止程序；
- 输出信息包括文件名，函数名，源代码哦的行号，参数文本
- 产生像这样的输出内容

```c
prog: some_file.c:16: some_func: Assertion `val == 0' failed.
```
