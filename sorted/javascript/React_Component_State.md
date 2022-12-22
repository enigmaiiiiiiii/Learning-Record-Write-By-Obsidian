# State

-   contains data specific **to this component** that may **change over time**
-   what value don't need put in state?
    -   used for rendering
    -   data flow(like a timer ID)

## for class component

- `state` 是一个保留字段, 是一个object
- add a **data you want to change** is add a property of `state`
-   use `setState()` to update state

```js
class Counter extends React.Component {
  state = { count: 0 };
}
```

code:

```js
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

## for function component

-  use `useState()` to add state

```js
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```