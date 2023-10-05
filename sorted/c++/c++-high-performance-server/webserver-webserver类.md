# webserver

- 创建客户端连接
- `Initsocket_()`
  - 绑定服务器地址，创建监听socket
  - 设置socket复用
  - 加入多路转接
- `Start()` 
  - 阻塞等待事件触发 
  - 根据监听事件完成任务分发
  - 客户端连接, 连接关闭, 读写文件描述符
- `onread_()`  
- `onwrite_()`
- `OnProcess()`
  - 将无可读内容的socket加入epoll中监听可读
  - 将处理完可写内容后，加入可写监听
