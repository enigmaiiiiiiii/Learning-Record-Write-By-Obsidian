# Linux - System Api sem_open()

```c
#include <fcntl.h>           /* For O_* constants */
#include <sys/stat.h>        /* For mode constants */
#include <semaphore.h>

sem_t *sem_open(const char *name, int oflag);
sem_t *sem_open(const char *name, int oflag,
                mode_t mode, unsigned int value);
```

- 创建一个新的 POSIX 信号量或打开一个现有的信号量。 信号量由 name 标识
- 创建成功返回信号量指针, 失败返回 SEM_FAILED, 设置 errno
- name: 信号量的名称
- oflag: 操作类型参数
  - O_CREAT: 创建一个信号量, 用户 id 和组 id 分别设置为调用进程的 effective user ID, group ID
  - 设置为 O_CREAT | O_EXCL, 确保创建一个信号量, 如果已存在,则调用失败
- oflag 设置为 O_CREAT 时，需要两个额外参数
  - mode : set access premission，refer to [open()](linux-file-api-fd-open.md)
  - value: 信号量的初始值

## Name Conventions for POSIX Semaphores

- 为了增加可移植性，在选择信号量命名时必须遵循一定的规则
- 命名的一个字符应该为`'/'`
- 名称其他字符不应该包含`'/'`
- 最大长度不应该超过`_POSIX_NAME_MAX`
