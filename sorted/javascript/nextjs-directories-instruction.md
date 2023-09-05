# NextJS - Directories Instruction

## Top Level Directories

```
.
├── app
├── pages
├── public
└── src
```

**`public` directory**

- files in `public` directory are served as static assets
- can be referenced by base URL `/`

for example `public/me.png` can be referenced as `/me.png`

```js
import image from 'next/image'

export function Avatr() {
    return <Image src="/me.png" alt="me" width="64" height="64" />
}
```

**`src` directory**

- common pattern of react placing application code 

**`app` directory**

- routing

## Top Level Files

```
.
├── Next.js	
├── next.config.js	
├── package.json
├── instrumentation.ts
├── middleware.ts
├── .env
├── .env.local
├── .env.production
├── .env.development
├── .eslintrc.json
├── .gitignore
├── .next-env.d.ts
├── tsconfig.json
├── jsconfig.json
└── postcss.config.js
```

## SEO

```
sitemap.xml
sitemap.js/ts
robots.txt
robots.js/ts
```

