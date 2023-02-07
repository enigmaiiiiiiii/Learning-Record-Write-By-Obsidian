# socket

- `socket = (IP:端口号)`
- 将应用程序数据从用户缓冲区中复制到TCP/UDP内核发送缓冲区，或者从内核TCP/UDP接收缓冲区中复制数据到用户缓冲区
- 可以用来修改内核中各层协议([NetWork_Http](network-http.md)/[TCP](network-tcp-protocol.md)/[IP协议](ip协议.md))的某些头部信息或其他数据结构
- 也称[套接字](套接字.md)

## socket其他含义

- 编程接口中的一个函数名
- 调用socket函数是的返回值成为socket描述符，简称socket
- 调用socket函数的端点
- 操作系统内核中联网协议Berkeley实现，成为socket实现
