# Computer Network - Data Encapsulation

## Demonstration

> Udp as example

![data Encapsulation](/image/UDP_encapsulation.svg)

## Encapsulation process from top to bottom

1. application layer

- application data, such as [HTTP message](http-message.md)

2. transport layer

- [TCP header](tcp-message-header-sturture.md)
- application data

3. network layer

- [IP header](ipv4-datagram.md)
- [TCP](computer-network-tcp-segment-structure.md)/UDP header
- application data

4. data link layer

- Ethernet header
- IP header
- TCP/UDP header
- application data, called [frame](computer-network-frame.md)
