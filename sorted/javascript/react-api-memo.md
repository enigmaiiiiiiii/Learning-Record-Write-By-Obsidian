# React API memo

## what is this

- skip re-rendering of a **component** when its **props** are **unchanged**
- it will compare the component props
- it is a optimization

## feature

- if its [state](react-hooks-usestate.md) changes, it will still re-render
- if the [context](react-hooks-usecontext.md) that it's using changes, it will still re-render

## Reference

`memo(Component, arePropsEqual)`

parameter

- `Component`: React Component
- `arePropsEqual`
  - function that accepts two arguments: 1. `oldProps` 2. `newProps`
  - should return true if old and new props are equal
  - Usually not specify this function, react compare each props with [`Object.is`](javascript-global-object.md) by default

returns

- return a new component

## Usage

```js
const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
})
export default Greeting;
```
