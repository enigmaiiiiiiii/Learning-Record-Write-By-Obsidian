# Component Props

## props is a buit-in react object

welcome.js

```js
const p = { name: "Sara" };
export default function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// props same as {name}
export function SameWelcome({name}) {
  return <h1>Hello, {name}</h1>; 
}
```

## As component Attribute

- `prop` is name of function argument
-  Object's **property** is the component's **attribute**

```js
function Welcome({ name, age }) {
    return (
        <h1>
            Hello, {name}, {age}
        </h1>
    );
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
  )
}
```

-   `<Welcome {...props}>` is the spread syntax

## Passing JSX as children

- `children` is a property of `props` object, will receive content inside this JSX tag

```js
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar /> 
    </Card>
  );
}
```

## props are unchangeable

- change props is ask parent component change the components attribute

