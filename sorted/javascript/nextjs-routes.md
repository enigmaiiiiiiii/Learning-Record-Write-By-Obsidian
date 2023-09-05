# NextJS - Routes

* [index routes](#index-routes)
* [nested routes](#nested-routes)
* [dynamic route](#dynamic-route)
* [routes priority](#routes-priority)

## Index Routes

- `pages/index.js` $\rightarrow$ `/`
- `pages/blog/about.js` $\rightarrow$ `/blog`

## Nested Routes

- `pages/blog/first-post.js` $\rightarrow$ `/blog/first-post`
- `pages/dashboard/settings/username.js` $\rightarrow$ `/dashboard/settings/username`

## Dynamic Route

[dynamic route](nextjs-dynamic-route.md)

## Routes Priority

priority from high to low: `page/name`, `page/[id]`, `page/[...all]`

- `pages/blog/create` $\rightarrow$ `pages/blog/[slug].js` $\rightarrow$ `/blog/[...all]`
