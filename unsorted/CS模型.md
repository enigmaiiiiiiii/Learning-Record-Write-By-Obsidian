# C/S模型

[[TCP状态转移]]

- 在TCP/IP协议中并没用客户端和服务器的概念
- C表示Client
- S表示Server
- 首先创建一个监听[[socket]], 服务器(Server)切换LISTEN状态
- bind函数
- listen函数
- IO模型来监听客户请求这一异步事件
- select系统
- accept函数
- fork系统
- send
- recv
- close() 