# React Class Component

## static defaultProps

```js
class Welcome extends React.Component {

  static defaultProps = {
    name: 'default name'
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```


