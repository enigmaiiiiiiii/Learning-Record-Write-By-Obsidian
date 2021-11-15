# Linux进程

- 进程上下文：text，data, 虚地址空间， 堆空间， 共享存储， 用户栈

## 进程的状态

- 阻塞状态
- 就绪状态
- 运行状态

## 信号

- 产生信号: 
  -  按键产生： crtl + c, Ctrl + z, Ctrl + \
  - 系统调用产生: kill, raise, abort
  - 软件产生： alarm
  - 硬件产生： 分发访问内存，除0 ...
- `kill -l` 可以查看信号种类  
-  `man 7 signal`查看信号的详细信息


## 1. fork()函数

- 创建子进程
- 远程序以fork()函数出现的行为分界
  - fork之前为父进程执行
  - fork之后父子进程同时执行
  
## 2. 进程间通信

### pipe()

```c++
#include <unistd.h>

int pipefd[2]; // 创建整数数组
int pipe(int pipefd[2]);  // 创建管道文件描述符
```

- 实现父子进程间通信
- `pipe[0]`: 管道的read端
- `pipe[1]`: 管道的write端

### mmap()

```c++
#include <sys/mman.h>

void *mmap(void *addr, size_t length, int prot, int flags, int fd, off_t offset);

```

- 实现文件内存共享，实现进程通信
- 将文件映射到内存，实现通过指针操作文件，而不是文件描述符
- 可以用于父子进程通信，也可用于
- 参数：
  - addr : 地址
  - length: 地址映射区大小
  - prot: 对应文件的读写属性
  - flags:
  - offset : 必须是分页大小的整数倍， 分页大小等于`sysconf(_SC_PAGE_SIZE)`的返回值
  
## 3. execve()
  
## 4. exit()
  
  - 进程终止
  
## 5. wait() 和waitpid()

```c++
#include <sys/types.h>
#include <sys/wait.h>

pid_t wait(int *wstatus);
pid_t waitpid(pid_t pid, int *wstatus, int options);
```
  
- `wait(&wstatus)` 相当于`waitpid(-1, &wstatus, 0)`: 检测是否有已终止的子进程，如果有的话立即返回。返回已终止进程的pid，并将状态存储在wstatus中
- 等待进程状态发生改变
- wstatus
  - 可以是空指针，表示不需要知道子进程是否为终止状态
  - 可以查看终止状态的宏
    - WIFEXITED(wstatus)：正常终止返回真
    - WIFSIGNALED(wstatus): 
    - WIFSTOPPED(wstatus)
    - WEXITSTATUS(wstatus): 查看子进程穿个exit()的状态值
    - WTERMSIG(wstatus)
    - WSTOPSIG(wstatus)
- 
- pid 取值
  -  < -1: 子进程的组id等于pid的绝对值
  - -1 : 等待任意子进程的状态发生变化 
  - 0: group ID等于当前进程的id
  - > 0: 等待进程ID等于pid的子进程的状态发生变化
- options  
  - WNOHANG: 如果没有子进程退出，立即返回
  - WUNTRACED: 
  - WCONTINUED
  
  
  
  
  
  