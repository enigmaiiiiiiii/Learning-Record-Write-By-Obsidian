# Components

- [Components](#components)
  - [they are components](#they-are-components)
  - [this is not a component](#this-is-not-a-component)
  - [Props](#props)
  - [State](#state)
  - [use a component](#use-a-component)
  - [Component Compose of other Component](#component-compose-of-other-component)
  - [keep component pure](#keep-component-pure)
  - [class properties](#class-properties)
  - [lifecycle](#lifecycle)
  - [handling events](#handling-events)
  - [effect](#effect)

## they are components

-   component is a [javascript function](JavaScript_Function.md)

> component 有 class 的形式, 但是 class 本质上还是一个 function

**function component**

-   `props` are read-only, function body must not change `props`

```jsx
function Welecom(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

**class component**

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

## Props

[Props](React_Component_Props.md)

- as component attribute
- use nest Children Component or HTML tag inside a **JSX tag**

## State

[State](React_Component_State.md)

- a data can be changed

## use a component

-   lowercase tag name: html tag, `<section>, <div>`
-   区别于 html 标签, react 组件规定 start with capital, like `<Welcome />`

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
};
```

component-b.jsx

```jsx
import A from "./component-a.jsx";

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

-   change its input

```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

## class properties

-   defaultProps
-   displayName


## lifecycle

[Lifecycle](React_Component_Lifecycle.md)

## handling events

```jsx
function Button({ handleClick }) {
    return <button onClick={handleClick}>Click me</button>;
}
export default function Toolbar() {
    return (
        <div>
            <Button handleClick={() => alert("clicked")} />
        </div>
    );
}
```

event propagation(事件传播)

事件传播方向 from a children, up to the tree

```js
const element = (
    <div className="Toolbar" onClick={() => alert("from children")}>
        <Button onClick={() => alert("click button")}>click me</Button>
    </div>
);
```

阻止事件传播, 使用 `e.stopPropagation()`

```js
<Button
    onClick={(e) => {
        e.stopPropagation();
        onClick();
    }}
>
    click me
</Button>
```

阻止默认事件, 使用 `e.preventDefault()`

-   以 form 为例, 默认事件是提交表单, 页面刷新
-   使用 `e.preventDefault()`, 阻止页面刷新

```js
<form
    onClick={(e) => {
        e.preventDefault();
        onClick();
    }}
>
    <input />
    <button>send</button>
</form>
```

## effect
