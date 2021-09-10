# ID

- UID:
- GID:
- SUID: 理解为一个属性，只能用于二进制文件, 二进制文件在执行过程中拥有文件拥有者权限
- EUID: 执行程序的ID，若文件有SetUID属性，则EUID可能不等于UID
- Setuid是指对文件执行[[chmod]] +s命令
- 理解EID概念可以参考用户更改密码的过程[[passwd修改密码的过程]]
- 每个文件至少有两个ID，使用者ID-UID和群组ID-GID
- `-rwxr-xr-x`
- `-rwsr-sr-x`
