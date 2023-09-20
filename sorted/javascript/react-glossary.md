# React - Glossary

* [Reactive Values](#reactive-values)
* [hydration](#hydration)

## Reactive Values

1. [useState value](react-hooks-usestate.md)

```js
const [count, setCount] = useState(0);
```

2. component [props](react-component-props.md)

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

> [reference variables](react-hooks-useref.md) are not reactive values

## hydration

- process of **load JS** makes the page interactive that loaded by browser

