# Hooks UseRef

## Introduction

- reference a value that't not needed for rendering

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

- internal is `0`
- use `intervalRef.current` to set and get the value

## Properties

## Contrast To UseState

React Component `PlusOne.js`

- this component create two button
- click first button will change state immediately, and cause re-render
- click second button didn't have any effect, because it's not cause re-render
- re-render will cause useRef state change



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