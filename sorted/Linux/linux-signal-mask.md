# Linux - Signal Mask

#mask

> 每个进程有一个信号屏蔽，进程在创建时继承其父进程的信号屏蔽

[sigaction()函数]()设置[[linux-signal-handler]]的中要阻塞的信号, 只在信号句柄执行期间起作用

- sigpromask()可以在程序任一点显示的阻塞或放开信号
- sigpending()查看被阻塞的信号，即已发送但被屏蔽的信号
- 不能阻塞SIGKILL 和 SIGSTOP
- 同一进程中的每个线程有自己的信号掩码

## set signal mask

[[sigpromask()函数]]

## Check Pending Signal

- signal that already sent but not received

[[sigpending()函数]]
