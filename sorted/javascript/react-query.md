# React Query

## return Object properties

- data
- error
- failureCount
- isError
- isFetchedAfterMount
- isFetching
- isIdle
- isLoading
- isPreviousData
- isStale
- isSuccess
- refetch
- remove
- status

## usage

```js
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios.get(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

- useQuery(key, fn, options)
- QueryClientProvider and QueryClient

```js
<QueryClientProvider client={client}>
  <React-Component/>
</QueryClientProvider>
```