# Computer Network - Frame

- 传输媒介不同, 帧的类型也不同
  - [以太网](以太网.md)帧
  - [令牌环](令牌环.md)帧

## 以太网帧

<table>
    <tr align="center">
        <td>目的物理地址</td>
        <td>源物理地址</td>
        <td>类型</td>
        <td>数据</td>
        <td>CRC</td>
    </tr>
    <tr align="center">
        <td>6字节</td>
        <td>6字节</td>
        <td>2字节</td>
        <td>46~1500字节</td>
        <td>4字节</td>
    </tr>
</table>
- 最大传输单元MTU，是指协议能携带多少上层数据, 上表中MTU是1500字节
- ARP的请求/应答报文属于帧的数据