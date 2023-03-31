# useState

## Basic

[useState basic use](react-hooks-usestate-basic.md)

## Principles For Structuring State

1. Group Related state

- you can do this

```js
const [x, setX] = useState(0);
const [y, setY] = useState(0);
```

- if two state are related, you can group them together

```js
const [position, setPosition] = useState({ x: 0, y: 0 });
```

2. Avoid contradictions(矛盾) in state


**3. Avoid Redundant State**

```js
import { useState } from 'react';

export default function form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const fullname = firstname + ' ' + lastName;
}
```

4. Avoid duplication in state

5. Avoid deeply nested state

## inside useState

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
    // simulate trigger a event
    id = setTimeout(() => setCount(10), 1000);
  }
  console.log(`render a component with state: ${count}`);
}

render();
```
