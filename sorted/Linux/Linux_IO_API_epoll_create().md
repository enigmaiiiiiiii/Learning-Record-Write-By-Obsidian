# epoll_create

```c
#include <sys/epoll.h>

int epoll_create(int size);
int epoll_createl(int flages);
```

> 从Linux 2.6.8起，size参数被忽略，当必须大于0

- 返回一个文件描述符，表示一个epoll实例, 是后续epoll相关函数的参数
- 当epoll实例的文件描述符不在使用时，应该用[close()](Linux_fd_API_close().md)函数关闭
- flags为0时，`epoll_create`和`epoll_create()`相同
- flags取值EPOLL_CLOEXEC, 设置文件描述符的[close-on-exec](open()函数.md)标志