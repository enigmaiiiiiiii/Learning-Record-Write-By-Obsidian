# Filter

- 添加自定义Spring Security Filter

## JwtAuthenticationFilter 

- 用于验证[token](../../Network/Http_Token.md#JWT)
- 解析客户端请求报文中的携带的Token, 通常是在请求头中的Authorization字段中
- 抛出jwt相关异常
  - SignatureException
  - MalFormedJwtException
  - ExpiredJwtException
- 设置SecurityContextHolder
  - 生成认证Token
    - 认证对象 

```java
```