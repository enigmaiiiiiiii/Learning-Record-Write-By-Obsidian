# 定位

## position属性

> 允许从Normal Flow中取出元素, 并使他们具有不同的行为, 如放在另一个元素上，或保持在浏览器同一位置

`position: static`: 静态定位

- **默认**定位方式
- 仅仅意味着将元素放入它在Normal Flow中的**常规**位置
- `top, right, bottom, left` has no effect

`position: relative`: 相对定位

- 允许通过属性top, right, bottom, left来修改元素在文档中的位置
- `top, right, bottom, left` 可以理解为**力的来源**方向

`position: absolute`: 绝对定位

- 允许通过属性top, right, bottom, left来修改元素在**文档**中的位置
- 定位相对于最近的**positioned ancestor**或[containing block](CSS_Containing_Block.md)
- 脱离normal document flow[文档流](CSS_Normal_Flow.md)
- 大多数时候height或width设置为auto以适应其内容, 或用来填充可用空间

`position: fixed`: 固定定位

- 相对位置**窗口**固定
- 脱离[normal document flow](CSS_Normal_Flow.md)

`position: sticky`: 粘性定位

[sticky sidebar inside box](sticky-inside-box.md)

- 相对于最近的[Containing Block]()定位, 使用top, right, bottom, left属性定位
- 必须指定top, right, bottom, left中的一个, 使sticky正常工作

## positioned element

- positioned element(定位元素): position属性为，relative, absolute, fixed, sticky的元素

## 定位上下文(Positioning contexts)

- [ ] todo

## 对齐

vertical-align: 纵向对齐

- baseline
- top
- middle
- bottom
- sub
- text-top