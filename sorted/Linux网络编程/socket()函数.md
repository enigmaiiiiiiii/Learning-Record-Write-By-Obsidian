# socket函数


```c++
#include <sys/types.h>
#include <sys/socket.h>
int socket(int domain, int type, int protocol);
```

-  用于创建socket
- 成功返回[[socket]][[文件描述符]],  失败返回-1
  
## 参数

- domain：使用的底层协议族，取值参考[[地址族]]
- type: 服务类型参数，取值有SOCK_STREAM，SOCK_UGRAM
- protocol: 再选择一个协议，通常为0

