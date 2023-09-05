# simple-usestate-plain-js-implement

## Code

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
    // simulate to trigger an event
    id = setTimeout(() => {
      setCount(count + 1)
    }, 1000);
  }
  // assume that here is the part of react rendering
  console.log(`render a component with state: ${count}`);
}

render();
```
