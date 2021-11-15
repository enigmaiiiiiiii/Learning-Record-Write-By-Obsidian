# socket地址

[[地址族]] 取值参考

- sockaddr 
- sockaddr_un:UNIX本地协议族
- sockaddr_in: TCP/IP协议族, 用于IPv4 
- sockaddr_in6: TCP/IP协议族，用于IPv6

## 1. 通用socket地址数据成员

###  旧结构体
- `sin_family`: 类型sa_family_t , 地址族
- `sa_data[14]` : 类型char, 地址值

```c++
#include <bits/socket.h>
struct sockaddr
{
  sa_family_t sa_family;  // 地址族类型sa_family_t
  char sa_data[14];  // 
}
```

### 新结构体

- `sa_family`:
- `__ss_align`:
- `__ss_padding[128-sizeof(__ss_align)`:

## 2. UNIX本地域协议族socket地址结构体数据成员

- `sin_family`: 类型sa_family_t , 地址族
- `sun_path[108]` : 类型char, 文件路径名

- 源码

```c++
#include <sys/un.h>
struct sockaddr_un
{
  sa_family_t sin_family;
  char sun_path[108];
}
```

## 3. TCP/IP协议族专用socket地址结构体数据成员，用于IPv4

- sin_sinfamily: 地址族, 类型sa_family_t
- sin_port: 端口号, 类型u_int16_t
- sin_addr: IPv4结构体, 类型in_addr
    - IPv4地址结构体`in_addr` 
- 源码    

```c++
#include <sys/un.h>
struct sockaddr_in {
  sa_family_t sin_family;  // 地址族
  u_int16_t sin_port;  // 端口号， 网络字节序类型
  struct in_addr sin_addr;  // IPv4结构体
};
``` 
    
```c++
struct in_addr {
  u_int32_t s_addr;  // IPv4地址，要用网络字节序
};
```
    
## 4. 用于IPv6

- sin6_family
- sin6_port
- sin6_flowinfo
- sin6_addr
- sin6_scope_id
    
```c++
struct sockaddr_in6
{
  sa_family_t sin6_family;
  u_int16_t sin6_port;  // 端口号，网络字节序
  u_int32_t sin6_flowinfo;  // 流信息
  struct in6_addr sin6_addr;
  u_int32_t sin6_scope_id;
};

struct in6_addr
{
  unsigned char sa_addr[16];
};
```
