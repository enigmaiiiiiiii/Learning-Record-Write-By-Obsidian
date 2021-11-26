# 异步io
> 异步的含义：一旦请求加入队列，就立即返回, 无论读写操作是否完成
- 异步io操作在io期间不导致发出请求的进程被阻塞
- 异步io函数aio_read(), aio_wirte(), aio_error(), aio_return(), aio_suspend(), aio_cancel(), lio_listio(), aio_fsync()

## 结构体aiocb(异步控制模块)

- 异步io类操作关键参数

```c
#include <aiocb.h>

struct aiocb {
  /* The order of these fields is implementation-dependent */

  int             aio_fildes;     /* File descriptor */
  off_t           aio_offset;     /* File offset */
  volatile void  *aio_buf;        /* Location of buffer */
  size_t          aio_nbytes;     /* Length of transfer */
  int             aio_reqprio;    /* Request priority */
  struct sigevent aio_sigevent;   /* Notification method */
  int             aio_lio_opcode; /* Operation to be performed;
                                     lio_listio() only */

  /* Various implementation-internal fields not shown */
};
```

- 同步io相同成员：
  - aio_fildes: 被操作的[[文件描述符]] 
  - aio_offset: 文件偏移量
  - aio_buf: 缓冲地址
  - aio_nbytes : 缓冲大小
    [[LinuxIO流]]
- 异步io特有成员    
  - aio_reqprio : 响应优先级  
  - aio_sigevent: 异步io完成时的通知方式, [[sigevent结构体]]
  - aio_lio_opcode: lio_listio用到的操作类型函数
  
## 函数
  
### 读写函数  
  
```c
#include <aio.h>
int aio_read(struct aiocb *aiocbp);
int aio_write(struct aiocb *aiocbp);
```

- 文件的偏移量，文件描述符均在结构体aiocbp中