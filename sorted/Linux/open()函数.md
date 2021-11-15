# open函数

```c++
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int open(const char *pathname, int flags);
int open(const char *pathname, int flags, mode_t mode);
int creat(const char *pathname, mode_t mode);

```

- 以特定的方式打开文件
- 打开成功返回[[文件描述符]], 打开失败返回-1，设置[[errno]]

## 参数

- pathname ：文件路径
- flags：打开方式 
   - flags必须包含的以下参数之一:
     - O_CLOEXEC 
     - O_CREAT: 如果文件不存在，则创建文件
     - O_DIRECTORY
     - O_EXCL
     - O_NOCTTY
     - O_NOFOLLOW
     - O_TMPFILE 
     - O_TRUNC
  - 可选参数
    - O_CLOEXEC
    - O_CREAT
    - O_DIRECTORY
    - O_EXCL
    - O_NOCTTY
    - O_NOFOLLOW
    - O_TMPFILE
    - O_TRUNC.
    - O_NONBLOCK 以非阻塞方式打开文件
- mode: 设置文件权限, 只有创建新文件时才需要的参数，
  - 当flag设置为O_CREAT 或 O_TMPFILE时，需要设置的参数
  -  文件的最终权限= mode & ~umask
  - 取值:
    -  S_IRWXU  00700 用户文件可读可写可执行
    -  S_IRUSR  00400 user has read permission
    -  S_IWUSR  00200 user has write permission
    -  S_IXUSR  00100 user has execute permission
    -  S_IRWXG  00070 group has read, write, and execute permission
    -  S_IRGRP  00040 group has read permission
    -  S_IWGRP  00020 group has write permission
    -  S_IXGRP  00010 group has execute permission
    -  S_IRWXO  00007 others have read, write, and execute permission
    -  S_IROTH  00004 others have read permission
    -  S_IWOTH  00002 others have write permission
    -  S_IXOTH  00001 others have execute permission
    
    >  According to POSIX, the effect when other bits are set in mode is unspecified.  On Linux, the following bits are also honored in mode:
    -  S_ISUID  0004000 set-user-ID bit
    -  S_ISGID  0002000 set-group-ID bit (see inode(7)).
    -  S_ISVTX  0001000 sticky bit (see inode(7)).