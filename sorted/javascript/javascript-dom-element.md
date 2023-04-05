# DOM Element

## property

**scroll** related

- scrollTop
  - if content does not generate a vertical scrollbar, `scrollTop` is 0
  - if value is negative, `scrollTop` is set to 0

**size** related

- clientWidth
  - includes [padding](css-box-model-properties.md)
  - but exculdes [border, margin](css-box-model-properties.md), scrollbars

## method

scroll

- Element.scrollIntoView()