# connect

```c++
#include <sys/types.h>
#include <sys/socket.h>

int connetc(int sockfd, const struct sockaddr *serv_addr, socklen_t addrlen);
```

- 成功返回0，一旦成功, sockfd就唯一标识了这个连接，
- 失败返回-1，并设置[[errno]]
  -  ECONNREFUSED 目标端口不存在，连接被拒绝
  - ETIMEDOUT连接超时

## 参数

- sockfd: socket文件描述符(一个非负整数)
  [[socket()函数]]
- serv_addr:  
  [[socket地址]]
- addrlen: 指定地址长度