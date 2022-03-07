# class httpconn

- 包含了HttpRequest, HttpResponse数据成员

- `read()`

将accept_fd的内容,读到buffer类 

- `process()`: 处理buffer中的内容
  1. 解析buffer中的请求
  2. 将响应内容加入buffer
  
- `write()`

从buffer中写入fd, 即iov中的内容

- iov结构体
  - 用来指示buffer的地址