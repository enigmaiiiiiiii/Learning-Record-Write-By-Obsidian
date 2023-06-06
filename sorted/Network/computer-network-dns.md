# DNS

## What Is DNS

- Is a Service that translate [domain name](computer-network-domain-name.md) to [IP address](computer-network-ip-address.md)
- like a phonebook
- provides services
  - host aliasing
  - mail server aliasing
  - load distribution

## Why DNS

1. [routers](computer-network-router.md) deal with fixed-length [IP addresses](computer-network-ip-address.md)
2. users are better at remembering [domain names](computer-network-domain-name.md)

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

- 16位标志字段

<table align="center">
    <tr align="center">
        <td>QR</td>
        <td>opcode</td>
        <td>AA</td>
        <td>TC</td>
        <td>RD</td>
        <td>RA</td>
        <td>zero</td>
        <td>rcode</td>
    </tr>
    <tr align = "center">
        <td>1位</td>
        <td>4位</td>
        <td>1位</td>
        <td>1位</td>
        <td>1位</td>
        <td>1位</td>
        <td>3位</td>
        <td>4位</td>
    </tr>
</table>
