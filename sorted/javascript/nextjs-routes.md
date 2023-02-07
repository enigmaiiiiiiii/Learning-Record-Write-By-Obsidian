# routes

## index routes

- `pages/index.js` $\rightarrow$ `/`
- `pages/blog/about.js` $\rightarrow$ `/blog`

## nested routes

- `pages/blog/first-post.js` $\rightarrow$ `/blog/first-post`
- `pages/dashboard/settings/username.js` $\rightarrow$ `/dashboard/settings/username`

## dynamic route

> 使用`[]`语法

`pages/blog/[id].js`

- route `/blog/1`, `/blog/2`, ..., will be matched

`pages/[username]/setting.js`

- `/abc/setting`

`pages/post/[...all].js `

- route like `/post/a/b/c` will be matched

***

there is a react component in `./components/[id].js`

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

link to `/components/1`, `/components/2`, `/components/3` in `./index.js`

```js
import {Link} from 'next/link'
export default function Home() {
  return (
    <>
      <Link href="/components/1">Link 1</Link><br/>
      <Link href="/components/2">Link 2</Link><br/>
      <Link href="/components/3">Link 3</Link><br/>
    </>
  )
}
```

## routes 优先级

径优先级从高到低: `page/name`, `page/[id]`, `page/[...all]`

- `pages/blog/create` $\rightarrow$ `pages/blog/[slug].js` $\rightarrow$ `/blog/[...all]`
