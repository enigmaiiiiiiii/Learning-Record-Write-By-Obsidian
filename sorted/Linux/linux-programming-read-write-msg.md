# 发送和接收消息
  
```c
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/msg.h>

int msgsnd(int msqid, const void *msgp, size_t msgsz, int msgflg);

ssize_t msgrcv(int msqid, void *msgp, size_t msgsz, long msgtyp,
                      int msgflg);
```

## 发送消息

- msgsnd()向[[msgget()函数]]返回的msqid发送msgp中的缓冲消息，msgsz给出消息正文大小, 范围(0~MSGMAX)
- msgsnd()阻塞的情况
  - 消息队列中总字节数达到上限
  - 消息队列中消息条数已满
- 参数说明
  - msqid: 消息的标识符，类似文件描述符
  - msgp: 要发送的消息的地址, 指向一个长整型，包含了正的消息类型，其后紧接着的是消息数据
    -  若发送最长消息是512字节，则可定义以下结构
     ```c
     struct mymesg {
       long mtype;  // 
       char mtext[512];  // 
     }
     ```
  - msgsz: 消息大小
  - msgflg设置为IPC_NOWAIT 发生阻塞时, 消息不被发送，设置errno并立即返回
  - msgflg不设置时，将阻塞值以下情况发生
    - 阻塞条件不再满足时
    - 消息队列标识从系统中删除, 这种情况发生时，设置errno，返回-1
    - 调用进程收到了一个信号, 调用被中断，消息不发送并设置errno, 返回-1 


## 接收消息

- 将消息从msqid中读至msgp所指地址, msgsz表示接收到的字节数
- 接收到消息，消息从队列中被删除，更新[[msqid_ds结构体]]
- 消息不在队列中，调用被阻塞  
- 参数
  - msgtyp表示要接收的消息类型, 取值:
    - `=0`: 接收队列中第一个消息，即按发送顺序接收消息
    - `>0`: 接收队列中type等于msgtyp的消息, 
    - `<0`: 接收type小于或等于msgtyp绝对值最低类型的消息
  - msgflg取值：
    - IPC_NOWAIT:满足阻塞条件时不被阻塞，并返回-1，设置errno
    - MSG_COPY:
    - MSG_EXCEPT
    - MSG_NOERROR: 如果长于 msgsz 字节，则截断消息文本。
