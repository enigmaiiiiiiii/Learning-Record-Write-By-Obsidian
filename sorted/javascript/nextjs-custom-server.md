# Nextjs Custom Server

## what is this

- default nextjs includes its own server with next start

> custom server cannot be deployed on Vercel
> and will remove import performance optimizations

## when to use

- when integrated router of nextjs is not enough

## create custom server

`server.js`

```js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.Node_Env !== 'production';
const hostname = 'localhost'
const port = '3000'
const app = next({ dev, hostname, port })

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parseUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } slse {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal serer error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(prot, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
```

## Disabling File-system Routing

prevents routing based on files in pages

next.config.js

```js
module.exports = {
  useFileSystemPublicRoutes: false,
}
```


