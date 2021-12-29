# epoll_ctl()

```c
#include <sys/epoll.h>

int epoll_ctl(int epfd, int op, int fd, struct epoll_event *event);
```

- 函数作用
  - 根据op的值
  - 在由[epoll_creat()函数](Linux_IO_API_epoll_create().md)创建的文件描述符epfd所引用的事件表中添加, 修改, 删除条目 
  - 条目内容为fd发生的哪些event被监听
- 参数
  - `epfd`: epoll[[文件描述符]]
  - `fd`: 目标文件描述符
  - `op`: 对epfd文件描述符执行的操作
    - EPOLL_CTL_ADD: 往事件表中注册fd上的事件
    - EPOLL_CTL_MOD: 修改fd上的注册事件
    - EPOLL_CTL_DEL: 删除fd上的注册事件
  - `*event`: epoll_event事件指针
  
## epoll_event结构体

```c
struct epoll_event {
  uint32_t     events;      /* Epoll events */
  epoll_data_t data;        /* User data variable */
};
```

- event取值, 对应[poll()函数参数event](Linux_IO_API_poll().md)参数取值
  - EPOLLIN : 相关文件描述符可读
  - EPOLLOUT : 相关文件描述符可写
  - EPOLLRDHUP: 关闭连接，或关闭写端，用于检测边缘触发模式对等关闭
  - EPOLLRPI
  - EPOLLERR
  - EPOLLHUP: 已挂断，被挂断的文件描述符，不能再写，但可读
  - EPOLLET: 设置事件触发边界
  - EPOLLONESHOT
  - EPOLLWAKEUP
  - EPOLLEXCLUSIVE

- epoll_data_t

```c
typedef union epoll_data {
  void *ptr;
  int fd;
  uint32_t u32;
  uint64_t u64;
} epoll_data_t
```