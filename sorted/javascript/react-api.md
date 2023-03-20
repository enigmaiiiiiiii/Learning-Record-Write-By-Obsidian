# API

## react-dom/server

## ReactDOM

- use `className` Attribute to specify a class name

## createElement()

Syntax

- createelement(type, props, ...children)

example

```js
import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting'},
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  )
}
```

equivalent JSX

```js
function Greeting({ name }) {
  return (
    <h1 classname="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  )
}
```