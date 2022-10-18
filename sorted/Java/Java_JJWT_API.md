# API

## 生成jwt字符串

**创建io.jsonwebtoken.Claims对象**

- 用于存储JWT的payload部分

```java
Map<String, Object> claims = new HashMap<>();
claims.put("object_key", object);  // object可以是任意类型
```



```java
String jwt = Jwts.builder()
    .setHeaderParam("alg", "HS256")
    .setHeaderParam("typ", "JWT")
    .setClaims(map)
    .setExpiration(expirationDate)
    .signWith(SignatureAlgorithm.HS256, secret)
    .compact();
```

- `setHeaderParam(String name, Object value)`: 设置[header](../Network/Http_Token.md#jwt)部分
- `setClaims(Map<String, Object> claims)`: 设置payload
  - 一般为要传输的数据
- `setExpiration(Date exp)`: 设置过期时间
- `signWith(SignaltureAlgorithm alg, String base64EncodeSecreKey)`: 设置签名算法和密钥

## 解析jwt


```java
Claims claims = Jwts.parser()
    .setSigningKey(secret)
    .parseClaimsJws(jwt)
    .getBody();
```

- `setSigningKey(String arg0)`: 设置密钥, 以何种密钥解析
- `Jws<Claims> parseClaimsJws(String jwt)`: 解析字符串
  - 参数jwt: 被解析的字符串
  - 返回`Jws<Claims>`