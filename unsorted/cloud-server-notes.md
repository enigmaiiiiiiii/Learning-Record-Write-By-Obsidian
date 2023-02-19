# Cloud Server Notes

## tencent gateway

1. 腾讯云的所有公网接口统一由 Tencent Gateway(TGW)进行处理。腾讯云云服务器实例的公网网卡在统一接口层 TGW 上配置，云服务器无感知。所以，用户在云服务器中通过 ifconfig (Linux) 或 ipconfig (Windows) 命令查看网络接口信息时，只能查看到 内网 的信息。

## resolve tencent cloud server auto disconnect

- 找到sshd_config配置文件**

```shell
sudo vim /etc/ssh/sshd_config
```

- 在此文件中找到以下配置项：

```shell

#ClientAliveInterval 0
#ClientAliveCountMax 3

```

- 去掉注释，改成:

```shell
ClientAliveInterval 30 #服务端每隔多少秒向客户端发送一个心跳数据
ClientAliveCountMax 86400 #客户端多少次没有相应，服务器自动断掉连接
```

- 重启sshd服务,输入以下命令重启ssh配置：

```bash
service sshd restart
```
