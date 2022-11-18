# JWT

- JWT: JSON Web Token
- 作用: 保障数据的来源**可靠**, 验证数据是否被篡改


- 生成的jwt与服务器是绑定的
- 在**其它服务器**生成的jwt即使signature相同, 也是无效的

## jwt结构

- 分为三个部分, 典型的jwt格式: `xxxxx.yyyyy.zzzzz`分别代表: 
  - Header
  - Payload
  - Signature
- header和payload用base64编码
- signature用[签名算法]()编码, 算法由header中的`alg`字段指定
- 任何jwt的Header, Payload部分都可以被解析

以HS256算法为例

- 假设 以下token字符串内容

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### header

```json
{
    "alg": "HS256",
    "typ": "JWT"
}
```

- `alg`: 签名算法
- `typ`: token类型

### payload

- 称为有效负载, 包含claims
- claims是关于实体的语句, 包含三种类型: 
  - [x] Registered claims: 预定义字段, 比如
    - exp: 过期时间
    - sub: 主题
    - aud: 接收方
  - [ ] Public claims: 
  - [ ] Private claims: 

```json
{
    "exp": 1666111012,
    "sub": "1234567890",
    "name": "John Doe",
}
``` 

### verify signature

- 用于验证token是否被篡改

```
HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    your-256-bit-secret
)
```

- signature: 用于验证JWT的有效性, 完成数据**来源**验证
- your-256-bit-secret: ~~签名算法中的盐~~

## jwt编码


## 用途

- 授权: 用户每个请求都将包括jwt, 如单点登录
- 信息交换: jwt可以被认为是一个JSON对象, 可以验证内容又没有被篡改

## 如何使用

1. 客户端向**授权服务器**发送身份验证请求, 身份验证成功时, 服务器返回一个jwt 
2. 客户端将jwt保存在[本地存储](../javascript/JavaScript_BOM.md#localStorage)中, 每次请求都将其添加到请求头中
3. 用户想要访问受保护的资源时, 用户应发送带有Authorization字段的[请求头](./Http_Request_Message.md#请求头)

> jwt不应该包含太多信息，有些服务器会限制请求头大小在8kb内, 确实需要包含太多信息时, 可以选用[替代方案]
