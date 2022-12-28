# jjwt

- java [JWT](../Network/Http_Token.md#jwt)

## 引入依赖

```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.1</version>
</dependency>
```

## signatures

- signatures string is encoded by base64

## API

[API](Java_JJWT_API.md)

## 异常

- `ExpiredJwtException`: 过期
- `MalformedJwtException`: jwt格式错误
  - 可能因为修改jwt字符串导致
- `SingnatureExceptoin`: 签名错误
  - 可能因为修改jwt字符串导致
