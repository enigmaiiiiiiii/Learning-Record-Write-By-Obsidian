# TCP协议(TCP Protocol)

[TCP（传输控制协议）_百度百科 ](https://baike.baidu.com/item/TCP/33012?fromtitle=TCP%E5%8D%8F%E8%AE%AE&fromid=8988699&fr=aladdin)

- 传输控制协议
- 为应用层提供可靠的、面向连接和基于流(stream)的服务。
  [[可靠传输工作原理]]
- 使用超时重传、数据确认的方式来确保数据包被正确地发送至目的端
- 是面向连接的[[运输层]]协议
  - 把连接作为最基本的抽象
  [[面向对象]]
- 每一条TCP只能由两个端点
  - 端点不是主机，不是主机的IP地址，不是应用进程，不是运输层的协议端口
  - 而是[[socket]]
  - `TCP连接::={$socket_1, socker_2} = {(IP_1:port_1), (IP_2:port_2)}`
- 提供[[全双工通信]]