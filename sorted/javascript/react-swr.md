# SWR

- [Introduction](#introduction)
- [Complex Data Client-side fecthing](#complex-data-client-side-fecthing)
- [Take A Look](#take-a-look)
- [useSWR](#useswr)

## Introduction

- a React Hooks library for [**fetch promise data**](javascript-promise.md)
- simplify the data fetching from client

> Complex implement is use [useEffect](react-hooks-useeffect.md)

## Complex Data Client-side fecthing

use useEffect fetch data from client side

- combine [useEffect](react-hooks-useeffect.md) and [useState](react-hooks-usestate.md) and [fetch](javascript-api-fetch.md)

```js
function profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/vercel')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
  }, [])
}
```

## Take A Look

[another example](swr-data-fetch.md)

official example

```js
import React from "react";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SWRDemo() {
  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr", fetcher
  )

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.descripttion}</p>
      <strong>👀 {data.subscribers_count}</strong>
      <strong>⭐ {data.stargazers_count}</strong>
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}
```

## useSWR

`const { data, error, isLoading, isValidating, mutate } = useSWR(key, fetcher, options)`

- `fetcher` is a [async function](javascript-async-await.md#async-function)
- accepts the `key` as parameter

return value

- data: the data returned from `fetcher`
- error: error thrown by `fetcher`
- isLoading:
- isValidating:
- mutate:


## config swr

Global Configuration

1. import `SWRConfig` from `swr`
2. wrap the `SWRConfig` around the root component

```js
import useSWR, { SWRConfig } from 'swr';

function Dashboard() {
  const { data: events } = useSWR('/api/events')
  const { data: projects } = useSWR('/api/projects')
  const { data: user } = useSWR('/api/user', {refreshInterval: 0})
}

function App () {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Dashboard />
    </SWRConfig>
  )
}
```

