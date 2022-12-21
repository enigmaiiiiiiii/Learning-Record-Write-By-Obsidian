# NextJs

## introduction

- Next.js is a framework for building server-rendered React applications

## features

- 路由系统
- Pre-redering, SSG and SSR
- 自动代码分割, faster page loads
- 优化预抓取的客户端路由
- fast refresh development environment
- API routes to build API endpoints with Serverless Functions
- Fully extendable

## create NextJs app

```bash
npx create-next-app
```

## file system routing

[file system routing](NextJs_File_System_Routing.md)

## API

[API](NextJs_API.md)

## Directive

`"use client"`

- 在`app` directory 的 client component, add `"use client"` directive at the top of the file
- components marked with `"use client"`, they can use [useState]() or [useEffect]() hooks

## Rendering

[Rendering](NextJs_Rendering.md)

## fast refresh

**Limitation**

1. the file you're editing might have other exports in addition to a React component

- that is to say, **file name** must be same as **component name**

welcome.jsx

```js
const Welcome = () => {
    return <h1>Welcome to Next.js!</h1>
}
export default welcome;
```

2. Anonymous arrow function like `export default () => <div>Hi</div>` is not supported