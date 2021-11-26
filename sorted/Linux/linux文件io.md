# 文件io 

## 1. open()

```c++
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int open(const char *pathname, int flags);
int open(const char *pathname, int flags, mode_t mode);
int creat(const char *pathname, mode_t mode);
int openat(int dirfd, const char *pathname, int flags);
int openat(int dirfd, const char *pathname, int flags, mode_t mode);
```

- 以特定的方式打开文件
- 打开成功返回[[文件描述符]], 打开失败返回-1，设置[[errno]]

### 参数

- `pathname` ：文件路径
- `flags`：打开方式 
  - flags必须包含的以下参数之一
     - O_RDONLY: 只读
     - O_WRONLY: 只写
     - O_RDWR: 可读可写
  - 可选参数
    - O_APPEND: 文件以append模式打开, 在写文件之前，文件的偏移量放置在文件末尾
    - O_ASYNC
    - O_CLOEXEC
     - O_CREAT: 如果文件不存在，则创建文件
    - O_DIRECTORY
    - O_EXCL
    - O_NOCTTY
    - O_NOFOLLOW
    - O_TMPFILE
    - O_TRUNC.一个已存在的常规文件，且允许写入，将被截断，长度为0  
       如果是FIFO或终端文件则忽略O_TRUNC标志
    - O_NONBLOCK 以非阻塞方式打开文件
- `mode`: 设置文件权限, 只有创建新文件`O_CREAT`或`O_TMPFILE`时才需要
  - 当flag设置为O_CREAT 或 O_TMPFILE时，需要设置的参数
  -  文件的最终权限= mode & ~umask
  - 取值(八进制常数):
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
    
## creat()
    
- 创建文件
- 等价于open(path, O_CREAT | O_WRONLY | O_TRUNC)
    
## lseek()    

```c++
#include <unistd.h>
off_t seek(int fd, off_t offset, int whence);
```
- 显示的设置文件偏移量
- 参数
  - fd: 文件描述符
  - off_t : offset
  - whence: 偏移量起始计算位置选项
    - SEEK_SET : 据文件开始处偏移offset
    - SEEK_CUR : 文件的偏移量设置为其当前加offset
    - SEEK_END : 偏移量设置为文件长度加offset
  

## read()

```c++
#include <unistd.h>
ssize_t read(int fd, void *buf, size_t count);
```

- 将[[文件描述符]]fd的内容读入buf
- 成功返回读到的数据大小, 失败返回-1, 并设置[[errno]]

## write()

```c++
#include <unistd.h>
ssize_t write(int fd, const void *buf, size_t count);
```

- 将buf中的内容写入[[文件描述符]]fd
- 成功返回写入的字节数， 失败返回-1

[[write()函数和printf()输出顺序]]
    
## opendir()

- 返回值
  - DIR* : 指向文件目录stream的指针
  - 可以认为open()函数返回值(DIR结构体)是其他目录操作的参数

```c++
#include <sys/types.h>
#include <dirent.h>

DIR *opendir(const char *name);
DIR *fdopendir(int fd);
```

## readdir()

- 返回值:
  - 返回指向结构体dirent的指针
- 参数
  - 文件流指针  

```c++
#include <dirent.h>
struct dirent *readdir(DIR *dirp);
```

- 结构体dirent
  - 包含inode, 文件名等信息

```c++
struct dirent {
    ino_t          d_ino;       /* Inode number */
    off_t          d_off;       /* Not an offset; see below */
    unsigned short d_reclen;    /* Length of this record */
    unsigned char  d_type;      /* Type of file; not supported
                                   by all filesystem types */
    char           d_name[256]; /* Null-terminated filename */
};

```

- d_name文件名字符串

## closedir()