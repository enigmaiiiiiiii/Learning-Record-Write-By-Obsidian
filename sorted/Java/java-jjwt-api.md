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

- `setHeaderParam(String name, Object value)`: set [header part](web-dev-token-jwt.md#header) of jwt
- `setClaims(Map<String, Object> claims)`: set [payload](web-dev-token-jwt.md#payload) of jwt
  - generally, the data to be transmitted
- `setExpiration(Date exp)`: set expiration time of jwt
- `signWith(SignaltureAlgorithm alg, String base64EncodeSecreKey)`: set signature algorithm and secret key

## Decode jwt

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

Claims对象

- `get(String key)`: 获取payload中的数据
