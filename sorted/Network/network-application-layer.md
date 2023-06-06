# 应用层

- 应用层协议定义了运行在不同[computer-network-end-system](computer-network-end-system.md)上的应用程序[进程](进程.md)如何相互传递报文
  - 交换的报文类型，例如请求报文和响应报文
  - 各种报文类型的语法，如报文中的各个字段及这些字段是如何描述的
  - 字段的语义,字段中信息的含义
  - 确定一个进程合适以及如何发送报文，对报文进行响应的规则
- [http](computer-network-http.md)协议(web文档请求和传送)
- SMTP协议(电子邮件), [FTP](computer-network-ftp.md)(文件传送), [DNS](dns.md)协议
- 应用程序要求可以分为四类
  - 可靠数据传输
  - 吞吐量
  - 定时
  - 安全性
- 应用程序对[运输层](network-transport-layer.md)的控制仅限于:
  - 选择运输层协议
  - 设定几个运输层参数
  
[Web](web.md)
  
[电子邮件](电子邮件.md)
  
[DNS](dns.md)