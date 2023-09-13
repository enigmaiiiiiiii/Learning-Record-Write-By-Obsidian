# NextJs - Top Level Directories

## Structure

```
.
├── app
├── pages
├── public
└── src
```

## `app` directory

use app router system

- where [app router](nextjs-app-router.md) take effect

~~routing priority is over [`pages` directory](#pages-directory)~~

- ~~for url `example.com/about`, `app/about.js` is used instead of `pages/about.js`~~

## `pages` directory

use pages router system

- where [pages router](nextjs-pages-router.md) take effect

## `public` directory

- files in `public` directory are served as static assets
- can be referenced by base URL `/`

for example `public/me.png` can be referenced as `/me.png`

```js
import image from 'next/image'

export function Avatr() {
    return <Image src="/me.png" alt="me" width="64" height="64" />
}
```

## `src` directory**

- common pattern of react placing application code 

