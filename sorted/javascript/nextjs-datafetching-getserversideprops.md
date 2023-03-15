# Function getServerSideProps

- [Introduction](#introduction)
- [features](#features)
- [when to use](#when-to-use)

## Introduction

```js
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

## context parameter

`context` parameter have the following keys:

- `params`: if this page uses a [dynamic route](nextjs-dynamic-route.md), 

> page `[id].js` , then `params` will look like `{ id: ... }` .

- `req`: HTTP IncomingMessage object
- `res`: HTTP response object (server only)
- `query`: query string. e.g. `/blog?id=1`, then `query` will look like `{ id: 1}` .
- `preview`: preview mode
- `resolveUrl`: Original URL string


## return object

return an object with any **one of** the following keys:

`props`

- will be passed to the [page component](react-component-props.md) as props

`notFound`

- if `true`, then the page will be rendered as a 404 page

`redirect`

- 

## features

- fetch data **on each request**

> fetch data **at build time** for [getStaticProps](nextjs-datafetching-getstaticpaths.md)

- Time to first byte(TTFB) will be slower than [getStaticProps](nextjs-datafetching-getstaticprops.md)
  - 因为它会在每次请求发生时使 server 生成计算结果
  - 并且不能被CDN缓存
- only can be exported from a [page](nextjs-terminology.md#pages)

## when to use

- page data must be fetch at request time(比如: 请求头的authorization or geo-location)
