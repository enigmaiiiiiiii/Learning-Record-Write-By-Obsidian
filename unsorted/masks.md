# mask

- 同过位运算来实现参数的灵活设置
- linux中文件权限, [open](linux-file-api-fd-open.md)函数创建的文件权限 由 mode 参数和 umask()是指的[umask](umask.md)值共同决定，最终权限为 mode & ~umask
- ip地址子网掩码