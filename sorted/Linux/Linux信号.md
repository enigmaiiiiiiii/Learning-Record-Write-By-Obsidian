# 信号

- 相关动作
  - 忽略此信号 
  - 捕捉信号: 调用一个用户函数
  - 执行系统默认动作
- 信号分类  
  - 程序错误类信号
  - 终止类信号
  - 时钟类信号
  - 异步io类信号
  - 作业控制类信号
  - 操作错误类信号
  - 其他
- linux中信号概览页面：signal(7)  
- linux中信号控制函数: signal(2)

[[Linux手册#信号说明]]

## 生成信号

- 终端控制字符
- shell命令异步的向进程发送信号
- 系统调用产生: kill, raise, abort
- 软件产生： alarm
- 硬件产生： 分发访问内存，除0 ...
- `kill -l` 可以查看信号种类
-  `man 7 signal`查看信号的详细信息

### 1. raise()函数

```c
#include <signal.h>
int raise(int signo);
```

- 进程向调用进程或线程发送信号
- 成功返回0，失败返回非零值

### 2. kill()函数

```c
#include <signal.h>
int kill(pid_t pid, int signo);
```

- pid取值
  - pid > 0: 将信号发送给进程ID等于pid的进程
  - pid = 0: 将信号发送给与发送进程属于同一进程组的所有进程
  - pid < -1: 将信号发送给**进程组**ID等于-pid的所有进程
  - pid = -1: 将信号发送给发送进程有权限向他们发送信号的所有进程

### 3. alarm()

```c
#include <unistd.h>
unsigned int alarm(unsigned int seconds);
```

- 经过seconds秒后，向调用进程发送一个alarm信号
- 返回前一个alarm函数注册时间的剩余时间，无先前计划的警报，返回0

### 4. pause()

```c
#include <unistd.h>
int pause(void);
```
- 使调用进程挂起直至捕捉到一个信号

## 设置信号动作

### signal()

- 用于指定信号发生时调用`handler`指向的函数
- 相当于定义了一个在进程执行过程中，接收到指定信号的动作
- signal() 无法只查询信号设置而不改变信号设置
> 信号句柄(signal handler)的含义：当信号出现时要调用的函数地址,并且函数只有一个信号值参数, 实参是接收到的信号

```c
#include <signal.h>
typedef void (*sighandler_t)(int);  // 函数指针声明
sighandler_t signal(int signum, sighandler_t handler);
```

- 信号句柄
  - 是一个sighandler_t, 表示一个[[函数指针]]
  - 指向的函数的形参是表示信号值的int参数
  - 实参是进程接收到的信号
  - 指向的函数返回类型为void
- signal()返回前一个信号句柄; 发生错误时, 返回SIG_ERR, 设置errno
- 所以signal()的返回值可以再次作为signal()的参数
- 参数
  - signum : 信号类型 
  - handler取值
    - SIG_IGN: 忽略该信号
    - SIG_DFL: 采用默认动作
    - 信号句柄：
  - 头文件中handler取值的定义  
  ```c
  #define SIG_ERR (void (*)())-1
  #define SIG_DFL (void (*)())0
  #define SIG_IGN (void (*)())1
    ```
    
- 函数原型
```c
#include <signal.h>
void (*signal(int signo, void (*func)(int)))(int);
// 函数名(*signal(int signo, void (*func)(int)))
```

##  sigaction()

```c
#include <signal.h>

int sigaction(int signum, const struct sigaction *act,
              struct sigaction *oldact);
```

- sigaction()比signal()功能更强，也更复杂
- 用于更改进程在接收到特定信号时采取的操作
- 参数
  - signum可以是任意有效信号，除了SIGKILL和SIGSTOP
  - act: 信号signum的新操作
  - oldact: 前一个动作不为NULL， 则将前一个动作保存在oldact中
  
### sigaction结构体  

```c
struct sigaction {
  void     (*sa_handler)(int);
  void     (*sa_sigaction)(int, siginfo_t *, void *);
  sigset_t   sa_mask;
  int        sa_flags;
  void     (*sa_restorer)(void);
};
```

- `sa_handler`和signal()第二个参数相同
- `sa_sigaction`: 指定一个信号句柄的地址，当sa_flags中设置了SA_SIGINFO
- `sa_mask`：sigset_t类型，信号处理程序执行期间应该被阻塞的信号掩码
- `sa_flags`: 指导内核对信号交付时锁采取的动作进行进一步控制
<table>
    <tr>
        <td>SA_NACLDSTOP</td>
        <td>此信号只对SIGCHLD信号有效<br>当子进程停止(即接收到SIGSTOP, SIGTSTP, SIGTTIN, SIGTTOU), 总是会发送SIGCHLD信号<br>已被停止的子进程恢复运行时，也可能像父进程发送SIGCHLD信号<br>以上两种情况在设置该标志的前提下，不会给调用进程发送信号</td>
    </tr>
    <tr>
        <td>SA_RESTART</td>
        <td></td>
    </tr>
    <tr>
        <td>SA_ONSTACK</td>
        <td></td>
    </tr>
    <tr>
        <td>SA_NODEFER</td>
        <td></td>
    </tr>
    <tr>
        <td>SA_RESETHAND</td>
        <td></td>
    </tr>
    <tr>
        <td>SA_NOCLDWAIT</td>
        <td></td>
    </tr>
    <tr>
        <td>SA_SIGINFO</td>
        <td></td>
    </tr>
</table>
    