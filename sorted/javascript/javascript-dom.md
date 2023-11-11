# JavaScript - DOM

* [document](#document)
* [Element](#element)
* [Event](#event)
* [DOMRect](#domrect)
* [Node](#node)
* [EventTarget](#eventtarget)
* [HTMLCollection](#htmlcollection)

## window

[Window](javascript-bom-window.md)

## document

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

## DOMRect

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

## EventTarget

- an interface implemented by objects that can receive events and may have listeners for them
- document, window, and Element implement the EventTarget interface

method `EventTarget.addEventlistener(type, listener[, options])`

- `type`: case-sensitive string representing [event type](javascript-dom-event.md) to listen for
- `listener`: what will do when specified event occurs, when allowed value types
  - null
  - function
  - an object with `handleEvent()`
- `options`

## HTMLCollection


