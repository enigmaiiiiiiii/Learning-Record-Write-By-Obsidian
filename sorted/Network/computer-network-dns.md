# DNS

## What Is DNS

- DNS: Domain Name System
- Is a Service that translate [domain name](computer-network-domain-name.md) to [IP address](computer-network-ip-address.md)
- like a phonebook
- provides services
  - host aliasing
  - mail server aliasing
  - load distribution

## Why DNS

1. [routers](computer-network-router.md) deal with fixed-length [IP addresses](computer-network-ip-address.md)
2. users are better at remembering [domain names](computer-network-domain-name.md)

## What Happened When Typing A Domain Name In Browser



## DNS Query and Response Message

<table align="center">
	<tr align ="center">
		<td>16位标识</td>
		<td>16位标志</td>
	</tr>
	<tr align ="center">
		<td>16位问题个数</td>
		<td>16位应答资源记录个数</td>
	</tr>
	<tr align ="center">
		<td>16位授权资源记录数目</td>
		<td>16位额外的资源记录数目</td>
	</tr>
	<tr align ="center">
		<td colspan="2">查询问题, 长度可变</td>
	</tr>
	<tr align ="center">
		<td colspan="2">应答(资源记录数目可变，长度可变)</td>
	</tr>
	<tr align ="center">
		<td colspan="2">授权(资源记录数目可变，长度可变)</td>
	</tr>
	<tr align ="center">
		<td colspan="2">额外信息(资源记录数目可变，长度可变)</td>
	</tr>
</table>

- 16 bits

| QR    | opcode | AA    | TC   | RD   | RA   | zero  | rcode |
| ----- | ------ | ----- | ---- | ---- | ---- | ----- | ----- |
| 1 bit | 4 bits | 1 bit | 1bit | 1bit | 1bit | 3bits | 4bits |
