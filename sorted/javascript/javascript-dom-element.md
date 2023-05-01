# DOM Element

## summary

**scroll** related

- [scrollTop](#scrolltop)

**size** related

- [clientWidth](#clientwidth)

## 1. property

### scrollTop

- if content does not generate a vertical scrollbar, `scrollTop` is 0
- if value is negative, `scrollTop` is set to 0

### clientWidth

- includes [padding](css-box-model-properties.md)
- but exculdes [border, margin](css-box-model-properties.md), scrollbars
- read only

## 2. method

scroll

- `scrollIntoView()`

position only

size only

position and size

- `getBoundingClientRect()`
  - return [DOMRect](javascript-dom.md#domrect) object

modify

- `appendChild()`