# BOM

- 浏览器对象模型(Browser Object Model)
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
- location.search: 包含了一个DOMString, 表示URL中的查询字符串(?后面的部分)

## localStorage

- 用于将数据**持久化存储**在**本地**
- 也被称为离线存储
- setItem(key, value): 保存数据
- getItem(key): 获取数据

## sessionStorage

- 适合不需要持久保存
- 只对窗口/选项卡可见

## history对象

- 浏览器的会话历史，不是WebExtensions history
- back(), forward(), go()方法来完成在记录中向后向前跳转

## window对象

[Window](JavaScript_BOM_Window.md)

## Navigator

[Navigator](JavaScript_BOM_Navigator.md)
