# NextJs

## server-side rendering

## Directive

`"use client"`

- 在`app` directory 的 client component, add `"use client"` directive at the top of the file
- components marked with `"use client"`, they can use [useState]() or [useEffect]() hooks

## Rendering

[Rendering](NextJs_Rendering.md)

## first refresh

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