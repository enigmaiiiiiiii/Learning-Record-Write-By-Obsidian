# TCP状态转移

- LISTEN: 被动等待客户连接状态
- CLOSED: 
- SYN_RCVD: 
- ESTABLISHED: 连接双方能够进行双向数据传输的状态
- SYN_SENT: 
- CLOSE_WAIT: 客户端主动关闭连接, 服务器返回ACK报文进入CLOSE_WAIT,
- LAST_ACK:等到客户端对结束报文段的最后一次确认，一旦确认完成，连接彻底关闭

## 常规流程

> 实线表示服务器，虚线表示客户端

```mermaid
flowchart TD
A([CLOSED])
B([LISTEN])
C([SYN_SENT])
D([SYN_RECV])
E([ESTABLISHED])
F([CLOSE_WAIT])
G([LAST_ACK])
H([FIN_WAIT_1])
I([FIN_WAIT_2])
J([TIME_WAIT])
A -.调用listen进入LISTEN.-> B
A --调用connect函数,发送SYN j--> C
B -.收到SYN j,响应ACK j+1,SYN k.->D
D -.收到ACK k+1,accept函数返回socket.-> E
E -.服务器收到客户端的FIN x,响应ACK x+1.-> F
F -.隐式调用close函数,发送FIN y.-> G
G -.收到FIN y+1, TCP连接彻底关闭.-> A
C --收到ACK j+1,SYN k,ACK k+1--> E
E --调用close函数,发送FIN x--> H
H --收到ACK x+1--> I
I --收到FIN y,响应ACK y+1--> J
J --> A
```


```mermaid
sequenceDiagram
server ->> client:SYN请求建立连接
client ->> server:SYN请求建立连接 ACK确认
server ->> client:ACK确认
server ->> client:FIN关闭通知
client ->> server:ACK确认
client ->> server:FIN通知关闭 ACK确认
server ->> client:ACK确认
```