# React forwardRef

## what is for

- to expose a DOM node to parent component

## Syntax

`forwardRef(render)`

- `render`: a function react component, Receive `props` and `ref` as arguments

## Render function

- props: [component props](react-component.md#props)
- ref: can be a object or function

## Create a Child Component And Expose A DOM Node

```js
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  )
})
```

## Access to DOM node from parent

```js
function Form() {

  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label="Enter your name: " ref={ref}/>
      <button type="button" onClick={handleClick} />
        Edit
      </button>
    </form>
  )
}
```

- the child component `<input>` node will be exposed to parent component
- you can access to the DOM node from parent component
