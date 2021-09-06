# IPv4数据报

> 每一行为一个长度, 即32位为一个长度
<table align="center">
	<tr align ="center">
		<td>4位<br>版本号</td>
		<td>4位<br>头部长度</td>
		<td colspan ="2">8位服务类型
			<br>(TOS)Type Of Service
		</td>
		<td colspan = "4">16位总长度(字节数)</td>
	</tr>
	<tr align="center">
		<td colspan = "4">16位标识</td>
		<td>3位<br>标志</td>
		<td colspan ="3">13位片偏移</td>
	</tr>
	<tr align="center">
		<td colspan = "2">8位生存时间<br>(TTL)</td>
		<td colspan = "2">8位生存协议</td>
		<td colspan ="4">16位头部校验和</td>
	</tr>
	<tr align="center">
		<td colspan = "8">32位源端IP地址</td>
	</tr>
	<tr align="center">
		<td colspan = "8">32位目的端IP地址</td>
	</tr>
	<tr align="center">
		<td colspan = "8">选项，最多40字节</td>
	</tr>
	<tr align="center">
		<td colspan = "8">数据</td>
	</tr>
</table>

- 4位版本号（version）指定IP协议的版本。对IPv4来说，其值是4。其他IPv4协议的扩展版本（如SIP协议和PIP协议），则具有不同的版本号（它们的头部结构也和图2-1不同）。
- 4位首部长度（header length）标识该IP头部有多少个32 bit字（4字节）,一般是[[运输层报文段]]开始的位置。因为4位最大能表示15，所以IP头部最长是60字节。
- 8位服务类型（Type Of Service，TOS）
  - 包括一个3位的优先权字段（现在已经被忽略）
  - 4位的TOS字段
    - 最小延时
    - 最大吞吐量
    - 最高可靠性
    - 最小费用
	- 应用程序根据实际需要设置
  - 1位保留字段（必须置0）
- 16位总长度是指IP数据报的总长度
  - 长度的单位是字节
  - 最大长度是65535($2^{16}-1$)字节
  - 数据报超过MTU限制会被分片传输
    [[数据链路层#封装成帧]]
 - 16位标识
   - 唯一标识主机发送的每一个数据报
   - 随机生成
   - 每发送一个数值+1
   - 同一数据的所有分片具有相同标识值
 - 3位标志
 - 13位分片位移
 - 8位生存时间
 - 8位协议
 - 16位头部校验和
 - 32位源端IP地址和目的端IP地址
 - 可选字段40字节
   - 记录路由
   - 时间戳
   - 松散源路由选择
   - 严格源路由选择
   
  