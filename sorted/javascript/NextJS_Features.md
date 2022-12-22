# Features

Next.js is a framework for building server-rendered React applications

- [pre-rendering](#pre-rendering)
- [SSG](#static-site-generationssg)
- [SSR](#server-side-renderingssr)
- [CSR](#client-side-renderingcsr)

## pre-rendering

- NestJS pre-rendering a page, **instead** of rendering a page all by **client side javascript** 

> 而不是全部通过客户端javascript来渲染一个页面

- can result in better performance and [SEO]
- Each HTML is associated with minimal JavaScript code
- Initial Load some HTML, before Hydration

> hydration: process of **load JS** makes the page interactive that loaded by browser

two forms pre-rendering

[Server-side Rendering(SSR)](#server-side-renderingssr)
[Client-side Rendering(CSR)](#client-side-renderingcsr)


## Static Site Generation(SSG)

- generated the **HTML** at **build time**
- **reused** on each request
- for `.js`, `.jsx`, `.ts`, `.tsx` files in `/pages` directory, assosiated with a route based on **file name**
- can be cached by a **CDN** for performance

static Generation with external data

- `getStaticProps` function

when use static Generation

- a page can be pre-rendered ahead of a user's request

## Server-side Rendering(SSR)

1. HTML generated on each request
2. run a script on server, such script called **server-side script**
3. rendering it to **static** HTML and CSS and send to browser(client).

## Client-side Rendering(CSR)

1. run a script on browser(client), called **client-side script**
2. browser rendering client-side script to HTML and CSS

## SEO

- Search engine optimization