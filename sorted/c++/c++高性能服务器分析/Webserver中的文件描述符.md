# web服务器中文件描述符

## listen socket 
- 加入epoll的事件为
- 可复用
- 非阻塞

##  accept socket

- 文件描述符中没有可读内容时, 加入epoll的事件为监听可读
- 处理完文件描述符中的可读内容后, 加入epoll监听可写事件

##  日志文件描述符

