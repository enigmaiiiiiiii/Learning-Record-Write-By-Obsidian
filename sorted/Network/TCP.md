# TCP协议(TCP Protocol)

[TCP（传输控制协议）_百度百科 ](https://baike.baidu.com/item/TCP/33012?fromtitle=TCP%E5%8D%8F%E8%AE%AE&fromid=8988699&fr=aladdin)

- 传输控制协议
- [[运输层]]协议
- 在不可靠的端到端的网络层([[IP协议]]之上实现**可靠数据传输**
- 每一条TCP只能由两个端点
- `TCP连接::={$socket_1, socket_2} = {(IP_1:port_1), (IP_2:port_2)}`
- TCP把数据看成一个无结构的、有序的字节流
- 提供[[全双工通信]]

[[TCP报文头部结构]]

[[TCP报文段封装过程]]

[[TCP状态转移]]

[[可靠传输工作原理]]

[[拥塞控制]]

[[半关闭状态]]

[[TCP套接字编程]]
