# 定位

- [position ](#position-property)
- [position: static](#position-static)
- [position: relative](#position-relative)
- [position: absolute](#position-absolute)
- [position: fixed](#position-fixed)
- [position: sticky](#position-sticky)
- [positioned element](#positioned-element)
- [Positioning Contexts](#positioning-contexts)
- [align](#align)

## what it is

> 允许从Normal Flow中取出元素, 并使他们具有不同的行为, 如放在另一个元素上，或保持在浏览器同一位置

## position: static

- **default** position value
- 仅仅意味着将元素放入它在Normal Flow中的**常规**位置
- `top, right, bottom, left` has no effect

## position: relative

- 允许通过属性**top, right, bottom, left**来修改元素在文档中的位置
- `top, right, bottom, left` 可以理解为**力的来源**方向

## position: absolute

- 允许通过属性**top, right, bottom, left**来修改元素在**文档**中的位置
- 定位相对于最近的**positioned ancestor**或[containing block](css-containing-block.md)
- removed from [normal document flow](css-normal-flow.md)
- 大多数时候height或width设置为auto以适应其内容, 或用来填充可用空间

## position: fixed

- positioned relative to the initial [**containing block**](css-containing-block) [**established by viewport**](css-containing-block.md)
  - except ancestors has `transform` or `perspective` , or `filter` property set to something other than `none`

> in most cases, relative to the browser window

- **remove** [normal document flow](css-normal-flow.md)
- final position determine by `top`, `right`, `bottom`, `left`

> won't be rendered before one of `top`, `right`, `bottom`, `left` properties set

## position: sticky

a hybrid between `relative` and `fixed`

- act like **relative** position until scroll to a certain threshold
- then act like **fixed** positioned
- but the space it takes up is still calculated as if it were **relative** positioned

```css
.box {
  position: sticky;
  top: 100px;
}
```

- when sticky element top property larger than 100px
  - positioned as `relative`
- when sticky element top property smaller than 100px
  - positioned as `fixed` at `top: 100px`

> [sticky sidebar inside box](sticky-inside-box.md)

stick to the nearest **scrolling ancestor**

- scrolling ancestor is the nearest ancestor with scrolling mechanism
- scrolling ancestor is:
  - overflow is `hidden`, `auto`, `scroll`, `overlay`
    - note that with `overflow: hidden`, the element seems like relative to its ancestor
    - cause there is no scrollbar
  - have fixed height or width

[sticky and overflow](css-sticky-and-overflow.md)

必须指定top, right, bottom, left中的一个, 从而使sticky正常工作

## positioned element

- position value is relative, absolute, fixed, sticky

## Positioning Contexts

## align

vertical-align: 纵向对齐

- baseline
- top
- middle
- bottom
- sub
- text-top