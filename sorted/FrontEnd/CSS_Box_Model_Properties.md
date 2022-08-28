# 盒子属性

- 这些属性在[block box](CSS_Box_Model_Sorted.md#block-box)中可以被完全体现
- 而部分作用于[inline box](CSS_Box_Model_Sorted.md)

## 内容区域

- 属性: width, height
  - 不能取负值
- 取值类型
  - 大小: 直接指定大小
  - 百分比: 按[containing block](CSS_Containing_Block.md)百分比设置大小

## 内边界

- 属性: padding
  - `padding: 20px 10px;`: 纵向padding 20px, 横向padding 10px
  - `padding: 1px 2px 3px 4px;`: 以"上"为起点, 顺时针设置padding

## 边框(border)

- 属性: border
  - 共四个边框, 每个边框可以设置style, width, color, 每个边框可独立设置
- 绘制在padding和margin之间

## 外边界(margin)

- 属性: margin
  - 可以是负值
- margin不包括在box的实际尺寸中, 属于不可见宽度

[外边距塌陷](CSS_Mastering_Margin_Collapsing.md)