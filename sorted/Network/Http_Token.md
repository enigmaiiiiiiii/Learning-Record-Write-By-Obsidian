# Token

## 什么是Token

- 用来保障数据的来源**可靠性**
- 不是用来保障数据的**安全性**

## JWT

- JWT: JSON Web Token

以HS256算法为例

- 假设以下token字符串内容

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

header

```json
{
    "alg": "HS256",
    "typ": "JWT"
}
```
payload

```json
{
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
}
```
verify signature

```java
HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    your-256-bit-secret
)
```

- header: 用于描述JWT的元数据
  - `alg`: 签名算法
  - `typ`: 类型
- payload: 用于存放实际需要传输的数据
- signature: 用于验证JWT的有效性, 完成数据来源验证
- 任何jwt可以解析Header, Payload部分



