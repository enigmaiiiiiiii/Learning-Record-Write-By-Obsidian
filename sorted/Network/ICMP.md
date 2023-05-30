# ICMP因特网控制报文协议

- 差错报告，比如当路由器找不到一条HTTP请求中所指定的主机路径，该路由器就会生成一条ICMP报文并向发出请求[computer-network-end-system](computer-network-end-system.md)发送
- 通常被认为是IP的一部分
- 包含一个类型字段和一个编码字段
  - 包含引起该ICMP报文首次生成[IP数据报](ipv4数据报.md)的首部和前8个字节以便发送方确定引发该差错的数据报
