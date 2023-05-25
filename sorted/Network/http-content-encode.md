# 实体和编码

- HTTP实体首部描述了HTTP报文内容
- HTTP/1.1版定义了10个基本首部字段
  - [Content-Tbype](http-content-type.md) : 实体对象类型
  - Content-Length: 实体编码后的长度
  - Content-Language: 与对象匹配的人类语言
  - Content-Encoding: 对象数据所做的任意变换(比如压缩)
  - Content-Location: 备用位置，请求时可通过它获得对象
  - Content-Range: 如果这是部分实体，这个首部说明踏实整体的哪个部分
  - Content-MD5: 实体主体内容的校验和
  - Last-Modified: 所传输内容在服务其上创建或最后修改的日期时间
  - Expires: 实体数据将要失效的日期时间
  - Allow: 该资源所允许的各种请求方法，如GET, HEAD
  - ETag: 该份文档特定实例的唯一验证码
  - Cache-Control: 之处应该如何缓存该文档

