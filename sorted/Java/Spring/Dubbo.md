# Dubbo

- 从[微服务](/unsorted/micro-service.md)注册中心发现服务, 并调用
- [RPC](/sorted/network/network-rpc.md)框架
-   开源分布式服务框架
-   支持的协议
    -   dubbo 协议
    -   rmi 协议
    -   hessian 协议
    -   http 协议
    -   webservice 协议
    -   ...
- 支持的序列化协议
    -   hessian2
    -   java
    -   json
    -   kryo
    -   protobuf
    -   ...
- 支持协议的特征
  - 采用NIO单一长连接
  - 优秀的并发性能
  - 处理大型文件能力差
- 支持的注册中心
  - nacos
  - ...
- 调用微服务必须在同一注册中心
- 支持负载均衡(LoadBalance)
  - 随机: 按权重设置随机概率
  - 轮询:
