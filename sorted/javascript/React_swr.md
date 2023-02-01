# swr

## Introduction

a React Hooks library for remote data fetching

## Take A Look

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