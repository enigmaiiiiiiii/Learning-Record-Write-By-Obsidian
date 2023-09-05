# React Glossary

- [Reactive value](#reactive-value)

## Reactive value

1. [useState value](react-hooks-usestate.md)

```js
const [count, setCount] = useState(0);
```

2. component [prop](react-component-props.md)

```js
function MyComponent(props) {
  return <div>{props.count}</div>;
}
```

3. All variables declared in the component body

```js
function ChatRoom({ roomId, selectedServerUrl}) {
  const settings = useContext(SettingConetext);
  const serverUrl = selectedServerUrl || settings.serverUrl;
}
```

## hydration

- process of **load JS** makes the page interactive that loaded by browser
