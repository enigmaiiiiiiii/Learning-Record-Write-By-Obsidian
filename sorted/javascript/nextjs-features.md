# Features

Next.js is a framework for building server-rendered React applications

- [pre-rendering](#pre-rendering)
- [Allow Using Node.js Modules In React Components](#allow-using-nodejs-modules-in-react-components)
- [SEO(搜索引擎优化)](#seo搜索引擎优化)
- [Fast Refresh](#fast-refresh)

## pre-rendering

- NestJS pre-rendering a page, **instead** of rendering a page all by **client side javascript**

> 而不是全部通过客户端javascript来渲染一个页面

- can result in better performance and [SEO]
- Each HTML is associated with minimal JavaScript code
- Initial Load some HTML, before Hydration

> hydration: process of **load JS** makes the page interactive that loaded by browser

two forms **pre-rendering**

[Server-side Rendering(SSR)](nextjs-server-side-rendering.md)

[Client-side Rendering(CSR)](nextjs-client-side-rendering.md)

one form of **static generation**

[Static Site Generation(SSG)](nextjs-static-generation.md)

## **Allow Using Node.js Modules** In React Components

- Also known as **Data Fetching**

[best example](https://github.com/jherr/pokemon-next-three-ways)

[getStaticProps()](nextjs-datafetching-getstaticprops.md)

[getStaticPaths()](nextjs-datafetching-getstaticpaths.md)

[getServerSideProps()](nextjs-datafetching-getserversideprops.md)

## Another Data Fetching Function

[getInitialProps()](nextjs-datafetching-getinitialprops.md)

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
