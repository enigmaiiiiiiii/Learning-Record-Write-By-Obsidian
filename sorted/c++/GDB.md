# GDB

- 全称GNU Debugger
- 是UNIX及UNIX-like下的调试工具
- 可以调试C,c++, asm, minimal, d, fortran, objective-c, go, java, pascal

## 启动调试

- `gdb file` gdb后直接加可执行文件
- 出现`(gdb)`后，就可以使用gdb调试命令

## 程序运行后的调试

- `gdb attach pid` 其中pid为程序**进程id**参数
 - 通过ps命令获取**进程id**

## gdb后的调试

- `r`:启动程序
- `c`:继续执行
- `l`:查看源代码
- `b`:设置断点
- `rb`:设置满足正则表达式的断点
- `p`: 查看变量名
 - `set print pretty` 美化print
  
### 设置断点

- `break file:line` 在可执行文件file的第line行设置断点
- `break +/-num` 设置偏移量, 在当前行的上/下偏移num行设置断点
- `break file:line if i == 0`, 执行到第line行时，如果i == 0, 则中断程序
- `break func if a == 0`, 调用函数func时，如果参数a == 0, 则终端程序
- `break function_name` 当调用函数时暂停程序
 - 对于多个类时继承关系，由于虚函数也是同名函数，所以只要函数名满足条件，都会被设置断点
 - `break class1::func1` 通过作用域运算符 可以指定在哪个类 函数成员设置断点
 - `break func(int)` 在函数名为`func`，参数为`int`的函数处设置断点
- `rbreak regular_expression` 在符合匹配的函数名前设置断点
- `break *0x0000f` 在指令地址设置断点
- `tbreak file:line/func`设置临时断点
- `info b` 查看断点编号
- `disable breakNum` 禁用断点
- `enable breakNum` 启用断点

### 查看变量

- `print variable_name` 查看变量variable_name的值
- `display variable_name` 每次程序中断时显示变量variable_name的值

### problem

- [Cannot evaluate function -- may be inlined](https://stackoverflow.com/questions/22163730/cannot-evaluate-function-may-be-inlined)