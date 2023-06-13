# Linux - Create Process

- 父进程所有打开的文件描述符都被复制到子进程
- 父子进程共享同一个文件偏移量
- 子进程获得父进程数据空间，堆和栈的副本
- 父进程和子进程不共享[存储空间](linux-c-program-memory-layout.md)部分
- 父进程和子进程共享[正文段](linux-c-program-memory-layout.md)

[fork()函数](linux-process-fork().md)

[execve()函数](linux-process-api-execve().md)