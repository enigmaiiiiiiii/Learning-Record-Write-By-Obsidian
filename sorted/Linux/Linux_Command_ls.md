# ls

- `-a` 显示所有文件及目录
- `-l` 除文件名称外，列出详细信息
- `-t` 按建立时间先后列出
- `-A` 还不列出目前目录(`.`)和父目录(`..`)
- `-r` 将文件一相反的次序显示
- `ls -al` 列出所有档案
- `ll` 不是命令，是`ls -l`的别名
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
        <td>档案属性</td>
        <td>连结数</td>
        <td>档案拥有者</td>
        <td>档案群组</td>
        <td>档案容量</td>
        <td>最后被修改的时间</td>
        <td>文件名</td>
    </tr>
</table>
- 档案属性
   - d(档案类型)rwx(档案拥有者权限)rwx(群组权限)rwx(其他人权限)
   - 档案属性
     - `d` 目录
     - `-` 档案
     - `l` 连结档(link file)
     - `b` 装置文件里面的的可供储存的接口设备
     - `c` 装置文件里面的串行端口设备，例如键盘，鼠标
   - 权限属性，三个一组
     - `r`可读
     - `w`可写
     - `x`可执行
 - 文件名
   - `.`表示隐藏档