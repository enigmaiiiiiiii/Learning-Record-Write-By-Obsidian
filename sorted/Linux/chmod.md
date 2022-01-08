# chmod

- `chmod [-R] nnn`:  nnn表示八进制数字
- 改变文件权限 [[Linux文件权限概念]]
- 数字类型改变权限, 括号中为二进制表示
  - r:4(100), w:2(010), x:1(001), rw: 6(110), rwx: 7(111)
  - `chmod 777 file` 文件权限变为所有人可读可写可执行
- 字符类型改变档案权限
  <table>
    <tr>
        <td>chmod</td>
        <td>u(user)<br>g(group)<br>o(other)<br>a(all)<br></td>
        <td>+(加入）<br>-(除去)<br>=(设定)<td>
        <td>r<br>w<br>x<br>s<br>t<td>
        <td>file</td>
    </tr>
  </table>