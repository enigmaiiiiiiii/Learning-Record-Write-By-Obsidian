# flex

- [introduction](#introduction)
- [Main Axis](#main-axis)
- [Cross Axis](#cross-axis)
- [flex 容器](#flex-容器)
- [flex 属性](#flex-属性)
- [flex-grow](#flex-grow)
- [create gap](#create-gap)
- [rest space](#rest-space)

## introduction

- 一种将元素布局在单一维度的布局方式
- main axis: 元素分布维度
- cross axis: 元素分布维度的垂直方向
- **flex容器**: 属性设置为 display: flex 的元素称为 flex container
- **flex元素**: flex container 的所有子元素称为 flex item

## Main Axis

- main axis: 主轴, 默认是水平方向

`flex-direction: value;`定义主轴, value取值

- row: 水平方向
- row-reverse: 水平方向, 反向
- column: 垂直方向
- column-reverse: 垂直方向, 反向

## Cross Axis

- cross axis: 交叉轴, 默认是垂直方向

## flex 容器

属性

- `flex-direction: row;`: 设置 main axis 方向, 默认是 row
- `flex-wrap: wrap;`: 内容太多会换行显示
- `flex-flow: row wrap;`: 等于同时设置 flex-direction, flex-wrap
- `aligin-items: center`:

## flex 属性

- `flex: 200px`: 最小宽度
- `flex: 2`: 所占单元格数量
- `flex` is shoothand for `flex-grow`, `flex-shrink`, `flex-basis`
  - 1. `flex-grow: <number>`: ratio of the remaining space
    - when number is positive, allow item to fill any available space
  - 2. flex-shrink: 最小可收缩比例
  - 3. flex-basis:

```css
article {
    flex: 1 200px;
}

article:nth-of-type(3) {
    flex: 2 200px;
}
```

- flex item 最小尺寸 200px, 剩余空间按比例分配

flex-basis

- grow or shrink 的基准值

flex: 0 0 300px

- 相当于创建了一个inflixible item

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

