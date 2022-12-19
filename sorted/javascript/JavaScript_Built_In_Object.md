# 内置对象

## JSON

JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。

```js
console.log(JSON.stringify({x: 5, y: 6}));  // {"x":5,"y":6}
```

## Function

- 每个函数都是一个Function对象

> function(){}.constructor === Function

## setTimeout

set a timer which executes a function or specified piece of code once the timer expires

Syntax:

- `setTimeout(function, delay, param1, param2, ...) `

Parameters:

- `function`: the function to be executed
- `delay`: the number of milliseconds to wait before the function is executed
- `param1, param2, ...`: optional parameters to be passed to the function

## setInterval

set a timer which executes a function or specified piece of code **repeatedly**, with a fixed time delay between each call to the function

Syntax:

- `setInterval(function, delay, param1, param2, ...)`

Parameters

- same to `setTimeout`

