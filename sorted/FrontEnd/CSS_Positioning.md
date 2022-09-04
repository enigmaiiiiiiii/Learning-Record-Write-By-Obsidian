# 定位

## position属性

> 允许从Normal Flow中取出元素, 并使他们具有不同的行为, 如放在另一个元素上，或保持在浏览器同一位置

- `position: static`: 静态定位
  - **默认**定位方式
  - 仅仅意味着将元素放入它在Normal Flow中的正常位置
- `position: relative`: 相对定位
  - 允许通过属性top, right, bottom, left来修改元素在文档中的位置
    - top, right, bottom, left可以理解为力的来源方向
- `position: absolute`: 绝对定位
  - 允许通过属性top, right, bottom, left来修改元素在文档中的位置
  - 定位相对于最近的**positioned ancestor**或[containing block](CSS_Containing_Block.md)
  - 脱离normal document flow[文档流](CSS_Normal_Flow.md)
  - 大多数时候height或width设置为auto以适应其内容, 或用来填充可用空间
- `position: fixed`: 固定定位
  - 相对位置**窗口**固定
  - 脱离[normal document flow](CSS_Normal_Flow.md)

> positioned element(定位元素): position属性为，relative, absolute, fixed, sticky的元素  

定位上下文(Positioning contexts)

## 浮动

- 浮动元素是指元素的float属性不为none
- 向左侧或右侧浮动, 允许浮动元素被text和inline元素包围
- 脱离[normal flow](CSS_Normal_Flow.md)

元素是如何浮动

1. 脱离normal flow
2. 移动到[container]的边界或其他浮动元素的边界

## 对齐

- vertical-align: 纵向对齐
  - baseline
  - top
  - middle
  - bottom
  - sub
  - text-top