# Linux - Process Command Line Arguments

## 1. options arguments

- POSIX命令行参数语法约定，遵循这些约定的命令行参数可用getopt()来收集
  - 以`-`开始的字符

## 2. parse command line arguments

```c++
#include <unistd.h>
int getopt(int argc, char * const argv[],
                  const char *optstring);
extern char *optarg;       // 外部定义变量
extern int optind, opterr, optopt;  // 
```

- 函数getopt()用于解析命令行参数, 重复调用，依次返回, 更新外部变量
- 定义了四个外部变量
  - optarg
  - optind:指向下一个选项参数的索引， 初始值为1
  - opterr:默认非0
  - optopt: 

### 返回值

- 调用成功选项字符的ascII码, 
- 若所有命令行参数解析完毕， 返回-1
- 调用错误，分三种情况返回
  - 默认返回？，并向stderr输出错误信息, 将发生错误的选项参数放入optopt
  - 如果opterr被设置称0，则返回？，不会报告错误信息
  - 若optstring的第一个字符式冒号`:`, 则不会返回错误消息，而是返回`:`, 表示缺少选项参数

### 参数

- argc, argv: 对应main()函数中的参数 
     [[参数传递#main 处理命令行参数]]
- optstring: 由合法的字符组成的字符串，包含选项值
    - 冒号`:`表示选项值字符后必须有参数
    - 以`-`开始的optstring，表示所有的参数都会被扫描，扫描到非选项参数返回1

  
## 3. 其他函数

```c++
#include <unistd.h>


int getopt_long(int argc, char * const argv[],
                const char *optstring,
                const struct option *longopts, int *longindex);

int getopt_long_only(int argc, char * const argv[],
                     const char *optstring,
                     const struct option *longopts, int *longindex);
```