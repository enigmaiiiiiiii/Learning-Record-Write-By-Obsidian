# Linux网络API

[[Linux字节序转换函数]]

[[socket编程接口]]

[[文件描述符]]

- `/etc/resolv.conf`文件存放[[DNS]]服务器的ip地址
- `/etc/hosts`存放目标主机名及其对应的IP地址

## IP地址转换函数

```c++
#include <arpa/inet.h>
in_addr_t inet_addr(const char* strptr);
int inet_aton(const char* cp, struct in_addr* inp)
char* inet_ntoa(struct in_addr in);
```
  
## 创建socket函数

```c++
#include <sys/types.h>
#include <sys/socket.h>
int socket(int domain, int type, int protocol);
/* domain 底层协议(IP协议)族参数
   type 指定服务类型
       SOCK_STREAM服务(流服务)
       SOCK_UGRAM服务(数据报)
   protocol 通常设置为0  
*/
```

  - 成功返回[[socket]][[文件描述符]]
  - 失败返回-1
  
## 命名socket

- 将以个socket与socket地址绑定称为给socket命名
- 服务器程序需要命名socket
- 客户端通常使用匿名方式，即 使用操作系统分配的socket地址

> bind

```c++
#include <sys/types.h>
#include <sys/socket.h>
int bind(int sockfd,const struct sockaddr* myaddr, socklen_t addrlen);
/*
sockfd:socket文件描述符
myaddr:地址指针
addrlen: 地址长度
*/
```
- bind函数将my_addr所指的socket地址分配给未命名的sockfd[[文件描述符]]
  - 成功返回0
  - 失败返回-1

## 监听socket

> listen

```c++
#include <sys/socket.h>
int listen(int sockfd, int backlog);
/*
sockfd:被监听的socket
backlog: 提示内核监听队列最大长度
*/
```

- 监听队列超过backlog，服务器将不受理新的客户连接, 客户端将收到ECONNREFUSED
- 成功返回0
- 失败返回-1
  