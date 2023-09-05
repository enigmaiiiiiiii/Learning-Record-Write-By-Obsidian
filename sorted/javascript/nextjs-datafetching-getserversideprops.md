# Function getServerSideProps

* [Introduction](#introduction)
* [context parameter](#context-parameter)
* [return object](#return-object)
* [features](#features)
* [when to use](#when-to-use)

## Introduction

```js
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

## Context Parameter

`context` parameter have the following keys:

- `params`: if this page uses a [dynamic route](nextjs-dynamic-route.md), 

> page `[id].js` , then `params` will look like `{ id: ... }` .

- `req`: HTTP IncomingMessage object
- `res`: HTTP response object (server only)
- `query`: query string. e.g. `/blog?id=1`, then `query` will look like `{ id: 1}` .
- `preview`: preview mode
- `resolveUrl`: Original URL string

## Return Object

return an object with any **one of** the following keys:

`props`

- will be passed to the [page component](react-component-props.md) as props

`notFound`

- if `true`, then the page will be rendered as a 404 page

`redirect`

- ...

## Features

- fetch data **on each request**

> Versus: fetch data **at build time** for [getStaticProps](nextjs-datafetching-getstaticpaths.md)

- Time to first byte(TTFB) will be slower than [getStaticProps](nextjs-datafetching-getstaticprops.md)
  - Because it will make the server generate the calculation result every time a request occurs
  - And cannot be cached by [CDN](cdn.md)
- only can be exported from a [page](nextjs-terminology.md#pages)

## When To Use

- page data must be fetch at request time(etc. [request header](http-request-header.md) authorization or geo-location)

