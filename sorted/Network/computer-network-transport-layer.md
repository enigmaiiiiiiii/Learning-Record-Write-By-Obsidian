# transport layer

## About transport layer

- function
  - extend the delivery service between two [computer-network-end-system](computer-network-end-system.md) in network layer to delivery service between two different application layer **process** in two different end system
- between [Network_Application_Layer](network-application-layer.md) and [network layer](computer-network-network-layer.md)
- mainly have 2 protocols: [TCP](network-tcp-protocol.md), [UDP](udp.md)
- translate message received from application layer process to group in transport layer, the group is called transport layer segment
- provide logical communication between **process** in different host
- [multiplexing] and [demultiplexing]

![Multiplexing_diagram.svg](/image/Multiplexing_diagram.svg.png)

- structure transport layer segment
  - source port number and destination port number
  - other header fields
  - application data(message)

## Glossary of transport layer

[TCP](network-tcp-protocol.md)

[UDP](udp.md)

