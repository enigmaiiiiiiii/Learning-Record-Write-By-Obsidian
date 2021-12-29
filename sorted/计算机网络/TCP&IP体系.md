# TCP/IP体系

[[TCP]] [[IP协议]]

![[TCP_IP传输流.excalidraw]]

## 数据是如何传输的
![[TCP_IP数据传输.excalidraw]]
1. 应用程序数据,  比如[[HTTP报文]]
2. TCP/UDP头部 + 应用程序数据 
   [[TCP报文头部结构]] [[运输层报文段]]
3. IP头部 + TCP/UDP头部 + 应用程序数据  
   [[IPv4数据报]]
4. 以太网头部 + IP头部 + TCP/UDP头部 + 应用程序数据
     [[帧]]