# 文件操作

## open()

## read()

## write()

```c++
#include <unistd.h>
ssize_t write(int fd, const void *buf, size_t count);
```

- 向fd中写入以buf为首地址的数据，大小不超过count


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

## dup()