# Computer Network - UDP Protocol

## Feature

- lightweight
- not ordered
- unreliable
- no congestion control
- broadcasts

> for example, internet phone application
> tolerate certain loss, require minimum speed, so usually run on UDP, thus avoid TCP's congestion control mechanism and packet overhead

- the process of encapsulating the message is similar to the process of encapsulating the TCP segment
  - the difference is that **no copy of the application layer data is kept**

## UDP datagram

## udp socket programming

[UDP Socket programming](udp-socket-programming.md)