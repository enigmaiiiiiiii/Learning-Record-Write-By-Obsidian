# Components

- [Components](#components)
  - [they are components](#they-are-components)
  - [this is not a component](#this-is-not-a-component)
  - [Passing Props](#passing-props)
  - [use a component](#use-a-component)
  - [Component Compose of other Component](#component-compose-of-other-component)
  - [keep component pure](#keep-component-pure)
  - [class properties](#class-properties)
  - [instance properties](#instance-properties)
  - [lifecycle](#lifecycle)
  - [handling events](#handling-events)


## they are components

- component is a [javascript function](JavaScript_Function.md)

> component 有class的形式, 但是class本质上还是一个function

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

`<h1> hello </h1>` is **Jsx literal**(jsx 字面值)

```jsx
const element = <h1>Hello, world!</h1>;
export default element; // this is not a component
```

## Passing Props

- props is argument of function
- props is an Object
- Object's **property** is the component's **attribute**

```js
function Welcome({name, age}) {
    return <h1>Hello, {name}, {age}</h1>;
}
export default function paramedWelcome() {
    return <Welcome name="Sara" age="18" />;
}
```

`<Welcome name="Sara" age="18">` 等价于 `{Welcome({name: "Sara", age: "18")} `

使用 props 传播语法, 将父组件参数传递给子组件, 可以简化代码

```jsx
funciton Welcome(props) {
    return <h1>Hello, {props.name}, {props.age}</h1>;
}
export default function paramedWelcome(props) {
    return (
        <div>
            <Welcome {...props} />;
        </div>
}
```

- `<Welcome {...props}>` is the spread syntax

## use a component

- lowercase tag name: html tag, `<section>, <div>`
- 区别于html标签, react组件规定start with capital, like `<Welcome />`

```js
function Welcome(props) {
    return <h1> Hello, {props.name}</h1>;
}
export default function threeWelcome() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}
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

## keep component pure

pure function

```js
function sum(a, b) {
    return a + b;
}
```

impure function

- change its input

```js
function withdraw(account, amount) {
    account.total -= amount;
}
```

## class properties

- defaultProps
- displayName

## instance properties

- props
- state

props

- [ ] to do

state

- contains data specific **to this component** that may **change over time**
- what value don't need put in state?
    - used fro rendering
    - data flow(like a timer ID)
- use `setState()` to update state

## lifecycle

[Lifecycle](React_Component_Lifecycle.md)

## handling events

```jsx
function Button({handleClick}) {
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
export default function Toolbar() {
    return (
        <div>
            <Button handleClick={() => alert('clicked')} />
        </div>
    )
}
```

event propagation(事件传播)

事件传播方向 from a children, up to the tree

```js
const element = (
    <div className="Toolbar" onClick={()=>alert("from children")}>
        <Button onClick={()=>alert("click button")}>
            click me
        </Button>
    </div>
)
```

阻止事件传播, 使用 `e.stopPropagation()`

```js
<Button 
    onClick={ e => {
        e.stopPropagation();
        onClick();
}}>
    click me
</Button>
```

阻止默认事件, 使用 `e.preventDefault()`

- 以form为例, 默认事件是提交表单, 页面刷新
- 使用 `e.preventDefault()`, 阻止页面刷新

```js
<form
    onClick={e => {
        e.preventDefault();
        onClick();
}}>
    <input/>
    <button>send</button>
</form>
```
