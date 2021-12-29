# epoll()

- 类似[poll()](Linux_IO_API_poll().md)函数, 监听多个文件描述符是否由可用的IO操作
- 核心epoll实例，是一个内核结构,用户空间可以认为是两个列表的容器
  - interest list: 事件列表
  - ready list : 就绪列表

 ##  触发条件

- 两种触发模式: 边界出发(ET)和电平触发(LT), 默认边界出发
- (边界出发)ET模式: epoll_wait()检测到有事件发生时，应用程序必须立即处理该事件
- (电平出发)LT模式: epoll_wait()检测到发生变化时，通知应用程序，应用程序可以不立即处理，下次epoll_wait()时，再次通知应用程序，直到文件描述符被处理

## 创建和管理epoll实例

- [epoll_create](Linux_IO_API_epoll_create().md) : 创建epoll实例

- [epoll_ctl](Linux_IO_API_epoll_ctl().md) : 向事件列表注册被监听的文件描述k符

- [epoll_wait](Linux_IO_API_epoll_wait().md) : 阻塞等待IO事件
