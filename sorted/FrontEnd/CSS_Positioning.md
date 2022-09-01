# 定位

## position属性

> 允许从Normal Flow中取出元素, 并使他们具有不同的行为, 如放在另一个元素上，或保持在浏览器同一位置

- 静态定位: `position: static`,
  - 默认定位方式
  - 仅仅意味着将元素放入它在Normal Flow中的正常位置
- 相对定位: `position: relative`
  - 允许通过属性top, right, bottom, left来修改元素在文档中的位置
    - top, right, bottom, left可以理解为力的来源方向
- 绝对定位: `position: absolute`
  - 允许通过属性top, right, bottom, left来修改元素在文档中的位置
  - 相对于最近的**positioned ancestor**
  - 脱离normal document flow[文档流](CSS_Normal_Flow.md)
- 固定定位: `position: fixed`
  - 相对位置窗口固定
  - 脱离[normal document flow](CSS_Normal_Flow.md)

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