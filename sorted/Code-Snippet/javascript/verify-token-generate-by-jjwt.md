# verify token generate by jjwt

## generate token

by [jjwt](Java_jjwt.md)

depend on [springMVC]

application.yml

```yml
jwt.secret: hello
```

Sample.java

```java
@RestController
public class Sample {

    @Value("${jwt.secret}")
    private String secret;

    @GetMapping("/jwt")
    public String sample() {
        return Jwts.builder()
                   .setSubject("user")
                   .claim("name", "goose")
                   .claim("age", 18)
                   .signWith(SignaltureAlgorithm.HS512, secret)
                   .compact();
    }
}
```

## verify by nodejs

verifyscript.js

```js
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';

const token = await fetch("http://localhost:8080/jwt").then(res => res.text());
const decoded = jwt.verify(token, Buffer.from('hello', 'base64', {algorithms: ['HS512']}));
console.log(decoded);
// { sub: 'user', name: 'goose', age: 18 }
```