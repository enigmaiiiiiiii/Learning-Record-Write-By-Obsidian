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

`props`

- will be passed to the [page component](react-component-props.md) as props

`context` parameter have the following keys:

- `params`: if this page uses a [dynamic route](nextjs-dynamic-route.md), 

> page `[id].js` , then `params` will look like `{ id: ... }` .

## features

- fetch data **on each request**

> fetch data **at build time** for [getStaticProps](nextjs-datafetching-getstaticpaths.md)

- Time to first byte(TTFB) will be slower than [getStaticProps](nextjs-datafetching-getstaticprops.md)
  - 因为它会在每次请求发生时使 server 生成计算结果
  - 并且不能被CDN缓存
- only can be exported from a [page](nextjs-terminology.md#pages)

## when to use

- page data must be fetch at request time(比如: 请求头的authorization or geo-location)
