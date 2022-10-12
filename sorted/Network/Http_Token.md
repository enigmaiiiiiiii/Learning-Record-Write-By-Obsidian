# Token

## 什么是Token

## JWT

- JWT: JSON Web Token

以HS256算法为例

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



