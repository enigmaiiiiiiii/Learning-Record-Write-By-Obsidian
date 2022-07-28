# UDP

- 轻量级运输协议
- 是无连接的
- 提供的是不可靠的数据传送服务
- 比如因特网电话应用，容忍一定的丢失，要求最小速率，所以通常运行在UDP上，从而避免[[TCP]]的拥塞控制机制和分组开销
- 报文封装过程与[[TCP报文段封装过程]]类似, 区别之处**不会为应用层数据保存副本**

[[UDP套接字编程]]