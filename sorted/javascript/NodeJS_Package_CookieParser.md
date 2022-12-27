# cookie-parser

#cookie #express

- parse cookies in `req`

code.js

```js
import cookieParser from 'cookie-parser'
import express from 'express'

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  console.log(req.cookies);
  res.cookie('sky', 'blue');
  res.cookie('name', 'value', { maxAge: 900000, httpOnly: true });
  res.send("Hello World");
})

app.listen(3000);
```