# javascript document object

## Properties

element

- `document.documentElement`: the **root element** of the document

activeElement

- current focus element
- often will return `HTMLInputElement` or `HTMLTextAreaElement`
- user can press the tab key to move switch focus to different elements
- can be used to check current focus element

```js
isFocus = document.activeElement === targetElement
```

## Methods

## Best Practices

Get DOM Element

- return an element whose `id` is `maze`

```js
var x = document.getElementById("maze");
```

- get element by [css selector](css-selector.md)

```javascript
document.querySelector("#maze");
```

