# Linux文件权限概念

[[UNIX]]

[[Linux账号管理相关文件目录]]

[[Linux文件ID]]

## 文件属性权限

- `ls -al`
> -al 列出所有文件详细信息
<table>
    <tr align = "center">
        <td>drwxrwxrwx</td>
        <td>9</td>
        <td>root</td>
        <td>root</td>
        <td>4096</td>
        <td>Jul 11 14:24</td>
        <td>.</td>
    </tr>
    <tr align="center">
        <td>文件属性</td>
        <td>连结数</td>
        <td>文件拥有者</td>
        <td>文件群组</td>
        <td>文件容量</td>
        <td>最后被修改的时间</td>
        <td>文件名</td>
    </tr>
</table>
- 文件属性
   - d(文件类型)rwx(文件拥有者权限)rwx(群组权限)rwx(其他人权限)
   - 文件属性
     - `d` 目录
     - `-` 文件
     - `l` 连结档(link file)
     - `b` 装置文件里面的的可供储存的接口设备
     - `c` 装置文件里面的串行端口设备，例如键盘，鼠标
   - 权限属性，三个一组
     - `r`可读
     - `w`可写
     > 没有当前文件的写权限,但拥有上级目录的写权限，就可以将文件删除
     - `x`可执行
     - `s`文件在执行阶段具有所有者权限,只能用于二进制文件， 如/usr/bin/passwd文件
     - `t` 适用于目录，使一个目录可以被写入文件，且该文件只能被写入者删除
 - 文件名
   - `.`表示隐藏档
 
 
 ## 文件权限掩码
 
 - [[umask]]
 
 ## 改变文件权限
 
 - `chgrp`: 改变所属群组
 - `chown`: 改变所属用户 [[chown]]
 - `chmod`: 改变文件的属性，可读，可写，SUID等 [[chmod]]
 
 ## 文件种类概念
 
- regular file: 一般意义上的文件， 
  - 纯文字文件: 由数字，字母构成
  - 二进制文件: 
  - 数据格式文件: 有特定格式的文件
- directory: 目录文件
- link连结档: 类似快捷方式
- device(设备与装置文件)
- sockets: 资料接口文件
- FIFO,pipe(数据输送文件)

## 文件扩展名

- `.sh`：scripts, 用shell写成
- `.Z, .tar, .tar.gz, .zip, .tgz` 压缩文件, 依据压缩软件命名
- `.html, .php` 网页相关文件
- 还有其他个操作系统扩展名