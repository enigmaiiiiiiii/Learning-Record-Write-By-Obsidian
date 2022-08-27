# 尺寸位置

## 盒子模型

[盒子模型](CSS_Box_Model.md)

## 内容区域

- width, height设置内容区域大小
- 取值类型
  - 大小: 直接指定大小
  - 百分比: 按[containing block]百分比设置大小

## 内边界

- padding

## 边框

- border

## 外边界

- margin

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

元素是如何浮动

1. 脱离normal flow
2. 移动到container的边界或其他浮动元素的边界

## display属性

- 决定一个元素的内部和外部显示类型
  - 外部类型决定元素是块级元素还是行内元素
  - 内部类型控制子元素的布局

设置元素本身表现方式

- block: 生成一个块级元素, 标签h1-h6, p, div默认block
- inline: 生成一个行内元素, 标签span, a, b, i, u, s默认inline

设置内部元素表现方式

- flow: 元素的内容将使用[flow布局](CSS_Normal_Flow.md)(block and inline layout)
- flow-root: ~~~创建新的[BFC](CSS_Block_Formatting_Context.md), 定义根位置~~~
- table
- flex
- grid
- ruby

预设类型

- inline-block: 等价于inline flow-root

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

- 包含块大多数时候是ancester中最近的[block-level元素](HTML_Element_Sort.md#块级元素)
- **确定包含块的意义**: 元素的尺寸和位置常常受到包含块的影响, 如width, height, padding, margin, position的top, right, bottom, left

如何确定包含块, 完全依赖于元素的position属性

- 如果position属性为static, relative, sticky
  - 其包含块可能由最近的祖先块元素的内容区边缘组成
- 如果position属性为absolute
  - 包含块由最近的position不是static的祖先元素的padding边缘组成
- 如果position属性是fixed
  - 在continuous media情况下, 包含块是viewport, 分页媒体是page area
- 如果position是absolute或fixed, 包含块可能由满足以下条件的最近父级元素的padding的边缘组成
  - transform或perspective的值不为none
  - will-change的值是transform或perspective
  - filter的值不是none 或 will-change的值是filter
  - contain的值是paint
