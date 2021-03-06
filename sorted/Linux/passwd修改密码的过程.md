# passwd修改密码过程

[[Linux文件ID]]

- 了解Linux修改密码的机制是学习[[Linux文件权限概念]]的好方式
- 与修改密码相关的文件权限

<table align="center">
    <tr>
        <td>/etc/passwd</td>
        <td>-rw-r--r--</td>
        <td>文件拥有者root</td>
    </tr>
    <tr>
        <td>/etc/shadow</td>
        <td>-rw-r-----</td>
        <td>文件拥有者root</td>
    </tr>
    <tr>
        <td>/usr/bin/passwd</td>
        <td>-rw<font color="red">s</font>r-xr-x</td>
        <td>文件拥有者root</td>
    </tr>
</table>

- 可以看出只有root用户有读写权限，但是其他用户仍然可以修改密码, 原因在`/usr/bin/passwd`这个可执行文件的权限
- `/usr/bin/passwd`文件在用户权限上有个特殊权限s
  - 这个s就是Set UID
  - 当使用者执行该文件是，可以暂时获得root权限
- 使用命令`chmod u-s /usr/bin/passwd`去掉s权限后，普通用户将无法修改密码
  