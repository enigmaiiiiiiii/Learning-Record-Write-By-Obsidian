# ARP协议

- 实现任意网络层地址到任意物理地址的转换

## ARP协议工作原理

- 地址解析协议
- 主机向自己所在的网络广播一个ARP请求  
   请求包含目标机器的网络地址
   此网络上的所有机器都将受到这个请求
   但只有被请求的机器会回应一个ARP应答
   其中包含自己的物理地址
- 以太网ARP请求/应答报文格式 
<table>
    <tr>
        <td>硬件类型</td>
        <td>协议类型</td>
        <td>硬件地址长度</td>
        <td>协议地址长度</td>
        <td>操作</td>
        <td>发送端以太网地址</td>
        <td>发送端IP地址</td>
        <td>目的端以太网地址</td>
        <td>目的端IP地址</td>
    </tr>
    <tr>
        <td>2字节</td>
        <td>2字节</td>
        <td>1字节</td>
        <td>1字节</td>
        <td>2字节</td>
        <td>6字节</td>
        <td>4字节</td>
        <td>6字节</td>
        <td>4字节</td>
    </tr>
</table>
- ARP维护一个高速缓存，其中宝海经常访问或最近访问的机器的IP地址到物理地址的映射, 避免了重复ARP请求，提高了发送数据包的速度
![[测试网络.excalidraw]]
- ARP通信过程
  [[帧]]
![[ARP通信过程.excalidraw]]
  1. ARP请求是从以太网驱动程序发出
  2. 路由器也将收到以太网帧1，因为该[[帧]]是个广播帧