# Components

## they are components


function component

- `props` are read-only, function body must not change `props`

```jsx
function Welecom(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

class component

```jsx
class Welcom extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

## this is not a component

Jsx literal(jsx 字面值)

```jsx
const element = <h1>Hello, world!</h1>;
export default element; // this is not a component
```

## Component Compose of other Component

component-a.jsx

```jsx
const componentA = () => {
    return <h1>Hello, world!</h1>;
}
```

component-b.jsx

```jsx
import A from './component-a.jsx';

function B() {
    return (
        <div>
            <A />
        </div>
    );
}
```

## lifecycle

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

## handling events

```jsx
function form
```