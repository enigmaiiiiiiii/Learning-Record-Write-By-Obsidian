# React Render And Commit

* [Step1: Trigger A Render](#step1-trigger-a-render)

## Step1: Trigger A Render

1. use `createRoot()` create a root react component on target [node](javascript-dom.md#node)
2. calling this component render() method

index.js

```js
import Image from './Image.js'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<Image/ >)
```

Image.js

```js
export default function Image() {
  return (
    <img
      src='url'
      alt='alt'
    />
  )
}
```

- [states update](react-hooks-usestate.md) will trigger this [step](#step1-trigger-a-render), that is re-render

## Step2: Renders your component


## Step3: Commit

- use [`appendChild()` DOM API](javascript-dom-element.md) put all the DOM nodes in Screen
