# Function getStaticProps()

* [Feature](#feature)
* [take a look](#take-a-look)
* [when does `getStaticProps()` run?](#when-does-`getstaticprops()`-run?)
* [context parameters](#context-parameters)
* [Return Object](#return-object)
* [Where to use](#where-to-use)

## Feature

- Use to generate static content of a page
- Run during `next build`
- When page generated, props data for component is already there

contrast with `useEffect()`

- use `useEffect()` to get data when page is rendered
- for `component.js`

```js
export default function Welcome(props) {
  let data;
  useEffect(() => {
    data = await fetch('https://.../posts');
  }, []);
  return <h1>Hello, {props.name}</h1>;
}
```

## Take A Look

static Generation with external data

```js
export async function getStaticProps(context) {
  const res = await fetch('https://.../posts');
  const posts = await res.json();
  return {
    props: { val }
  }
}
export default function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- `props` will be passed to the page component. for the code above, props will be passed to `<Welcome/>` component
- parameter [context](#context-parameters) introduction

## When Does `getStaticProps()` run?

- **always** run on [**server-side**](nextjs-rendering.md#server-side-rendering), **never** run on [**client-side**](nextjs-rendering.md#client-side-rendering)
- always runs during `next build`
- runs in the background when using [`fallback: true`](nextjs-datafetching-getstaticpaths.md)
- is called before initial render when using `fallback: blocking`
- runs in the background when using [revalidate]()
- runs on-demand in the background when using [revalidate()]
- **In development** will be called on every request

dev and prod

- In development `getStaticProps()` runs on **every request**
- In production `getStaticProps()` runs at **build time**

## Context Parameters

`context` Object with following keys:

- params: [**dynamic routes**](nextjs-dynamic-route.md) parameters, `page/[id].js` 中的 `id`
- preview: `true` if the page is in preview mode
- previewData:
- locale
- locales
- defaultLocale

## Return Object

return an object may containing following keys

- `props`: pass to page component as [props](react-component-props.md)
- `revalidate`: amount of seconds re-generate the page
- `notFound`: allow page to return a 404 status
  - use case: user-generated content removed by its author(but data may be still store in somewhere)
- `redirect`:

## Where To Use

- only can be exported from a [page](nextjs-terminology.md#pages)
- needs to have all the data **before** the page is **render**

