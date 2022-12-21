# routes

## index routes

- `pages/index.js` $\rightarrow$ `/`
- `pages/blog/about.js` $\rightarrow$ `/blog`

## nested routes

- `pages/blog/first-post.js` $\rightarrow$ `/blog/first-post`
- `pages/dashboard/settings/username.js` $\rightarrow$ `/dashboard/settings/username`

## dynamic route

> 使用`[]`语法

- `pages/blog/[slug].js` $\rightarrow$ `/blog/:slug`
- `pages/[username]/setting.js` $\rightarrow$ `/:username/setting`
- `pages/post/[...all].js ` $\rightarrow$ `/post/*`

react component `./components/[id].js`

```js
export function getStaticPaths() {
  const router = useRouter()
  const {id} = router.query
  return (
    <div>
      <h1>Components {id}</h1>
    </div>
  )
}
```

`./index.js`

```js
import {Link} from 'next/link'
export default function Home() {
  return (
    <>
      <Link href="/components/1">route</Link><br/>
      <Link href="/components/1">route</Link><br/>
      <Link href="/components/1">route</Link><br/>
    </>
  )
}
```

## routes 优先级

径优先级从高到低: `page/name`, `page/[id]`, `page/[...all]`

- `pages/blog/create` $\rightarrow$ `pages/blog/[slug].js` $\rightarrow$ `/blog/[...all]`
