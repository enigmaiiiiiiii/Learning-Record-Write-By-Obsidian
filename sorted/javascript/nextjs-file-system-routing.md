# file system routing

## what can be routes

[Routes](nextjs-routes.md)

## router object

[Parse Routes](nextjs-parse-routes.md)

## link pages

- similar to a single-page application
- React component `<Link>` 来完成`client-side`的页面跳转

```js
function Home() {
  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  )
}
```

- `/about` $\rightarrow$ `pages/about.js`

dynamic paths

```js
function Posts({posts}) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <a>{post.title}</a>
              </Link>
            </li>
      ))}
    <ul>
  )
}
```
