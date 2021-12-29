# main:处理命令行参数

- main函数常用到的有俩各个参数argc，argv
- `int main(int argc, char **argv)`
- argc(argument count), 保存**运行**时传递个main函数的参数
- argv(argument vector), 保存**运行**时传递个main函数的参数
  - `argv[0]`,程序运行时的全路径名
  - `argv[1]`及数组之后的元素表示程序在**命令行**执行时的字符串
  - `prog argv[1] argv[2]`, prog为[[可执行文件(executablefile)]]