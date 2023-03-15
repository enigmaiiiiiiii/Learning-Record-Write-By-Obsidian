# Response

- [res.send()](#ressend)
- [res.sendFile()](#ressendfile)
- [res.cookie()](#rescookie)

## res.send()

## res.sendFile()

`res.sendFile(path[, options][, fn])`

- send a file
- response header `Content-Type` is set based on the filename's extension
- path must be **absolute** path to the file

## res.cookie()

- set cookies name to value

```js
res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true })
```
