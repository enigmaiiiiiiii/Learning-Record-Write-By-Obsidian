# Lifecycle

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

lifecycle methods

- `componentDidMount()`: run after component output has been rendered to the DOM
- `componentWillUnmount()`: run before component is removed from the DOM

## Mounting

Mounting: a conponent is being created and inserted into the DOM

these methods are called in this order

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

## Updating

Updating: a component is being re-rendered 

these methods are called in this order:

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

## Unmounting

Unmounting: a component is being removed from the DOM

this method is called

- componentWillUnmount()

## Error Handling

Error Handling Methods can called when there is an error:

- during rendering
- in a lifecycle method
- in the constructor of any child component

these methods are called in this order:

- static getDeriveStateFromError()
- componentDidCatch()
