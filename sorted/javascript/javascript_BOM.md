# BOM

- Browser Object Model
- window对象，提供全局属性和方法, 可以省略window

方法

- isNaN(number)判断是否是数字
- setInterval(handler: TimeHandler, timeout?: number): 设置定时器, 每number毫秒执行一次TimeHandler
  - TimeHandler: [函数对象](JavaScript_Function.md)
  - number: 毫秒

## location对象

- location: 浏览器连接到的对象位置
- location.href: 包含整个URL
- location.host: 包含了一个DOMString, 表示主机地址, 可能包含端口号 
