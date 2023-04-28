# HTMLElement

- [HTMLElement.style](#htmlelementstyle)
- [HTMLElement.offsetTop](#htmlelementoffsettop)
- [HTMLElement.offsetParent](#htmlelementoffsetparent)


## HTMLElement.style

getting style

- property `style` is a `CSS StyleDeclaration` object
- **DOES NOT CANTAIN** style inherited from
  - document
  - external style sheets, eg: `<link rel="stylesheet" href="style.css">`

```javascript
const x = document.getElementById("maze").style.property;
```

setting style

- althougth `style` is a read-only property
- it can be set by assigning string directly to it
- `element.style.cssTest` will completely overwrite the existing style
- Therefore, set individual properties on the `CSSStyleDeclaration` object

```js
element.style.backgroundColor = "red";
```

## HTMLElement.offsetTop

- read-only property
- distance of outer border relative to the inner border of the top of [offsetParent](#htmlelementoffsetparent)

## HTMLElement.offsetParent

- represent current element closest [positioned ancestor element](../webdev/css-positioning.md#positioned-element)

## HTMLElement.offsetHeight

- read-only property
- **height of the element**, including vertical padding and border, in pixels

## HTMLElement.offsetWidth

- read-only property
- **width of the element**, including horizontal padding and border, in pixels

