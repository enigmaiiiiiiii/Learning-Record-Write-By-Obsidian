# React Glossary

## Reactive value

[useState value](react-hooks-usestate.md)

```js
const [count, setCount] = useState(0);
```

component [prop](react-component-props.md)

```js
function MyComponent(props) {
  return <div>{props.count}</div>;
}
```

All variables declared in the component body

```js
function ChatRoom({ roomId, selectedServerUrl}) {
  const settings = useContext(SettingConetext);
  const serverUrl = selectedServerUrl || settings.serverUrl;
}
```
