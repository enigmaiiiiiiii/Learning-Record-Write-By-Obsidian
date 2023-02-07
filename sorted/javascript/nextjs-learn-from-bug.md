# Solve Problem

- [1. Module not Found: Can't solve 'fs'](#1-module-not-found-cant-solve-fs)
- [2. TypeError: (0 , swr\_\_WEBPACK\_IMPORTED\_MODULE\_5\_\_.useSWR) is not a function](#2-typeerror-0--swr--webpack-imported-module-5--useswr-is-not-a-function)

## 1. Module not Found: Can't solve 'fs'

Preknowledge

- fs: filesystem module, depend on server
- nextjs rendering page on server side

when this problem occurs

- access to a page not in `paths` property of `getStaticPaths()`

## 2. TypeError: (0 , swr__WEBPACK_IMPORTED_MODULE_5__.useSWR) is not a function

Condition

1. nextjs framework

when it happen

```js
import {useSWR} from 'swr'

export default function Demo() {
  const { data } = useSWR('url', fetcher)  // error
}
```

analysis

- swr [**default export**](javascript-module-import.md#default-import) is useSWR

so import it like this

```js
import useSWR from 'swr'
```
