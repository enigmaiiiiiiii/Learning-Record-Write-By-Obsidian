# 尺寸位置

## 盒子模型

[盒子模型](CSS_Box_Model.md)

## 定位

[定位](CSS_Positioning.md)

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


## z-index

***

## 包含块

[包含块](CSS_Containing_Block.md)
