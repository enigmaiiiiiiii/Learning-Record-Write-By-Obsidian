# CSS包含块

- 包含块大多数时候是ancester中最近的**block-level元素**, 并不总是
- **确定包含块的意义**: 元素的尺寸和位置常常受到包含块的影响, 如width, height, padding, margin, position的top, right, bottom, left

如何确定包含块, 完全依赖于元素的[position](CSS_Positioning.md)属性

- 如果position属性为static, relative, sticky
  - 其包含块可能由最近的祖先块元素的内容区边缘组成
  - 可能是一个block container
  - 可能是新的[formatting context]
- 如果position属性为absolute
  - 包含块由最近的position不是static的祖先元素的padding边缘组成
- 如果position属性是fixed
  - 在continuous media情况下, 包含块是viewport, 分页媒体是page area
- 如果position是absolute或fixed, 包含块可能由满足以下条件的最近父级元素的padding的边缘组成
  - transform或perspective的值不为none
  - will-change的值是transform或perspective
  - filter的值不是none 或 will-change的值是filter
  - contain的值是paint
