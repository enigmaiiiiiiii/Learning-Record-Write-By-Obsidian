# 内置对象

## JSON

`JSON.stringify()` 方法用于将 JavaScript Object 转换为 JSON 字符串。

```js
console.log(JSON.stringify({x: 5, y: 6}));
// {"x":5,"y":6}
```

## Function

- 每个函数都是一个Function对象

> function(){}.constructor === Function

## setTimeout()

set a timer which executes a function or specified piece of code once the timer expires

Syntax:

- `setTimeout(function, delay, param1, param2, ...) `

Parameters:

- `function`: the function to be executed
- `delay`: the number of milliseconds to wait before the function is executed
- `param1, param2, ...`: optional parameters to be passed to the function

return value

- a positive integer means timeoutID

## setInterval()

set a timer which executes a function or specified piece of code **repeatedly**, with a fixed time delay between each call to the function

Syntax:

- `setInterval(function, delay, param1, param2, ...)`

Parameters

- same to `setTimeout`

## setImmediate()

- 中断长时间运行的操作
- 在浏览器完成其它操作后执行
- nodejs中[setImmediate()](nodejs-timers.md#setimmediate)

## clearTimeout()

`clearTimeout(timeoutID)`

- clear a timeout previously established by setTimeout()

## WeakMap

[WeakMap](javascript-built-in-object-weakmap.md)

## Intl

[Intl](javascript-built-in-object-intl.md)
