# code

```c++
#include <stdlib.h>  
#include <unistd.h>  
#include <stdio.h>  
  
int main() {  
  write(STDOUT_FILENO, "1 ", 2);  // 将"1 "存入缓冲区  
  printf("2 ");  
  write(STDOUT_FILENO, "3 ", 2);  // 将"3 "存入缓冲区
  printf("4 \n5 ");  
  printf("6 ");  
  write(STDOUT_FILENO, "7 ", 2);  
  return 0;  
}
```


- 缓冲类型
  - 完全缓冲 : 缓冲区被填满时, 才将内容发送，并刷新缓冲区, 通常出现在文件输入中 
  - 行缓冲 : 出现换行符刷新缓冲区，如键盘输入，printf函数
  - 无缓冲 : 输入后直接输出，如write()函数
- printf行缓冲，write无缓冲
- 所以运行结果为  

```
1 3 2 4
7 5 6
```