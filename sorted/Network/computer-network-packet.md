# Computer Network - Packet

- basic structure: header + data

1. application layer: application data, such as [HTTP message](http-message.md)
2. transport layer: [TCP header](tcp-message-header-sturture.md) + application data
3. network layer: [IP header](ipv4数据报.md) + TCP/UDP header + application data
4. data link layer: Ethernet header + IP header + TCP/UDP header + application data, called [frame](帧.md)



