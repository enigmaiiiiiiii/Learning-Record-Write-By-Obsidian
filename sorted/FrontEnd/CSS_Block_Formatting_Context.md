# BFC

- Block formatting context 块格式化上下文

## 创建BFC的情况

- [x] 文档根元素, root element of document, `<html>`
- [x] float elements(float属性不等于none)
- [x] Absolutely positioned elements, `position: absolute or fix`
- [x] Inline-block(display: inline-block)
- [ ] Table cells
- [ ] Table captions
- [ ] Anonymous table cells
- [ ] overflow值不为visible, clip的块元素(Block elements where overflow has visible, clip
- [ ] display值为flow-root
- [ ] contain值为layout, content, paint
- [ ] 弹性元素(display为flex或inline-flex), 如果本身不是flex, grid, table容器
- [ ] 网格元素(display为grid或inline-grid), 如果本身不是flex, grid, table容器
- [ ] 多列容器值不为auto
- [ ] column-span值为all的元素始终会创建一个新的BFC, 即使该元素包裹在一个多列容器中

## 