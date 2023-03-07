# NextJS API

## next/router

[router object](nextjs-router.md)

## next/head

## next/script

- provide a optimally to load third-party scripts

```js
import Script from 'next/scrpt'
```

Application Script

- include the script in `pages/_app.js`
- a script for all routes


```js
import Script from 'next/script'
export default function MyApp({Component, pageProps}) {
  return (
    <>
      <Script src="https://www.google-analytics.com/analytics.js" strategy="lazyOnload"/>
      <Component {...pageProps}/>
    </>
  )
}
```

`<Script>` attribute

- `src`: the url of the script
- `strategy`
  - `beforeInteractive`: load the script before the page is interactive
  - `afterInteractive`: load the script after the page is interactive
  - `lazyOnload`: load the script after the page is interactive and the user is idle
  - `worker`: load the script as a web worker

## next/image

1. 必要属性

src

width

height

2. 可选属性

priority

- true: high priority, and lazy loading is automatically disabled

## next/link

