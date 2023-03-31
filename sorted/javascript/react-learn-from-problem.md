# React Learn From Problem

- [1. TypeError: destroy is not a function](#1-typeerror-destroy-is-not-a-function)
- [2. Client Side data fetching cause focus lose](#2-client-side-data-fetching-cause-focus-lose)
- [3. why always print true for callback defined in top level of reat component](#3-why-always-print-true-for-callback-defined-in-top-level-of-reat-component)

## 1. TypeError: destroy is not a function

```js
function chatRoom() {
  useEffect(async () => {
    const { destroy } = await connectToChatServer();
    return () => { };
  }, [])
}
```

- [useEffect](react-hooks-useeffect.md) first argument is a function
- this function optionally returns a cleanup function
- but [async function](javascript-async-await.md#async-function) return a promise, not a cleanup function

## 2. Client Side data fetching cause focus lose

cause by:

1. [useEffect](react-hooks-useeffect.md) fetch empty data
2. [useEffect](react-hooks-useeffect.md) return value isLoading use as condition to render
3. use fetched data to render without check if data is empty

```jsx
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Demo() {

  const [query, setQuery] = useState("");

  const { data, isLoading, error} = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div>
        {data && data.map((item) => (
          <div key={item.title}>
            {item.title}
          </div>
        ))}
      </div>
    </>
  )
}
```

analysis

- when data is empty, will cause isLoading page render
- and then lose focus

## 3. why always print true for callback defined in top level of reat component

description

1. a button toggle the flag
2. a document click event can print the flag

confusion:

- always print true on document click

demonstrate demo

```jsx
import React, {useState, useEffect, useRef} from 'react';

function Sample() {

  const [flag, setFlag] = useState(true);

  const ClickOutside = function () {
    console.log(flag);
  }

  const FooClick = () => {
    setFlag(!flag)
  }

  useEffect(() => {
    document.addEventListener('click', ClickOutside)
    return () => {
      document.removeEventListener('click', ClickOutside)
    }
  }, [])

  return (
    <>
      <button onClick={FooClick}>Toggle Flag</button>
      <div>{flag ? 'true' : 'false'}</div>
    </>
  )
}
export default Sample;
```

analysis:

- ClickOutside is not redefined when re-render caused by button click

solution:

- write ClickOutside inside useEffect
- set flag as dependency of useEffect

```js
useEffect(() => {
  const ClickOutside = function () {
    console.log(flag);
  }
  document.addEventListener('click', ClickOutside)
  return () => {
    document.removeEventListener('click', ClickOutside)
  }
}, [flag])
```



