# 包

- 基本结构: 头部和数据

1. 应用层: 应用程序数据,  比如[HTTP报文](http报文.md)
2. 运输层: [TCP头部](tcp报文头部结构.md) + 应用程序数据 
3. 网络层：[IP头部](ipv4数据报.md) + TCP/UDP头部 + 应用程序数据  
4. 数据链路层: 以太网头部 + IP头部 + TCP/UDP头部 + 应用程序数据, 叫做[帧](帧.md)
