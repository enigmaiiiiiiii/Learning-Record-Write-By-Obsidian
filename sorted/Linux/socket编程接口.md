# socket网络编程接口

## 参数

- 协议族和地址组的关系

  <table>
      <tr align = "center">
          <td>协议族</td>
          <td>地址族</td>
          <td>描述</td>
      </tr>
      <tr>
          <td>PF_UNIX</td>
          <td>AF_UNIX</td>
          <td>UNIX本地域协议族</td>
      </tr>
      <tr>
          <td>PF_INET</td>
          <td>AF_INET</td>
          <td>TCP/IPv4协议族</td>
      </tr>
      <tr>
          <td>PF_INET6</td>
          <td>AF_INET6</td>
          <td>TCP/IPv6协议族</td>
      </tr>
  </table>

- 协议族及其地址
<table>
    <tr>
        <td>PF_UNIX</td>
        <td>文件的路径名，长度可达108字节</td>
    </tr>
    <tr>
        <td>PF_INET</td>
        <td>16bit端口号和32bit IPv4 地址， 共6字节</td>
    </tr>
    <tr>
        <td>PF_INET6</td>
        <td>16 bit 端口号 ， 32bit流标识，128 bit IPv6地址, <br>
            32bit范围ID，共26字节</td>
    </tr>
</table>

## socket类

- 通用socket地址


```c++
#include <bits/socket.h>
struct sockaddr
{
  sa_family_t sa_family;  // 地址族类型sa_family_t
  char sa_data[14];  // 
}
```

## 专用socket地址

- UNIX本地域协议族socket地址结构体


```c++
#include <sys/un.h>
struct sockaddr_un
{
  sa_family_t sin_family;
  char sun_path[108];
}
```


- TCP/IP协议族两个专用socket地址结构体，分别用与IPv4和IPv6

```c++
#include <sys/un.h>
struct sockaddr_un
{
  sa_family_t sin_family;  // 地址族
  u_int16_t sin_port;  // 端口号， 网络字节序类型
  struct in_addr sin_addr;  // IPv4结构体
};
struct in_addr
{
  u_int32+t s_addr;
};
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

