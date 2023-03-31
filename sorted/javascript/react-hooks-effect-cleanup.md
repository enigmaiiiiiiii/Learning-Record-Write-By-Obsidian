# When need Clean Up for useEffect

- [Handle Effect firing twice](#handle-effect-firing-twice)
- [Practical usage](#practical-usage)
- [add event listener](#add-event-listener)
- [connect to server](#connect-to-server)
- [Fetch data](#fetch-data)

## Handle Effect firing twice

- cause react intentionally run effect twice in dev mode
- 所以需要考虑如何避免 [effect firing twice](react-create-app.md#development-mod)
- 处理的思路通常集中在如何实现[cleanup function](#cleanup-effect)

write a effect **depend on nothing** will cause react only run effect code whe component mount

```js
useEffect(() => {
    // do something after render
}, [])
```

## add event listener

```js
useEffect(() => {
  functoin handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll)
})
```

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

## Triggering Animations

```js
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1;
  return () => {
    node.style.opacity = 0;
  }
}, [])
```

## sending analytics


