# Component Props

* [Feature](#feature)
* [props is a buit-in Object in react component](#props-is-a-buit-in-object-in-react-component)
* [As component Attribute](#as-component-attribute)
* [Passing JSX as children](#passing-jsx-as-children)
* [Define props for Component](#define-props-for-component)
* [Set props for Component](#set-props-for-component)

## Feature

> props are unchangeable

- change props is ask parent component change the components attribute

## props is a buit-in Object in react component

welcome.js

```js
const p = { name: "Sara" };
export default function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// props same as {name}
export function SameWelcome({name}) {
  return (
    <h1>Hello, {name}</h1>
  )
}
```

## As component Attribute

- `props` is name of function argument
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

`<Welcome name="Sara" age="18">` equilavent to `{Welcome({name: "Sara", age: "18")} `

use props spread syntax, pass parent component's props to child component, can simplify code

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

- `<Welcome {...props}>` is the spread syntax

## Passing JSX as children

for to use component as a wrapper like: `<parent><child /></parent>`

- both parent and child are react component

`children` is a property of `props` object, will receive content inside this JSX tag

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

## Define props for Component

for react component `Avatar.js`

```js
function Avatar({ person, size }) {
  // component detail
}
```

or

```js
function Avatar(props) {
  // component detail
}
```

## Set props for Component

then parent to set the component attribute

```js
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <Avatar person="Sara" size="18" />
    </div>
  );
}
```

or

```js
function App(props) {
  return (
    <div>
      <Avatar {...props} />
    </div>
  );
}
```

