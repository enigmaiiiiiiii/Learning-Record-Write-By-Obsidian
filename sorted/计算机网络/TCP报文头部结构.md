# TCP报文头部结构

<table>
    <tr align="center">
        <td colspan = "16">16位源端口号</td>
        <td colspan = "16">16位目的端口号</td>
    </tr>
    <tr align="center">
        <td colspan = "32">32位序号</td>
    </tr>
    <tr align="center">
        <td colspan = "32">32位确认号</td>
    </tr>
    <tr align="center">
        <td colspan = "4">4位<br>头部长度</td>
        <td colspan = "6">6位保留</td>
        <td>U<br>R<br>G</td>
        <td>A<br>C<br>K</td>
        <td>P<br>S<br>H</td>
        <td>R<br>S<br>T</td>
        <td>S<br>Y<br>N</td>
        <td>F<br>I<br>N</td>
        <td colspan= "16">16位窗口大小</td>
    </tr>
    <tr align="center">
        <td colspan = "16">16位校验和</td>
        <td colspan = "16">16位紧急指针</td>
    </tr>
    <tr align="center">
        <td colspan = "32">选项，最多40字节</td>
    </tr>
</table>

- 16位端口号
- 32位序号
- 32位确认号
  - 值是收到的TCP报文段序号值+1
- 4位头部长度
  - 表示该头部有多少个32位(4字节)
- 6位标志位包括
  - URG: 表示紧急指针是否有效  
  - ACK: 确认报文
  - PSH
  - RST: 复位报文
  - SYN: 表示请求建立一个连接
  - FIN: finish, 通知对方要关闭连接了
- 16位窗口大小
- 16位校验和
- 16位紧急指针
  - 发送端向接收端发送紧急数据的方法
  [[带外数据]]

## 选项

<table>
    <tr>
        <td>kind(1byte)</td>
        <td>length(1byte)</td>
        <td>info(remain byte)</td>
   </tr>
</table>

- kind取值0~8