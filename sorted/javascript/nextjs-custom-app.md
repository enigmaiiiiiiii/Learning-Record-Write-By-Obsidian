# Custom APP

## override the default App component

create `pages/_app.js`

```js
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

- component: 代表当前页面, 也就是说Component随页面变化
- pageProps: 将要加载的页面的数据, 或者页面需要的数据会**预加载**到pageProps中
  - **preloaded** by data fetching methods

## custom app 可以用来做什么

- 在页面变化时保持页面布局
- inject additional data into pages
- Add global CSS
