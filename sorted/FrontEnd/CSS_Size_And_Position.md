# 尺寸位置

## 盒子模型

- CSS中的所有元素都有一个盒子模型

层次关系

> margin: 用**空白区域**扩展边框
>> border: 扩展自padding
>>> padding: 扩展自内容边界
>>>> content edge: 内容区域, 用来限制内容区域(content area)

## 设置尺寸

> width, height

***

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
  - 脱离normal document flow[文档流]
- 固定定位: `position: fixed`
  - 相对位置窗口固定
  - 脱离[normal document flow](CSS_Normal_Flow.md)

定位上下文(Positioning contexts)

## 浮动

- 浮动元素是指元素的float属性不为none
- 向左侧或右侧浮动, 允许浮动元素被text和inline元素包围
- 脱离[normal flow](CSS_Normal_Flow.md)

元素是如何浮动的

1. 脱离normal flow
2. 移动到container的边界或其他浮动元素的边界

## display属性

- block: 独占一行，可以修改宽高，标签h1-h6, p, div默认block
- inline: 共占一行，不能修改宽高，标签span, a, b, i, u, s默认inline
- inline-block: 共占一行，可以修改宽高, input, img默认inline-block
- none: 隐藏元素

## overflow

[overflow](CSS_Overflow.md)

## flex模型

- main axis
- cross axis
- flex container: 属性设置为display: flex的元素称为flex container

flex container属性

- `flex-direction: row;`:  设置main axis方向, 默认是row
- `flex-wrap: wrap;`: 包装
- `flex-flow: row wrap;`: 等于同时设置flex-direction, flex-wrap
- `aligin-items: center`: 

flex中元素属性

- `flex: 200px`: 最小宽度
- `flex: 2`: 所占单元格数量
- flex
  - flex-grow: item比例
  - flex-shrink: 最小可收缩到的尺寸
  - flex-basis: 

```css
article {
    flex: 1 200px;
}

article:nth-of-type(3) {
    flex: 2 200px;
}
```

flex item最小尺寸200px, 剩余空间按比例分配

## 对齐

- vertical-align: 纵向对齐
  - baseline
  - top
  - middle
  - bottom
  - sub
  - text-top

## z-index

***

## 包含块和布局

> 元素的尺寸和位置常常受到包含块的影响, 如width, height, padding, margin, position的top, right, bottom, left

- 元素的包含块: 包含该元素的块

确定包含块, 完全依赖于元素的position属性

- 如果position属性为static, relative, sticky
  - 其包含块可能由最近的祖先块元素的内容区边缘组成
- 如果position属性为absolute
  - 包含块由最近的position不是static的祖先元素的padding边缘组成
- 如果position属性是fixed
  - 在continuous media情况下, 包含块是viewport, 分页媒体是page area
- 如果position是absolute或fixed, 包含块可能由满足以下条件的最近父级元素的padding的边缘组成
  - transform或perspective的值不为none
  - will-chang的值是transform或perspective
  - filter的值不是none 或 will-change的值是filter
  - contain的值是paint
