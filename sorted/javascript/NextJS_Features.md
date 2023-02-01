# Features

Next.js is a framework for building server-rendered React applications

- [pre-rendering](#pre-rendering)
- [Static Site Generation(SSG)](#static-site-generationssg)
- [Server-side Rendering(SSR)](#server-side-renderingssr)
- [Client-side Rendering(CSR)](#client-side-renderingcsr)
- [Data Fetching](#data-fetching)
- [SEO](#seo)
- [Fast Refresh](#fast-refresh)

## pre-rendering

- NestJS pre-rendering a page, **instead** of rendering a page all by **client side javascript**

> 而不是全部通过客户端javascript来渲染一个页面

- can result in better performance and [SEO]
- Each HTML is associated with minimal JavaScript code
- Initial Load some HTML, before Hydration

> hydration: process of **load JS** makes the page interactive that loaded by browser

two forms pre-rendering

[Server-side Rendering(SSR)](#server-side-renderingssr)
[Client-side Rendering(CSR)](#client-side-renderingcsr)

## Server-side Rendering(SSR)

[SSR](NextJS_Server_Side_Rendering.md)

## Client-side Rendering(CSR)

[CSR](NextJS_Client_Side_Rendering.md)

## Static Site Generation(SSG)

[SSG](NextJS_Static_Generation.md)

## Data Fetching

[getStaticProps()](NextJS_DataFetching_GetStaticProps.md)

[getStaticPaths()](NextJS_DataFetching_GetStaticPaths.md)

[getServerSideProps()](NextJS_DataFetching_GetServerSideProps.md)

## SEO(搜索引擎优化)

- Search engine optimization

## Fast Refresh

**Limitation**

1. the file you're editing might have other exports in addition to a React component

- that is to say, **file name** must be same as **component name**

welcome.jsx

```js
const Welcome = () => {
    return <h1>Welcome to Next.js!</h1>
}
export default welcome;
```

2. Anonymous arrow function like `export default () => <div>Hi</div>` is not supported