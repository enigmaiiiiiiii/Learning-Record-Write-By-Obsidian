# React JSX

## What is JSX

- `.jsx`是JavaScript语法的扩展

> compare to [.Vue](vue.md), `.Vue` is HTML 语法的扩展

- jsx将标记和逻辑组合在一起

## Take a Look

```js
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
const welcome = <h1>Hello, {formatName(user)}</h1>;
const todoList = (
    <ul style={{
          backgroundColor: 'black',
          color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
    </ul>
)

export default function demo() {
    return (
        <div>
            {welcome}
            {todoList}
        </div>
    )
}
```

look at this code:

`const element = <h1>Hello,{formatName(user)}</h1>`;

this code contains the essential of jsx syntax

there are two key point in previous code:

1. jsx treat `<h1>Hello, {formatName(user)}</h1>` as an **expression**

> 这条语句在js语法中是不允许的, compile this will report `Unexpected token '<'`

2. `{ }`是一个**标记** 

- use a variable in `{ }`
- Javascript expression will work between `{ }`

3. `{{ }}`

- 可以用来设置style
- 或传递一个[Object](javascript-object.md)

## jsx语句是一个表达式

- 这表示jsx语句可以在if语句和for语句中使用

```js
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>
}
```

## Rules of JSX

1. Return a sighle root element

- `<></>` is available

2. camelCase name for attribute

## group html element

- 使用`(...)`组合html element

```jsx
const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
)
```

## React.createElement()

```jsx
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);
```

上面代码等价于

```jsx
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);
```

