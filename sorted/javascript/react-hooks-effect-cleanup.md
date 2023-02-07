# Effect Clean Up

## Handle Effect firing twice**

- 因为react in development mode will remounts every commponent once immediately after its initial mount
- 所以需要考虑如何避免 [effect firing twice](react-create-app.md#development-mod)
- 处理的思路通常集中在如何实现[cleanup function](#cleanup-effect)

write a effect **depend on nothing** will cause react only run effect code whe component mount

```js
useEffect(() => {
    // do something after render
}, [])
```

## 实际应用场景

## connect to server

由于react dev mode will mount every commponent twice

so when you create a `connect`, you should return a `disconnect` **hook** to cleanup effect

- return a [function object](javascript-function-expression.md)

```js
useEffect(() => {
    const connection = createConnection();
    conection.connect();
    return () => {
        connection.disconnect();
    };
}, [])
```

## Fetch data

```js
useEffect(() => {
    let ignore = false;
    async function startFectching() {
        const json = await fetchTodos(userId);
        if (!ignore) {
            setTodos(json);
        }
    }
    startFectching();
    return () => {
        ignore = true;
    }
})
```