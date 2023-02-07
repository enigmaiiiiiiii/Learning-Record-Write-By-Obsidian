# Socket

## 创建Socket对象

通过地址，端口构造socket对象

- 构造[socket](socket.md)
  - 通过地址，和端口构造`public Socket(String host, int port)`

## 读写socket方法

- InputStream getInputStream(): 读取流
- OutputStream getOutputStream(): 写出流

## half-close

> 关闭Socket的一端

- shutdownOutput()
- shutdownInput()

## Info

- getInetAddress(): 返回地址信息

## ServerSocket类

- accept(): 阻塞等待

