# API

## forwardRef

- lets component **expose a DOM node** to parent component

`React.forwardRef(render)`

- `render`: a function with `props` and `ref` as arguments
  - `props`: props passed by parent component
  - `ref`: mostly a variable return by [`useRef`]

forward component

```jsx
const MyInput = React.forwardRef((props, ref) => {
  const {label, ...otherProps} = props;

  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );

});
```

parent component

```jsx
function Form() {
  const ref = useRef(null);
  function handleClick(){
    ref.current.focus();
  }
  return (
    <form>
      <MyInput label="Name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  )
}
```

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