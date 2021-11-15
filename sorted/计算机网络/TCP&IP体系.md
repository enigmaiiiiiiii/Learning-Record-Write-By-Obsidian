# TCP/IP体系

[[TCP]] [[IP协议]]


```mermaid
flowchart TB
subgraph A
A1["应用层(Application Layer)"]-->B1["运输层(Transport Layer)"]
B1 --> C1["网络层(Network Layer)"]
C1 --> D1["数据链路层(Link Layer)"] 
D1 --> E1["物理层(Physical Layer)"]
end
subgraph B
direction TB
E2[物理层] --> D2[数据链路层]
D2 --> C2[网络层]
C2 --> B2[运输层]
B2 --> A2[应用层]
end
E1 --> E2
```


- 数据是如何传输的
  - 应用程序数据,  比如[[HTTP报文]]
  - TCP/UDP头部 + 应用程序数据 
     [[TCP报文头部结构]] [[运输层报文段]]
  - IP头部 + TCP/UDP头部 + 应用程序数据  
     [[IPv4数据报]]
  - 以太网头部 + IP头部 + TCP/UDP头部 + 应用程序数据
     [[帧]]