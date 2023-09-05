# nextjs config file

* [add Environment Variables](#add-environment-variables)
* [basePath](#basepath)
* [custom header](#custom-header)

## add Environment Variables

## basePath

- default `''`

config path to `/docs`

```js
module.exports = {
  basePath: '/docs'
}
```

react component

```js
export default function HoemPage() {
  return {
    <>
      <Link href="/about">docs</Link>
    <>
  }
}
```

Output html

```html
<a href="/docs/about">docs</a>
```

## custom header

```js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/hello',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value'
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value'
          }
        ]
      }
    ]
  }
}
```

- when request `/api/hello`, the response header will be

```sh
HTTP/1.1 200 OK
x-custom-header: my custom header value
x-another-custom-header: my other custom header value
...
