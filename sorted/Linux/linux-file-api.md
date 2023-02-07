# 文件操作

[open函数](linux-file-api-fd-open.md)

[fcntl()](linux-fd-api-fcntl().md): 操作已打开的文件描述符

[查询文件状态](linux-file-api-stat.md)

[inode](linux-file-inode.md)

[文件访问权限](linux-file-type-and-mode.md)



## 复制文件描述符

```c
#include <unistd.h>
int dup(int fd);
int dup2(int fd, int fd2);
```

- dup(fd)复制文件描述符fd, 返回的新文件描述符是可用的文件描述符最小值
- dup(fd1, fd2)复制文件描述符fd1到文件描述符fd2，fd1和fd2指向同一文件