# What is JSX

- `.jsx`是JavaScript语法的扩展

> compare to [.Vue](Vue.md), `.Vue` is HTML 语法的扩展

1. jsx将标记和逻辑组合在一个文件中

## Take a Look

```jsx
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
const element = <h1>Hello, {formatName(user)}</h1>;
```

look at this code: 

`const element = <h1>Hello,{formatName(user)}</h1>`;

this code contains the essential of jsx syntax

there are two key point in previous code:

1. jsx treat `<h1>Hello, {formatName(user)}</h1>` as an **expression**

> 这条语句在js语法中是不允许的, compile this will report `Unexpected token '<'`

2. `{}`是一个**标记**, 使用`{}`, 可以传递expression

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
```

