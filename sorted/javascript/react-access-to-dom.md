# Access To DOM With Refs

- usually use [props](react-component.md) to reach the interaction between
- in a few cases, need Access to DOM, you can use Refs

## when to use Refs?

- manage focus, text selection, or media playback, etc
- trigger imperative(必要的) animations
- Integrating with third-party DOM libraries

## Create A Ref

```js
import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
    </>
  )

}
```

## When React Attach The Ref

- on first render `ref.current` will be `null`
- React sets `ref.current` during the [commit](react-render-and-commit.md#step3-commit)
- usually access to dom from **event handler** or [useEffect]()

```js
function Foo() {

    const ref = useRef(null);
    console.log(ref.current); // null

    return (
        <>
            <div ref={ref}></div>
        </>
    )
}
```

> output will be `null`

## legacy create Refs

```js
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        // attach the ref to a React element
        return <div ref={this.myRef} />;
    }
}
```

- `React.createRef()` create a ref
- use `<component ref="{this.myRef}">`:attribute attached the `ref` to React element
