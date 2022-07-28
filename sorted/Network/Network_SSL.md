# SSL

- HTTP协议通信过程是未经加密的明文， 为了解决该问题，再http上再加入假名处理和认证
- HTTP + 通信加密 + 证书 + 完整性保护 = HTTPS
- 平时HTTP直接和TCP通信，使用SSL后，变成先和SSL通信，SSL再和TCP通信

## 密钥加密方式

- 共享密钥加密方式,  密钥被攻击者获得，密钥就失去了意义, 在互联网上传输密钥不安全
- 公开密钥加密方式：使用一对非对称密钥，一把叫私有密钥，一把叫公开密钥
  - 私有密钥只有自己知道，公开密钥可以随意发布 
  - 密文使用公开密钥, 接收方使用私有密钥解密
- 公开密钥加密方式仍然存在问题，公开密钥可能被攻击者替换， 为了解决该问题,可以使用数字证书认证机构和其相关机关办法的公开密钥证书 
- 数字整数认证机构处于客户端和服务器之间, 对公开密钥做数字签名

## https通信步骤

1. 客户端发送Client Hello报文开始SSL通信，报文中包含客户端支持的SSL的指定版本、加密组件列表
2. 服务器可进行SSL通信时，会以Server Hello报文作为应答
3. 服务器发送Certificate报文。报文种包含公开密钥证书
4. 服务器发送Server Hello Done报文通知客户端, 最初阶段的SSL握手部分结束
5. SSL第一次握手结束之后，客户端以Client Key Exchange报文作为回应
6. 客户端接着发送Change Cipher Spec报文, 提示服务器此后通信采用Pre-mastersecret密钥加密
7. 客户端发送Finished报文
8. 服务器同样发送Change Cipher Spec报文
9. 服务器发送Finished报文
10. 服务器和客户端的Finished报文交换完毕之后，SSL链接就算建立完成, 通信收到ssl保护
11. 应用层协议通信，即发送http响应
12. 最后由客户端断开连接, 断开连接时发送close_notify报文