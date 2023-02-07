# Function getStaticProps()

- [feature](#feature)
- [static Generation with external data](#static-generation-with-external-data)
- [when does `getStaticProps()` run?](#when-does-getstaticprops-run)
- [](#)

## feature

- 页面的静态数据
- run during `next build`

## take a look

static Generation with external data

```js
export async function getStaticProps(context) {
  const res = await fetch('https://.../posts');
  const posts = await res.json();
  return {
    props: { props }
  }
}
export default function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- `props` will be passed to the page component, 对于上面代码, `props` 会被传递给 `<Welcome/>` 组件
- parameter [context](#parameters) introduction

## when does `getStaticProps()` run?

- **always** run on **server-side**, **never** run on **client-side**
- always runs during `next build`
- runs in the background when using [`fallback: true`](nextjs-datafetching-getstaticpaths.md)
- is called before initial render when using `fallback: blocking`
- runs in the background when using [revalidate]()
- runs on-demand in the background when using [revalidate()]

dev and prod

- In development `getStaticProps()` runs on every request
- In production `getStaticProps()` runs at build time

## parameters

`context` Object with following keys:

- params: dynamic routes parameters, `page/[id].js` 中的 `id`
- preview: `true` if the page is in preview mode
- previewData
- locale
- locales
- defaultLocale

## return values

- `props`: pass to page component as [props](react-component-props.md)
- `revalidate`: amount of seconds re-generate the page
