# Linux System Function - umask

## What It Is

```c++
#include <sys/types.h>
#include <sys/stat.h>

mode_t umask(mode_t mask);
```

- 设置创建文件的默认 mask
- 返回设置前的文件掩码
- [open()函数](linux-file-api-fd-open.md)和 mkdir 等创建文件函数会用到 umask 函数设置的默认文件权限
- 文件的最终权限是 mode & ~umask
  - mode 是 open 和 mkdir 的函数的参数

## 命令

- umask 设置文件创建时得默认权限
- `umask [-p/S] [mode]`
  - `-p`
  - `-S` 以字符形式输出当前设置
