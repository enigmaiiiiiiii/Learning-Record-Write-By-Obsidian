# CSS Box Attribute

- [Feature](#feature)
- [Content](#content)
- [padding](#padding)
- [border](#border)
- [margin](#margin)


## Feature

- 这些属性在[block box](css-box-model-sorted.md#block-box)中可以被完全体现
- 而部分作用于[inline box](css-box-model-sorted.md)

## Content

width, height

- 不能取负值
- 取值类型
  - 大小: 直接指定大小, 如`width: 100px;`
  - 百分比: 按[containing block](css-containing-block.md)百分比设置大小

max-width, max-height, min-width, min-height

- 如果容器内容数量是变化的, 元素大小会随着调整, min/max可以限制元素的调整范围
- Values
  - max-content:
  - min-content:
  - `<percentage>`:

## padding

> 内边距

- 属性: padding
  - `padding: 20px 10px;`: 纵向padding 20px, 横向padding 10px
  - `padding: 1px 2px 3px 4px;`: 以"上"为起点, 顺时针设置padding
- 百分比: 基于containing block的padding设置

## border

> 边框

- 属性: border
  - 共四个边框, 每个边框可以设置style, width, color, 每个边框可独立设置
- 绘制在padding和margin之间

## margin

> 外边距

- 属性: margin
  - 可以是负值
- margin不包括在box的实际尺寸中, 属于不可见宽度
- 百分比: 基于containing block的margin设置

[Margin Collapsing](css-mastering-margin-collapsing.md)
