# Computer Network - Reliable Transmission

## Three-way Handshake

- `TCP SYN` from Client to Server
- `TCP SYN/ACK` From Server to Client
- `TCP ACK` from server to Server

## Four-way Handwave

Start With A send disconnect request

```mermaid
sequenceDiagram
A ->> B: FIN:1
B ->> A: ACK
Note right of B: send receiving confirm packet
B ->> A: FIN:1
A ->> B: ACK
```

## Normal Case

- 每发送完一个[network-group](network-group.md)就停止发送，等待对方确认，在收到确认后再发送下一个
  - A发送完一个分组后，暂时保留已发送分组的副本
  - 分组和确认分组都必须进行编号
  - 超时计时器设置的重传时间应当比数据在分组传输的平均往返时间更长

```mermaid
sequenceDiagram
A ->> B: 发送分组M1
Note left of A:RTT 
B ->> A: 确认M1
A -) B: 继续发送分组M2
Note left of A:RTT 
B ->> A: 确认M2
```

## 异常情况

### 1. 不返回信息

```mermaid
sequenceDiagram
participant A 
participant B
A -x B: 发送有差错分组M1
B --> A: 丢弃有差错M1,不发送任何信息
Note left of A: 超时重传
A ->> B: 发送分组M1
B -->> A: 确认M1
```

### 2. B发送的的确认信息丢失

1. A重传
2. B丢弃重复的M1
3. 向A发出确认

```mermaid
sequenceDiagram
participant A 
participant B
A ->> B: 发送有差错分组M1
B --x A: 发送的确认信息丢失
Note left of A: 超时重传
A ->> B: 发送分组M1
B -->> A: 确认M1
A ->> B: 继续发送分组M2
```

### 3. B发送的确认信息迟到 

1. A重传
2. B丢弃重复的M1

## 连续ARQ协议

- 发送方维持一个发送窗口，窗口中的分组都可连续发送出去, 而不需要等待对方确认, 提高[信道利用率](信道利用率.md)
- 发送方每收到一个确认，就把发送窗口向前滑动一个分组位置
- 接收方不必逐个发送确认，只对收到的最后一个分组发送确认，表示当前分组和在这之前的分组都已正确收到

[超时重传](超时重传.md)