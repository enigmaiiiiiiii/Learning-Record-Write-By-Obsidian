# flex

- 两根轴线
  -   main axis
  -   cross axis
-   **flex容器**: 属性设置为 display: flex 的元素称为 flex container
- **flex元素**: flex container 的所有子元素称为 flex item

## flex 容器

属性

- `flex-direction: row;`: 设置 main axis 方向, 默认是 row
- `flex-wrap: wrap;`: 内容太多会换行显示
- `flex-flow: row wrap;`: 等于同时设置 flex-direction, flex-wrap
- `aligin-items: center`:

## flex 元素属性

- `flex: 200px`: 最小宽度
- `flex: 2`: 所占单元格数量
- `flex` is shoothand for `flex-grow`, `flex-shrink`, `flex-basis`
  -   flex-grow: item 比例
  -   flex-shrink: 最小可收缩到的尺寸
  -   flex-basis:

```css
article {
    flex: 1 200px;
}

article:nth-of-type(3) {
    flex: 2 200px;
}
```

flex item 最小尺寸 200px, 剩余空间按比例分配

## justify-content

定义内容如何分布

- `justify-content: flex-start;`: 默认值, 左对齐
- `justify-content: space-between;`: 两端对齐, 间距相等

## flex-grow

[剩余空间](#)分配比例

## rest space

