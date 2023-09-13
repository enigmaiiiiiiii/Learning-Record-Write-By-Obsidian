# NextJs - Dynamic Route

* [Take A Look](#take-a-look)
* [get routes params](#get-routes-params)
* [multiple dynamic routes](#multiple-dynamic-routes)

## Take A Look

> `[]` Syntax

`pages/blog/[id].js`

- route `/blog/1`, `/blog/2`, ..., will be matched

`pages/[username]/setting.js`

- `/abc/setting`

`pages/post/[...all].js `

- route like `/post/a/b/c` will be matched

***

there is a react component with path `./components/[id].js`

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

## Get Routes Params

- **use object `router.query`**

next page code like this

```js
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
```

for file `pages/post/[pid].js`

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

for file `pages/post/[...slug].js`

- url like `/post/a/b/c`

```js
// router.query
{pid: ['a', 'b', 'c']}
```

## Multiple Dynamic Routes

page file: `pages/post/[pid]/[comment].js`

- `/post/abc/a-comment`

```js
// router.query
{
  pid: 'abc',
  comment: 'a-comment'
}
```


