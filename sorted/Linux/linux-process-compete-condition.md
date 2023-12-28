# Linux Programming - Compete Condition

- 如果一个进程希望等待一个子进程终止，必须调用wait()函数
- 如果一个进程要等待其父进程终止，则可以使用轮询

```c++
// epoll mechanism
while (getppid() != 1)
  sleep(1);
```

- epoll mechanism waste CPU

