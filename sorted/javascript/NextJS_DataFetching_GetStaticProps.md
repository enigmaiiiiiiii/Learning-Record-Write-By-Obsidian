# function getStaticProps()

- 页面的静态数据
- run during `next build`

## static Generation with external data

```js
export async function getStaticProps(context) {
  return {
    props: { /* props for your component */ }
  }
}
export default function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- `props` will be passed to the page component, 对于上面代码, `props` 会被传递给 `<Welcome/>` 组件

## when does `getStaticProps()` run?

- **always** run on **server-side**, **never** run on **client-side**
- always runs during `next build`
- runs in the background when using [`fallback: true`](NextJS_DataFetching_GetStaticPaths.md)
- is called before initial render when using `fallback: blocking`
- runs in the background when using [revalidate]()
- runs on-demand in the background when using [revalidate()]

dev and prod

- In development `getStaticProps()` runs on every request
- In production `getStaticProps()` runs at build time

