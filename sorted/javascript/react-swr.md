# swr

## Introduction

- a React Hooks library for [**fetch promise data**](javascript-promise.md)

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

- `useSWR(url, fetcher)`: `fetcher` is a [async function](javascript-async-await.md#async-function) that accepts the `key` as parameter
