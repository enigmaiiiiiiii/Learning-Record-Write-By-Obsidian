# jjwt

- [JWT](../Network/Http_Token.md#jwt)

## 引入依赖

```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.1</version>
</dependency>
```

## API

生成jwt

```java
String jwt = Jwts.builder()
    .setHeaderParam("alg", "HS256")
    .setHeaderParam("typ", "JWT")
    .setClaims(map)
    .setExpiration(expirationDate)
    .signWith(SignatureAlgorithm.HS256, secret)
    .compact();
```

- `setHeaderParam(String name, Object value)`: 设置header
- `setClaims(Map<String, Object> claims)`: 设置payload
  - 一般为要传输的数据
- `setExpiration(Date exp)`: 设置过期时间
- `signWith(SignaltureAlgorithm alg, String base64EncodeSecreKey)`: 设置签名算法和密钥

解析jwt

```java
```

## 异常

- `ExpiredJwtException`: 过期
- `MalformedJwtException`: jwt格式错误
  - 可能因为修改jwt字符串导致
