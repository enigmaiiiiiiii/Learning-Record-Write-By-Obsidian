# code 

- 检测到SIGINT(interrupt信号, 如crtl + c), 执行函数sighandler

```c++
#include <stdio.h>  
#include <unistd.h>  
#include <stdlib.h>  
#include <signal.h>  
  
void sighandler(int);  
  
int main() {  
  signal(SIGINT, sighandler); // 检测到SIGINT(interrupt信号, 如crtl + c)  
  
  while (1) {  
    printf("开始休眠一秒钟...\n");  
    sleep(1);  
  }  
  return (0);  
}  
void sighandler(int signum) {  
  printf("捕获信号 %d，跳出...\n", signum);  
  exit(1);  
}
```