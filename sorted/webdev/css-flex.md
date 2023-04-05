# flex

- [introduction](#introduction)
- [Main Axis](#main-axis)
- [Cross Axis](#cross-axis)
- [flex Container](#flex-container)
- [flex Property](#flex-property)
- [flex-grow](#flex-grow)
- [create gap](#create-gap)
- [rest space](#rest-space)

## what is this

- element set `display: flex` performance for outside like [**block box**](css-box-model-sorted.md#block-box)
- 一种将元素布局在单一维度的布局方式
- main axis: 元素分布维度
- cross axis: 元素分布维度的垂直方向
- **flex container**: 属性设置为 display: flex 的元素称为 flex container
- **flex item**: flex container 的所有子元素称为 flex item

## Main Axis

- main axis: 主轴, 默认是水平方向

`flex-direction: value;`定义主轴, value取值

- row: 水平方向
- row-reverse: 水平方向, 反向
- column: 垂直方向
- column-reverse: 垂直方向, 反向

## Cross Axis

- cross axis: 交叉轴, 默认是垂直方向

## flex Container

property

- `flex-direction: row;`: 设置 main axis 方向, 默认是 row
- `flex-wrap: wrap;`: 内容太多会换行显示
- `flex-flow: row wrap;`: 等于同时设置 flex-direction, flex-wrap
- `align-items: center`:

## flex Property

- set how **flex item** will grow

`flex` is shoothand for `flex-grow`, `flex-shrink`, `flex-basis`

- 1. `flex-grow: <number>`: ratio of how much of the **remaining space** should be assigned
  - default: 0
  - Nagative values are invalid
  - when number is positive, allow item to fill any available space
- 2. `flex-shrink`: when flex item is too big, how much should it shrink
  - default: 1
- 3. `flex-basis`: initial main size of a flex item
  - basis value(基准值) grow or shrink
  - default: auto
  - flex: 0 0 300px 相当于创建了一个inflixible item

may be specified using 1, 2, 3 values

- one-value
  - `flex: 2`: `flex 2 1 0`, means `flex: <flex-grow> 1 0`
  - `flex: 200px`: `flex 1 1 200px`, means `flex: 1 1 200px`
- two-value
  - fisrt must be `flex-grow``
  - number value with unit for `flex-shrink`
  - number value without unit for `flex-basis`
- three-value

```css
article {
    flex: 1 200px;
}

article:nth-of-type(3) {
    flex: 2 200px;
}
```

- flex item 最小尺寸 200px, 剩余空间按比例分配


## flex-grow

[剩余空间](#)分配比例

```css
#one { flex-grow: 1 }
#two { flex-grow: 2 }
#thr { flex-grow: 3 }
```

- if without wrap, 元素one, two, three分别占据 1/6, 2/6, 3/6

## create gap

- margin
- negative margin on flex container

## rest space

