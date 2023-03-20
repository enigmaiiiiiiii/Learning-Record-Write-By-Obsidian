# getStaticPaths

- [what's for](#whats-for)
- [take a look](#take-a-look)
- [return value](#return-value)
  - [paths](#paths)
    - [params: an object of match route pararmeters](#params-an-object-of-match-route-pararmeters)
  - [fallback](#fallback)
    - [when `fallback: ture`](#when-fallback-ture)
    - [fallback page](#fallback-page)

## what's for

- for page with [dynamic routes](nextjs-routes.md#dynamic-route)
- generate pages with **dynamic routes** at **build time**
- 需要在build time生成的用动态路径表示[页面](nextjs-terminology.md#pages)

## feature

- must be used with `getStaticProps`
- cannot use with `getServerSideProps`
- cannot exort getStaticpaths from non-page file(e.g. components folder)

## when to use

## take a look

```js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 1 } },
      { params: { id: 2 } }
    ],
    fallback: true;
  }
}
```

- called from a page use [Dynamic routes](nextjs-routes.md#dynamic-route)

## return value

### paths

`paths` is an array of objects, elements represent a 具体的路径参数值

`paths`中每个元素代表一个路径, 路径表示的页面会被**pre-rendered**

properties of `paths` element:

```js
paths: [
  {
    params: {
      id: '1',
      locale: 'en'
    }
  },
]
```

- params
- locale

#### params: an object of match route pararmeters

for path `pages/posts/[postId]/[commentId]`

- params should contain `postId` and `commentId`
- code follows specified path is `pages/posts/1/2` and `pages/posts/2/3`

```js
{
  paths: [
    params: { postId: '1', commentId: '2' },
    params: { postId: '2', commentId: '3' },
  ]
}
```

for path `pages/[...slug]`

- params should contain `slug`
- code follows specified path is `pages/foo/bar` and `pages/foo/baz`

```js
{
  paths: [
    params: { slug: ['foo', 'bar'] },
    params: { slug: ['foo', 'baz'] },
  ]
}
```

render root path `/`:

- slug is `null, undefined, false, or []`, root path will be rendered

```js
{
  paths: [
    params: {slug: null },
  ]
}
```

### fallback

`fallback: false`: 404 page will be rendered if the path is not in `paths`

`fallback: true`: function [getStaticProps()](nextjs-datafetching-getstaticprops.md) behavior changes in following ways:

1. `getStaticPaths()`返回的`paths`属性中的路径会在build time 被[getStaticProps()](nextjs-datafetching-getstaticprops.md)预渲染
2. 不在`paths`中的路径, 不会导致 404 page, `Next.js` 会为首次访问的这种路径提供一个[备用页面](#fallback-page)
3. nextjs 在后台静态的生成请求的页面, 包括运行getStaticProps()
4. 当完成时, 浏览器根据[props]()渲染一个页面

> 第四点, 从用户的角度看, 页面会从**fallback page**切换到渲染后的完整页面

5. page navigated by `next/link` or `next/router` 不会提供备用页面, 行为和`fallback: blocking`一样

`fallback: blocking`: function [getStaticProps()]() behavior changes in following ways

1. `getStaticPaths()`返回的`paths`属性中的路径会在build time 被[getStaticProps()]预渲染
2. 不在`paths`中的路径, 不会导致 404 page, Next.js会为首次访问的路径面开始SSR

> `Next.js` 不会**提供备用页面

3. 用户只会看到一个完整的页面, 不会用转换过程

#### when `fallback: ture`

your app have a very large number of **static pages** that **depend on data**, and the builds would take a very long time

你可以提供一小部分静态页面, 剩下的部分使用`fallback: true`

#### fallback page

- page [props](nextjs-datafetching-getstaticprops.md) will be empty
- [router.isFallback](nextjs-parse-routes.md#routerisfallback) 可以检测需要是否渲染fallback page

```js
import { useRouter } from 'next/router'

function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div> // fallback page
  }
  return (
    <>
      <h1>hello, { post.name }</h1>
      <h1>age, { post.age}</h1>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
    ],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const post = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'second',
        age: 19
      })
    }, 2000)
  })

  return {
    props: { post },
    revalidate: 1,
  }
}

export default Post;

```
