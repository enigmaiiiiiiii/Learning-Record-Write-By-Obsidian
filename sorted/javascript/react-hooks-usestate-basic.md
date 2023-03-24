# Basic Usage Of UseState

## add state to component

```js
function MyComponent() {
  const [count, setCount] = useState(0);
  return (
    // jsx literal
  );
}
```

## return an array

返回一个数组, 并通过[解构赋值](javascript-variable-assignment.md#数组解构)

```js
const [count, setCount] = useState(0);
```

1. a `current state` of state variable, initial value set to you provided, `count` is 0
2. a `set function` to update the state variable, `setCount(1)` set `count` to 1
