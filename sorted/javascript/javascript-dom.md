# DOM

- [Node](#node)
- [Document](#document)
- [Element](#element)
- [Select DOM Element](#select-dom-element)
- [EventTarget.addEventlistener()](#eventtargetaddeventlistener)
- [HTMLCollection](#htmlcollection)
- [XMLHttpRequest](#xmlhttprequest)

## DOMRect

- [DOMRect](javascript-dom-domrect.md)

properties

- x, y: position of the top-left corner of the rectangle
- width, height: rectangle size include padding and border width

## Node

- represents a node in the DOM tree

remove all child node

```js
while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
}
```

> use for ... of modifying the DOM tree will cause unintended consequences

## Document

- is a Special [Node](#node) represents the entire Web page

[Document Object](javascript-dom-document.md)

## Element

- Every Element is a [Node](#node)
- but not every Node is an Element

structure

- [Element](javascript-dom-element.md)
  - [HTMLElement](javascript-dom-htmlelement.md)
  - [HTMLCanvasElement](javascript-dom-htmlcanvaselement.md)

## Event

[event](javascript-dom-event.md)

## Select DOM Element

- 文档对象模型(Document Object Model)
- 用document表示HTML对象

返回查找id为maze的HTML元素

```javascript
var x = document.getElementById("maze");
```
使用css选择器选择document对象

```javascript
document.querySelector("#maze");
```

- 选择`id='maze'`的元素, 参数格式为[css选择器](css-selector.md)

## EventTarget.addEventlistener()

- 为目标添加事件监听器, 目标可以是Element, Document, Window

`EventTarget.addEventListener(type, listener[, options])`

- type: 表示事件的区分大小的字符串
- listener: 接收到[事件通知]时调用的函数

## HTMLCollection


## XMLHttpRequest

[XMLHttpRequest](javascript-xmlhttprequest.md)

- 允许页面在不刷新的情况下与服务器交换数据
- 大量用于AJAX编程
