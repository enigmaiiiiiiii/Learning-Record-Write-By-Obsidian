# bind函数

```c++
#include <sys/types.h>
#include <sys/socket.h>
int bind(int sockfd,const struct sockaddr* addr, socklen_t addrlen);
```

- bind函数将addr所指的socket地址分配给未命名的sockfd[[文件描述符]]
- 成功返回0 
- 失败返回-1, 并设置[[errno]]
  - EACCES: 被绑定的地址是受保护的地址
  - EADDRINUSE, 被绑定的地址正在使用中

## 参数

- sockfd: socket文件描述符, 
  [[socket()函数]]
- addr:地址指针
  [[socket地址]]
- addrlen: 地址长度

