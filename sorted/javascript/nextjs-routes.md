# routes

- [index routes](#index-routes)
- [nested routes](#nested-routes)
- [dynamic route](#dynamic-route)
- [routes 优先级](#routes-优先级)

## index routes

- `pages/index.js` $\rightarrow$ `/`
- `pages/blog/about.js` $\rightarrow$ `/blog`

## nested routes

- `pages/blog/first-post.js` $\rightarrow$ `/blog/first-post`
- `pages/dashboard/settings/username.js` $\rightarrow$ `/dashboard/settings/username`

## dynamic route

[dynamic route](nextjs-dynamic-route.md)

## routes 优先级

优先级从高到低: `page/name`, `page/[id]`, `page/[...all]`

- `pages/blog/create` $\rightarrow$ `pages/blog/[slug].js` $\rightarrow$ `/blog/[...all]`
