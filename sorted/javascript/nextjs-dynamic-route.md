# NextJs Dynamic Route

- [Introduction](#introduction)
- [get routes params](#get-routes-params)
- [multiple dynamic routes](#multiple-dynamic-routes)

## Introduction

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

## get routes params

- **use object `router.query`**

for file `pages/post/[pid].js`

```js
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
```

- url like `/post/1`

```js
// router.query is
{pid: '1'}
```

- url like `/post/abc?foo=bar`

```js
// router.query is
{pid: 'abc', foo: 'bar'}
```

## multiple dynamic routes

page file: `pages/post/[pid]/[comment].js`

- `/post/abc/a-comment`

```js
// router.query
{
  pid: 'abc',
  comment: 'a-comment'
}
```




