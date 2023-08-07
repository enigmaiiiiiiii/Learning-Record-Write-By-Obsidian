# Linux - Stream

## Standard Stream

- file pointer `stdin`, `stdout`, `stderr` 

> corresponding to [file descriptors](linux-file-descriptor.md) are STDIN_FILENO, STDOUT_FILENO, STDERR_FILENO

- standard IO function return a pointer point [FILE]() Object, this object is a struct, include buffer length, buffer content, error flag, etc.

tranlate 

## Buffer Type

[A Simple Demonstrate](output-order-of-function-write()-and-printf().md)

- full buffer : buffer is full, then send content and flush buffer, usually in file input
- line buffer : flush buffer when newline appears, like keyboard input, printf function
- no buffer : output directly after input, like `write()` function

Some Buffer Type Of Common Stream

- printf() is line buffer
- write() is no buffer
- std error is no buffer

## 设置缓冲

```c++
#include <stdio.h>
void setbuf(FILE *stream, char *buf);
void setbuffer(FILE *stream, char *buf, size_t size);
void setlinebuf(FILE *stream);
int setvbuf(FILE *stream, char *buf, int mode, size_t size);
```

- `setvbuf()`的参数
  - stream: 流
  - mode:缓冲类型参数
    - `_IONBF` 无缓冲
    - `_IOLBF` 行缓冲
    - `_IOFBF` 完全缓冲
  - size: 缓冲的最小长度
- `setbuf()` : 用于关闭或打开stream的缓冲
  - `buf`设置缓冲大小，NULL表示关闭缓冲  
- 其他函数的效果均可由`setvbuf()`函数实现

## flush刷新(冲洗)

- 刷新缓冲区表示将数据写出到文件
- 自动刷新的情况
  - 流被关闭
  - 调用exit()
  - 行缓冲中的换行符
  - 缓冲区被填满
  - 无论何时堆流操作导致他实际从文件读数据时
- 函数`int fflush(FILE *stream);`刷新stream缓冲区  
- 通过适当加入换行符，或在适当位置调用fflush()来保证内容按顺序输出
