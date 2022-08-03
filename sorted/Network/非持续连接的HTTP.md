# 非持续连接的HTTP

- 通过URL地址`http ://www.someSchool.edu/someDepartment/home.index`请求一个web页面：
  1. HTTP客户进程在[端口](Network_Port.md)号80发起一个带服务器`www.school.edu`的TCP连接
  2. HTTP客户经它的[套接字](套接字.md)像该服务器发送一个HTTP请求[报文](报文.md)。报文中包含了路径名/someDepartment/home.index
  3. HTTP服务器经[套接字](套接字.md)接收该请求报文，从其存储器中检索对象`http ://www.someSchool.edu/someDepartment/home.index`, 在报文中封装对象，通过套接字向客户发送报文
  4. HTTP服务器进程通知TCP断开该TCP连接
  5. HTTP客户接收响应报文，TCP连接关闭;客户从报文中提取HTML文件
  6. 对每个引用对象重复前4个步骤
- 每个TCP传输只传输一个请求报文和一个响应报文

![[请求并接收一个HTML文件所需时间.excalidraw]]