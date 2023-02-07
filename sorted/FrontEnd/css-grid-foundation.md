# CSS Grid Foundation

- [feature](#feature)
- [声明网格容器](#声明网格容器)
- [set columns and rows](#set-columns-and-rows)
- [repeat()](#repeat)
- [fr unit](#fr-unit)
- [minmax()](#minmax)
- [跨轨道(行, 列)元素](#跨轨道行-列元素)
- [网格间距](#网格间距)

## feature

- 网格中的元素可以重叠
- inline direction: left to right(main directio)
- block direction: downward(cross direction)

## 声明网格容器

- `display: grid;`

## set columns and rows

- `grid-template-columns`: 定义网格的列数, 以及每列的宽度
- `grid-template-rows`: 定义网格的行数, 以及每行的高度

```css
.wrapper {
  display: grid;
  grid-template-columns: 100px 100px 100px;
}
```

- .wrapper是一个网格容器, 有3列, 每列宽度100px

## repeat()

- 当网格有很多列时, 可以使用repeat()函数, 简化code
- `repeat(3, 100px)` equal to `100px 100px 100px`

## fr unit

- fr是一种单位 和属性 [flex-grow](css-flex.md#flex-grow) 有类似的效果
- 根据可用空间分配比例
- a flexible size
- 可以和绝对单位(px)混合使用

## minmax()

`minmax(min, max)`

- 当网格尺寸是自动设置的, minmax()可以设置最小宽度和最大宽度

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

- row height: 100px ~ auto

## cross row or column elements

- `grid-column-start`: 起始列
- `grid-column-end`: 结束列
- `grid-row-start`: 起始行
- `grid-row-end`: 结束行

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
```

## 网格间距

- `grid-column-gap`: 列间距
- `grid-row-gap`: 行间距