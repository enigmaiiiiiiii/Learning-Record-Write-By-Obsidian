# 尺寸位置

## 盒子模型

层次关系

> margin: 用**空白区域**扩展边框
>> border: 扩展自padding
>>> padding: 扩展自内容边界
>>>> content edge: 内容区域, 用来限制内容区域(content area)

## 设置尺寸

> width, height

## 位置

> top, right, bottom, left

- 静态定位: `position: static`, 默认定位方式
- 相对定位: `position: relative`
- 绝对定位: `position: absolute`
  - 相对于最近的positioned ancestor
  - 脱离normal document flow[文档流]
- 固定定位: `position: fixed`
  - 相对位置窗口固定
  - 脱离normal document flow

## 浮动

- 浮动元素是指元素的float属性不为none
- 向左侧或右侧浮动, 允许浮动元素被text和inline元素包围
- 脱离normal flow

元素是如何浮动的

1. 脱离normal flow
2. 移动到container的边界或其他浮动元素的边界

## display属性

- block: 独占一行，可以修改宽高，标签h1-h6, p, div默认block
- inline: 共占一行，不能修改宽高，标签span, a, b, i, u, s默认inline
- inline-block: 共占一行，可以修改宽高, input, img默认inline-block
- none: 隐藏元素

## overflow

- 当内容太多导致大于box的尺寸时, CSS为了不让内容丢失, 会发生overflow

> 会让内容看起来一团乱

overflow属性可以避免让内容看起来乱

- `overflow: hidden`-内容将被剪裁以适应填充框
- `overflow: scroll`-为overflow内容添加滚动轴
  - `overflow-y: scroll` 单独添加y方向上的滚动轴
  - `overflow-x: scroll`

```css
.box {
    border: 1px solid #333333
    width: 200px;
    heigth: 100px;
    overflow: scroll
}
```

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
