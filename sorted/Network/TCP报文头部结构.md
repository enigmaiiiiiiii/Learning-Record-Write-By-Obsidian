# TCP 报文头部结构

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
    <td colspan = "16">16bits校验和</td>
    <td colspan = "16">16bits紧急指针</td>
  </tr>
  <tr align="center">
    <td colspan = "32">选项，最多40byte</td>
  </tr>
</table>

-   16bits 端口号
-   32bits 序号(seq = )
    -   TCP 对**数据**流的每一个字节编号
-   32bist 确认号(ack = )
    -   主机 A 接收主机 B 的数据，主机 A 发送的报文段的确认号是主机 A 期望从 B 接收到的下一字节的**序号**
        > 即收到的 TCP 报文段序号值+1
-   4bits 头部长度
    -   表示该头部有多少个 32bits(4 字节)
-   6bits 标志位包括
    -   URG: 表示紧急指针是否有效
    -   ACK: 确认报文
    -   PSH
    -   RST: 复位报文
    -   SYN: 表示请求建立一个连接
    -   FIN: finish, 通知对方要关闭连接了
-   16bits 窗口大小
-   16bits 校验和
-   16bits 紧急指针
    -   发送端向接收端发送[紧急数据](带外数据.md)的方法

## 选项

<table>
    <tr>
        <td>kind(1byte)</td>
        <td>length(1byte)</td>
        <td>info(remain byte)</td>
   </tr>
</table>

-   kind 取值 0~8
