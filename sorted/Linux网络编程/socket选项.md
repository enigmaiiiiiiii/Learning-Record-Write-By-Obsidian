# socket选项

```c++
#include <sys/socket.h>
int getsockopt(int sockfd, int level, int option_name, void *option_value, socklen_t* restric option_len);
int setsockopt(int sockfd, int level, int option_name, void *option_value, socklen_t* restric option_len);
```

- 对于getsockopt和setsockopt两个函数, 成功返回0， 失败返回-1， 并设置errno

<table>
    <tr>
        <td>level</td>
        <td>option name</td>
        <td>数据类型</td>
        <td>说明</td>
    </tr>
    <tr>
        <td rowspan = 14>SOL_SOCKET<br>通用socket选项，与协议无关</td>
        <td>SO_DEBUG</td>
        <td>int</td>
        <td>打开调试类型</td>
    </tr>
    <tr>
        <td><font color="red">SO_REUSEADDR</font></td>
        <td>int</td>
        <td>重用本地地址</td>
    </tr>
    <tr>
        <td>SO_TYPE</td>
        <td>int</td>
        <td>获取socket类型</td>
    </tr>
    <tr>
        <td>SO_ERROR</td>
        <td>int</td>
        <td>获取并清除socket错误状态</td>
    </tr>
    <tr>
        <td>SO_DONTROUTE</td>
        <td>int</td>
        <td></td>
    </tr>
    <tr>
        <td><font color="red">SO_RCVBUF</font></td>
        <td>int</td>
        <td>TCP接收缓冲区大小</td>
    </tr>
    <tr>
        <td><font color="red">SO_SNDBUF</font></td>
        <td>int</td>
        <td>TCP发送缓冲区大小</td>
    </tr>
    <tr>
        <td>SO_KEEPALIVE</td>
        <td>int</td>
        <td></td>
    </tr>
    <tr>
        <td>SO_OOBINLINE</td>
        <td>int</td>
        <td>接收到的带外数据将留存在普通数据的输入队列中</td>
    </tr>
    <tr>
        <td><font color="red">SO_LINGER</font></td>
        <td>linger</td>
        <td>若有数据待发送则延迟关闭</td>
    </tr>
    <tr>
        <td><font color="red">SO_RCVLOWAT</font></td>
        <td>int</td>
        <td>TCP接受缓存区低水位标记</td>
    </tr>
    <tr>
        <td><font color="red">SO_SNDLOWAT</font></td>
        <td>int</td>
        <td>TCP发送缓存区低水位标记</td>
    </tr>
    <tr>
        <td>SO_RCVTIMEO</td>
        <td>timeval</td>
        <td>接受数据超时</td>
    </tr>
    <tr>
        <td>SO_SNDTIMEO</td>
        <td>timeval</td>
        <td>发送数据超时</td>
    </tr>
    <tr>
        <td rowspan = 2>IPPROTO_IP<br>IPv4选项</td>
        <td>IP_TOS</td>
        <td>int</td>
        <td>服务类型</td>
    </tr>
    <tr>
        <td>IP_TTL</td>
        <td>int</td>
        <td>存活时间</td>
    </tr>
    <tr>
        <td rowspan = 4>IPPROTO_IPV6<br>IPv6选项</td>
        <td>IP_NEXTHOP</td>
        <td>sockaddr_in6</td>
        <td>下一跳IP地址</td>
    </tr>
    <tr>
        <td>IP_RECVPKTINFO</td>
        <td>int</td>
        <td>接受分组信息</td>
    </tr>
    <tr>
        <td>IP_DONTFRAG</td>
        <td>int</td>
        <td>禁止分片</td>
    </tr>
    <tr>
        <td>IP_RECVTCLASS</td>
        <td>int</td>
        <td>接受通信类型</td>
    </tr>
    <tr>
        <td rowspan = 2>IPPROTO_TCP<br>TCP选项</td>
        <td>TCP_MAXSEG</td>
        <td>int</td>
        <td>TCP最大报文段大小</td>
    </tr>
    <tr>
        <td>TCP_NODELAY</td>
        <td>int</td>
        <td>进制Nagle算法</td>
    </tr>
</table>