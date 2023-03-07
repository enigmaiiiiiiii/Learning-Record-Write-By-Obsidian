# parse routes

- [what is this](#what-is-this)
- [get router object](#get-router-object)
- [router properties](#router-properties)
- [router.push](#routerpush)
- [router.prefetch](#routerprefetch)
- [router.isFallback](#routerisfallback)
- [URLObject](#urlobject)

## what is this

- access to url information

## get router object

- to get a **router object**, use `useRouter()` hook

```js
import {useRouter} from 'next/router'

const router = useRouter();
```

## router properties

- `pathname: String`: current file path after `/`
- `query: Object`: an object of query parameters
  - `page/[id]`匹配的路径`page/1`, 则`router.query.id` is 1
  - page doesn't use [server-side rendering](react-csr-and-ssr.md#ssr), `router.query` is empty
- `asPath: String`: the path shown in browser

1. for file `./components/[param].js`

```js
import {useRouter} from 'next/router'

export default function Demo() {
  const router = useRouter()
  return (
    <div>
      <h1>pathname: {router.pathname}</h1>
      <h1>query: {router.query.param}</h1>
      <h1>asPath: { router.asPath}</h1>
    </div>
  )
}
```

if request `/components/abc`, then the page looks like

```
pathname: /components/[param]
query: abc
asPath: /components/abc
```

for route `pages/[id].js`

```js
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Page(props) {
  const router = useRouter()
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Page: {router.query.id}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <Link href="/one">one</Link>
      <Link href="/two">two</Link>
    </div>
  )
}
```

for file `./components/[...all].js`, give a request `/components/a/b/c, 

- router.query会有这样一项:

```js
{all: ['a', 'b', 'c']}
```

## router.push

`router.push(url, as, options)` is used to navigate to another page

- `url: UrlObject | String`: the URL to navigate to
- `as: UrlObject | String`(optional): the URL to shown in browser
- `optoins`: Optional Object
  - `'scroll'`: scrolling to the top of the page, default `true`
  - `'shallow'`: update the path of the current page without rerunning `getStaticProps`, `getServerSideProps`, `getInitialProps`
  - `'locale'`: locale of the new page

> don't use `router.push` for external URLs, `window.location` is better

## router.prefetch

- to make a faster transition
- `router.prefetch(url, as, options)` is used to prefetch a page

## router.isFallback

## URLObject


