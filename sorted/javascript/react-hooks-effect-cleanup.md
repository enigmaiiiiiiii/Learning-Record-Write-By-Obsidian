# React - When Need Clean Up for useEffect

* [Handle Effect Firing Twice](#handle-effect-firing-twice)
* [add event listener](#add-event-listener)
* [connect to server](#connect-to-server)
* [Fetch data](#fetch-data)
* [Triggering Animations](#triggering-animations)
* [sending analytics](#sending-analytics)

## Handle Effect Firing Twice

- Cause react intentionally run effect twice in dev mode
- So need to consider how to avoid [effect firing twice](react-create-app.md#development-mod)
- Handle logic usually focus on how to implement [cleanup function](react-hooks-useeffect.md#cleanup-function)

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

cause react dev mode will mount every commponent twice

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


