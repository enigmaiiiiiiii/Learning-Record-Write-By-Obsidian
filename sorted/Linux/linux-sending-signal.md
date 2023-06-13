# Linux - Sending A Signal

- 终端控制字符
- shell命令异步的向进程发送信号
- `kill -l` 可以查看信号种类

## 1. raise()函数

```c
#include <signal.h>
int raise(int signo);
```

- 进程向调用进程或线程发送信号
- 成功返回0，失败返回非零值

## 2. kill()函数

```c
#include <signal.h>
int kill(pid_t pid, int signo);
```

- pid取值
  - pid > 0: 将信号发送给进程ID等于pid的进程
  - pid = 0: 将信号发送给与发送进程属于同一进程组的所有进程
  - pid < -1: 将信号发送给**进程组**ID等于-pid的所有进程
  - pid = -1: 将信号发送给发送进程有权限向他们发送信号的所有进程

## 3. alarm()

```c
#include <unistd.h>
unsigned int alarm(unsigned int seconds);
```

- 经过seconds秒后，向调用进程发送一个alarm信号
- 返回前一个alarm函数注册时间的剩余时间，无先前计划的警报，返回0

## 4. pause()

```c
#include <unistd.h>
int pause(void);
```
- 使调用进程挂起直至捕捉到一个信号