# Linux网络

- arp:查看和修改ARP高速缓存

[[telnet]]

[[tcpdump]]

- `/etc/resolv.conf`文件存放[[DNS]]服务器的ip地址
- `/etc/hosts`存放目标主机名及其对应的IP地址

[[Linux字节序转换函数]]

- IP地址转换函数

  ```c++
  #include <arpa/inet.h>
  in_addr_t inet_addr(const char* strptr);
  int inet_aton(const char* cp, struct in_addr* inp)
  char* inet_ntoa(struct in_addr in);
  ```
  
- 创建socket

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
  
  - 成功返回socket文件描述符
  - 失败返回-1