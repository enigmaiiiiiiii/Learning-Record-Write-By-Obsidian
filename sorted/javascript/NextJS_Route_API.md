# Routes API

- create an API endpoint inside Next.js APP

## Create Route API

talk about create a `http://localhost:3000/api/hello` in Next.js APP

pages/api/hello.js

```js
export default function handler(req, res) {
  res.status(200).json({name: 'john doe'});
}
```

- req: request, [http.IncomingMessage]
- res: response, [http.ServerResponse]
