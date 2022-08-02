# Socket

## 创建Socket对象

通过地址，端口构造socket对象

- 构造[socket](socket.md)
  - 通过地址，和端口构造`public Socket(String host, int port)`
  <!-- - 阻塞直到和主机建立了连接 -->

## 读写socket方法

- InputStream getInputStream(): 读取流
- OutputStream getOutputStream(): 写出流

## ServerSocket

- accept(): 阻塞等待
