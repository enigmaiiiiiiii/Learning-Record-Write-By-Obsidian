# socket函数


```c++
#include <sys/types.h>
#include <sys/socket.h>
int socket(int domain, int type, int protocol);
```

-  用于创建socket
- 成功返回[[socket]][[文件描述符]],  失败返回-1
  
## 参数

- domain：使用的底层协议(ipv4,ipv6)族，取值参考[[地址族]]
- type: 服务类型参数，取值
  - SOCK_STREAM: 提供有序的、可靠的、双向的、基于连接的字节流。 可能支持带外数据传输机制
  - SOCK_DGRAM: 支持数据报，最大长度的不可靠消息
- protocol: 再选择一个协议，通常为0