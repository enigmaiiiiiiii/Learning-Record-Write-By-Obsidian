# NextJS - Custom APP

## override the default App component

create `pages/_app.js`

```js
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

- `Component`; represent current page, which means Component changes as the page changes
- `pageProps`: data that will be **preloaded** for the page
  - **preloaded** by data fetching methods

## What For Custom App

- when page changes, preserve layout
- inject additional data into pages
- Add global CSS
