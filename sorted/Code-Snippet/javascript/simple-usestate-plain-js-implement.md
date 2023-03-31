# simple-usestate-plain-js-implement

## code

```js
let state;
let id;

function useState(initialState) {
  state = state || initialState;
  function setState(newState) {
    state = newState;
    render();
  }
  return [state, setState];
}

function render() {
  const [count, setCount] = useState(0);

  if (!id) {
    // simulate to trigger a event
    id = setTimeout(() => {
      setCount(count + 1)
    }, 1000);
  }
  console.log(`render a component with state: ${count}`);
}

render();
```