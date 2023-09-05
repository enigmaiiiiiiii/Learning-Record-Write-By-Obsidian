# NextJS - Features

> Next.js is a framework for building server-rendered React applications

* [pre-rendering](#pre-rendering)
* [**Allow Using Node.js Modules** In React Components](#**allow-using-node.js-modules**-in-react-components)
* [Another Data Fetching Function](#another-data-fetching-function)
* [SEO(Search Engine Optimization)](#seo(search-engine-optimization))
* [Fast Refresh](#fast-refresh)

## pre-rendering

- NextJS pre-rendering a page, **instead** of rendering a page all by **client side javascript**
- Can result in better performance and [SEO]
- Each HTML is associated with minimal JavaScript code
- Initial Load some HTML, before [Hydration](react-glossary.md#hydration)

2 forms **pre-rendering**

- [Server-side Rendering(SSR)](nextjs-rendering.md#server-side-rendering)
- [Client-side Rendering(CSR)](nextjs-rendering.md#client-side-rendering)

1 form of **static generation**

- [Static Site Generation(SSG)](nextjs-static-generation.md)

## **Allow Using Node.js Modules** In React Components

- Also known as **Data Fetching**

[best example](https://github.com/jherr/pokemon-next-three-ways)

[getStaticProps()](nextjs-datafetching-getstaticprops.md)

[getStaticPaths()](nextjs-datafetching-getstaticpaths.md)

[getServerSideProps()](nextjs-datafetching-getserversideprops.md)

## Another Data Fetching Function

[getInitialProps()](nextjs-datafetching-getinitialprops.md)

## SEO(Search Engine Optimization)

- search engine optimization

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

## Pre-loading



