# NextJs - File System Routing

* [what can be routes](#what-can-be-routes)
* [router object](#router-object)
* [link pages](#link-pages)

## What Can Be Routes

[Pages Routes](nextjs-pages-router.md)

[App Routes](nextjs-app-router.md)

[Dynamic route](nextjs-dynamic-route.md)

## router object

[Parse Routes](nextjs-parse-routes.md)

## link pages

- similar to a single-page application
- React component `<Link>` is used to finish the client-side page jump

```js
function Home() {
  return (
    <div>
      <Link href='/about'>
        <a>About Page</a>
      </Link>
    </div>
  )
}
```

- `/about` $\rightarrow$ `pages/about.js`

link dynamic pages

```js
function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
```

Use URL Object

- This is A link Object

```js
{
  pathname: '/blog/[slug]',
  query: { slug: post.slug }
}
```

- Use Link Object In Component `<Link .../>`

```js
function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={{
              pathname: '/posts/[slug]',
              query: [slug: post.slug]
            }}
            as={`/posts/${post.id}`}
          >
          <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
```
