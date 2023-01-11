# HTMLElement


## HTMLElement.style

getting style

- style属性是一个CSS StyleDeclaration对象
- **不包含**通过层叠机制从文档样式和外部样式中继承而来的样式

```javascript
var x = document.getElementById("maze").style.property;
```

setting style

- althougth `style` is a read-only property
- it can be set by assigning string directly to it
- `element.style.cssTest` will completely overwrite the existing style
- Therefore, set individual properties on the `CSSStyleDeclaration` object

```js
element.style.backgroundColor = "red";
```