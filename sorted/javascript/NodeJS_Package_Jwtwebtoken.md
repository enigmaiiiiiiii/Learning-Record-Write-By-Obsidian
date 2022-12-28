# npm package jwtwebtoken

## generate token

`jwt.sign(payload, secretOrPrivateKey, [options, callback])`

- 如果提供了 callback 函数, 则会以异步方式执行
- 否则会以同步方式执行, 并返回 token 字符串

Synchronous 同步

```js
jwt.sign({
  id: "1",
  content: "hello world"
}, "secret key");
```

Asynchronously 异步

```js
jwt.sign(
  { foo: 'bar' },
  privateKey,
  {algorithm: 'RS256'},
  function(err, token) {
    console.log(token);
  }
)
```

## verify token

`jwt.verify(token, secretOrPublicKey, [options, callback])`

- 如果提供了 `callback` 函数, 则会以异步方式执行
- 否则会以同步方式执行, 返回[payload](/sorted/Network/Http_Token_JWT.md#payload)

params

- token: JsonWebToken string
- secretOrPublicKey: 可以是一个string, buffer, keyObject
  - 其它库使用Base64编码的secret, 这种情况需要使用[`Buffer.from(secret, 'base64')`](NodeJS_API.md#buffer) 作为 第二个参数
- options

options:

- algorithms
  - secret: `['HS256', 'HS384', 'HS512']` 
  - rsa
  - ec
  - default

[verify token generate by jjwt](/sorted/Code-Snippet/javascript/verify-token-generate-by-jjwt.md)

## error

- TokenExpiredError
- JsonWebTokenError
  - invalid signature
  - jwtmalformed: jwt格式错误
  - jwt signature is required
  - jwt audience invalid. expected: `OPTION AUDIENCE`
- NotBeforeError: 当前时间早于声明时间

