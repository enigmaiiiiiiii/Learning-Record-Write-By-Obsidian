# DNS

- 为什么使用DNS
  1. [[路由器]]处理定长的IP地址 [[IP协议]]
  2. 用户更擅长记住主机名称 [[http_URL]]
- 所以DNS(Domain Name System, 域名系统)是一种域名到IP地址转换的目录服务
  1. 一个由分层的DNS服务器实现的分布式数据库
  2. 一个使得主机能够查询分布式数据库的[[应用层]]协议
- 其他重要服务
  - 主机别名
  - 邮件服务器别名
  - 负载分配

## DNS查询和应答报文

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
  
