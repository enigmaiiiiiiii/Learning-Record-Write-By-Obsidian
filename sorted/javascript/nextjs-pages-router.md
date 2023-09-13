# NextJS - Routes

* [index routes](#index-routes)
* [nested routes](#nested-routes)
* [dynamic route](#dynamic-route)
* [routes priority](#routes-priority)

## When Pages Router Take Effect

- files in [`pages` directory]() auto available as routes

## Index Routes

- `pages/index.js` -> `/`
- `pages/blog/about.js` -> `/blog`

## Nested Routes

- `pages/blog/first-post.js` $\rightarrow$ `/blog/first-post`
- `pages/dashboard/settings/username.js` $\rightarrow$ `/dashboard/settings/username`


## Routes Priority

priority from high to low: `page/name`, `page/[id]`, `page/[...all]`

- `pages/blog/create` $\rightarrow$ `pages/blog/[slug].js` $\rightarrow$ `/blog/[...all]`
