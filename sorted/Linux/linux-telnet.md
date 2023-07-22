# telnet

## What is this

- linux中用来远程联机服务器的软件: `telnet 主机名`
- 可以连接[port](network-port.md): `telnet localhost 110`
- 使用明码传送，可以被监听

## Example

type following command

```shell
telnet horstmann.com 80
```

then type following text

```
GET / HTTP/1.1
Host: horstmann.com
blank line
```
