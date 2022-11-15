# Cookie

![cookie.svg](Cookie.svg)

- 保存在**客户端**中
- 只保存字符串类型数据
- 单个cookie大小限制为4KB

## 作用

- 服务器识别用户身份

## 会话cookie和持久cookie

- 会话cookie
  - 一种临时cookie
  - 退出浏览器时失效
- 持久cookie
  - 一种长期有效的cookie
  - 通过设置过期时间来实现
- 会话cookie和持久cookie的过期时间唯一区别
  - 会话cookie
    - 设置`Max-Age`为0
    - 设置`Expires`为过去的时间来实现
  - 持久cookie
    - 设置`Max-Age`为正数
    - 设置`Expires`为未来的时间

## 工作原理

- 用户首次访问服务器时，服务器会在响应报文中设置一个cookie, 通过Set-Cookie[首部字段](Http_Response_Message.md)来设置
- 浏览器会将cookie保存在本地文件

