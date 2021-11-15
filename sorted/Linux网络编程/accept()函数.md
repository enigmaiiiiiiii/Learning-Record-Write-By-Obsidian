# accept函数

```c++
#include <sys/types.h>
#include <sys/socket.h>

int accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen, int flags)
```

- 服务器可以通过读写该socket与发送socket的客户端通信
- 成功返回[[文件描述符]], 失败返回-1

## 参数

- sockfd: 已创建的socket文件描述符，非负整数
  [[socket()函数]]
- addr: 地址指针
- addrlen: 地址长度