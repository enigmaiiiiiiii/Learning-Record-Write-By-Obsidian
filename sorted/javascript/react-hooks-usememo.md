# React Hooks useMemo

## what is this

- cache **calculate value** between re-renders
- compare calculate value

## Reference

```js
const cachedValue = useMemo(calculateValue, dependencies)
```

- calculateValue:
  - a **function** calculate the value
  - this function **take no arguments**
- dependencies: reactive values

## when to use

- calculate noticeably slow and dependencies rarely change
