# TCP头部结构

<table>
    <tr align="center">
        <td colspan = "16">16比特源端口号</td>
        <td colspan = "16">16比特目的端口号</td>
    </tr>
    <tr align="center">
        <td colspan = "32">32比特序号</td>
    </tr>
    <tr align="center">
        <td colspan = "32">32比确认号</td>
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
        <td colspan = "16">16比特校验和</td>
        <td colspan = "16">16比特紧急指针</td>
    </tr>
    <tr align="center">
        <td colspan = "32">选项，最多40字节</td>
    </tr>
</table>

- 16比特端口号
- 32比特序号
- 32比特确认号
  - 值是收到的TCP报文段序号值+1
- 4比特头部长度
  - 表示该头部有多少个32比特(4字节)
- 6比特标志位包括
  - URG: 表示紧急指针是否有效
  - ACK: 确认报文
  - PSH
  - RST: 复位报文
  - SYN: 表示请求建立一个连接
  - FIN: finish, 通知对方要关闭连接了
- 16比特窗口大小
- 16比特校验和
- 16比特紧急指针
  - 发送端向接收端发送紧急数据的方法

## 选项

<table>
    <tr>
        <td>kind(1byte)</td>
        <td>length(1byte)</td>
        <td>info(remain byte)</td>
   </tr>
</table>

- kind取值0~8