# React Learn From Problem

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
