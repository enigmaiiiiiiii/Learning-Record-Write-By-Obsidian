# Next.js Router

## get router object

- access to [router object](nextjs-file-system-routing.md) use `useRouter` hook

> `withRouter` in class component

```js
function ActiveLink({ children, href }) {
  const router = useRouter()
  // ...
}
```

## router.push

- useful when [next/link](nextjs-api.md#nextlink) is not enough
