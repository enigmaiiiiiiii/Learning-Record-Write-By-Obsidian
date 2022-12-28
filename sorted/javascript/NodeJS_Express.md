# Express

- frameworks built on Express
  - Feathers
  - Nestjs

## Get Started

```js
import express from 'express';
const app = express();
const post = 3000;
app.get('/', (req, res) ={
  res.send("Hello World");
})
app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
})
// ...
```

## serving static files in Express

- `express.static('public')`

```js
app.use(express.static('public'))
```

## Express API

[ExpressAPI](NodeJS_Express_API.md)

## middleware

[csurf](NodeJS_Package_Csurf.md)

[cookie-parser](NodeJS_Package_CookieParser.md)

[express-session](NodeJS_Package_ExpressSession.md)

[jwtwebtoken](NodeJS_Package_Jwtwebtoken.md)