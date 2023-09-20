# React Hooks - UseRef

* [reference a component DOM](#reference-a-component-dom)
* [reference a value](#reference-a-value)
* [feature](#feature)
* [Contrast To UseState](#contrast-to-usestate)

## Reference A Component DOM

```js
import { useRef } from 'react'
function myComponent() {

  const tmpRef = useRef(null);

  function foo() {
    tmpRef.current.focus()
  }

  return (
    <div>
      <input ref={tmpRef} />
      <button
        onClick={() => {
          const child = document.createElement('div');
          child.innerHTML = 'hello child';
          ref.current.appendChild(child);
        }}
      >
        focus
      </button>
    </div>
  )
}
```

- `useRef` return an Object `tmpRef`
- with single property `current`, reference to the [DOM Element](javascript-dom-element.md)
- `initialValue` is required in `useRef(initialValue)`, can be `null`

## Reference A Value

- reference a value whose changing won't cause re-render

create useRef Obejct

`useRef(initialValue)`

```js
import { useRef } from 'react';

function MyComponent() {
  const intervalRef = useRef(0);
  function handleStartClick() {
    const intervalId = setInterval(() => {
      // ...
    }, 1000);
    intervalRef.current = intervalId;
  }
}
```

- intervalRef.current **init** value is `0`
- use `intervalRef.current` to set and get the value

## feature

- changing a ref does not cause re-render
- use to store information doesn't affect the visual output

## Contrast To UseState

React Component `PlusOne.js`

- this component create two button
- click first button will change state immediately, and cause **re-render**
- click second button doesn't have **any effect**, because it's not cause re-render
- click first button again can see the change second button valuse change
- that mean re-render will cause useRef state change

```js
import { useState, useRef } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const countR = useRef(0)

  function handleClick() {
    setCount(count + 1);
  }

  function refPlusOne() {
    countR.current = countR.current + 1
  }

  return (
    <>
    <button onClick={handleClick}>
      state plus 1: {count}
    </button>
    <button onClick={refPlusOne}>
      ref plus 1: {countR.current}
    </button>
    </>
  )
}
```
