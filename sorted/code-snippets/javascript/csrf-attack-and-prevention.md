# Csrf Attack And Prevention

## host.js

- `http://localhost:3000`

```js
import express, { urlencoded } from "express"
import cookieParser from "cookie-parser"
import csurf from "csurf"

const csrfProtection = csurf({ cookie: { httpOnly: true } })
const app = express()

app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.get("/", csrfProtection, (req, res) => {
  //console.log(req.cookies)

  // imagine this next line where we set the cookie instead only happened if you had just provided a correct username and password etc...
  res.cookie("simpletest", "qwerty", { httpOnly: true })

  console.log(req.csrfToken());

  res.send(`
    <form action="/transfer-money" method="POST">
      <input type="text" name="amount" placeholder="amount">
      <input type="text" name="to" placeholder="Send to...">
      <input type="hidden" name="_csrf" value="${req.csrfToken()}">
      <button>Submit</button>
    </form>
  `)
})

app.post("/transfer-money", csrfProtection, (req, res) => {
  //console.log(req.cookies)
  if (req.cookies.simpletest === "qwerty") {
    res.send("Success!")
  } else {
    res.send("Failed!")
  }
})

app.use((err, req, res, next) => {
  console.error(err.code);
  if (err.code !== "EBADCSRFTOKEN") return next(err)

  res.status(403)
  res.send("CSRF attack detected!")
})

app.listen(3000)
```

## anotherhost.js

- `http://localhost:3001`

```js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`
    <h1>Bad Guy SIte Pretending To Be Good Site</h1>
    <form action="http://localhost:3000/transfer-money" method="POST">
      <input name="amount" type="hidden" value="99999" />
      <input name="to" type="hidden" value="Bad Guy"/>
      <button>Click If You Like Puppies</button>
    </form>
  `)
})

app.listen(3001);
```