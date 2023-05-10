# BOM

- [Browser Object Model](#browser-object-model)
- [location对象](#location)
- [localStorage](#localstorage)
- [sessionStorage](#sessionstorage)
- [history对象](#history对象)
- [window对象](#window对象)
- [Navigator](#navigator)

## Browser Object Model

- 浏览器对象模型(Browser Object Model)
- window对象，提供全局属性和方法, 可以省略window

Method

- isNaN(number)判断是否是数字
- setInterval(handler: TimeHandler, timeout?: number): 设置定时器, 每number毫秒执行一次TimeHandler
  - TimeHandler: [函数对象](javascript-function.md)
  - number: 毫秒

## location

- location: 浏览器连接到的对象位置
- location.href: contains the entire URL
- location.host: contains a DOMString, represent the domain of the URL, maybe contains port number
- location.search: 包含了一个DOMString, 表示URL中的查询字符串(?后面的部分)

## localStorage

[localStorage](javascript-bom-localstorage.md)

## sessionStorage

[sessionStorage](javascript-bom-sessionstorage.md)

## history

- browser session history，not WebExtensions history
- provide `back()`, `forward()`, `go()` methods to jump backward or forward through the history stack

## window

[Window](javascript-bom-window.md)

## Navigator

[Navigator](javascript-bom-navigator.md)
