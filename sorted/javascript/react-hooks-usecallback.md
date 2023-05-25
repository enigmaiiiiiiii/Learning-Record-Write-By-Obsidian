# React Hooks useCallback

## what is this

- react hook **cache a function definition** between **re-renders**

## feature

- **if dependencies not change**, `useCallback` return the **same** function
- a method to optimize **child component**
- different to [useMemo](react-hooks-usememo.md) which cache a function calculate result
- `useCallback` cache a function definition

what is the mean of **same**

think `useCallback` like this

```js
function useCallback(fn, dependencies) {
  return usememo(() => fn, dependencies);
}
```

## Syntax

```js
const cachedFn = useCallback(fn ,dependencies)
```

parameter

- `fn`: function you want to cache
- `dependencies`
  - [reactive values](react-glossary.md#reactive-value) **inside `fn` code**
  - affect by [linter], Linter will verify that every reactvie value is specified as dependency
  - if dependencies not change, `useCallback` return the **same** function


return

- return function `fn`

## Usage

```js
function ProductPage({ productId, referer, theme }) {
  function handleSubmit(orderDetails) {
    post('/product/' + productId + '/buy',{
      referrer,
      orderDetails
    });
  }

  return (
    <div classname={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
```

Preventing an Effect form firing too often

```js
function ChatRoom({ roomId }) {

  function createOptions() {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    // ..
  }, [createOptions])  // 🔴 Problem: This dependency changes on every render
}
```

solve this

```js
function ChatRoom({ roomId }) {
  const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    }
  })

  useEffect(() => {
    const options = createOptions();
    cosnt connection = createConnection();
    connection.connect();
  }, [createOptions])
}
```

## dependency

empty array dependencies

- once the function cached, it will always return the same function util the component **unmounts**

omit the dependencies argument

- the function will be re-created on every render
- ~~seems like meaningless~~

