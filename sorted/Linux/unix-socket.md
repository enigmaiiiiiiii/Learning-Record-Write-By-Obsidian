# UNIX Socket

```c
#include <sys/socket.h>
int socketpair(int domain, int type, int protocol, int sockfd[2]);
```
  
- create a pair of unnamed sockets, and return the file descriptors in `sockfd[0]` and `sockfd[1]`.  Refer to [socket()](linux-socket-api-socket().md)
- success return 0; fail return -1, and set [errno](errno.md)
- parameter
  - domain: 同socket()函数
  - type: 同socket()函数
  - protocol: 同socket()函数
  - sockfd: 一堆socket的引用
