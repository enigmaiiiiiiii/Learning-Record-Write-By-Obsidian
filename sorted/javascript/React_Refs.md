# Refs

- 通常通过[props](React_Component.md)完成component之间的interaction
- 在少数情况, need Access to DOM, 可以使用Refs

when to use Refs?

- manage focus, text selection, or media playback
- trigger imperative(必要的) animations
- Integrating with third-party DOM libraries

## create Refs

- `React.createRef()` create a ref
- use ref attribute attached to React element

```js
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
}
```

