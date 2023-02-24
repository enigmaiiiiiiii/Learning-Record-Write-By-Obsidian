# Static Generation

## Introduction

- generated the **Web Page** at **build time**

> that means in production, the HTML page is already here

- **reused** on each request
- for `.js`, `.jsx`, `.ts`, `.tsx` files in `/pages` directory, assosiated with a route based on **file name**
- can be cached by a **CDN** for performance

## how to implement Static-site Generation

page **content** depend on external data: use [`getStaticProps`](nextjs-datafetching-getstaticprops.md)

```js
export async function getStaticProps(context) {
  return {
    props: {},
  }
}
```

page [**path**](nextjs-routes.md#dynamic-route) depend on external data: use [`getStaticPaths`](nextjs-datafetching-getstaticpaths.md)

- `getStaticPaths()` is required in static generate dynamic routes page

## when use static Generation

- a page can be pre-rendered ahead of a user's request
