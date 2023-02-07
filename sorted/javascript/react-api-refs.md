# Refs

- 通常通过[props](react-component.md)完成component之间的interaction
- 在少数情况, need Access to DOM, 可以使用Refs

when to use Refs?

- manage focus, text selection, or media playback
- trigger imperative(必要的) animations
- Integrating with third-party DOM libraries

## create Refs


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
