# CSS Alignment

- [justify-content](#justify-content)
- [align-items](#align-items)
- [align-self](#align-self)
- [align-content](#align-content)

## justify-content

定义 **flex** container 的内容和空间沿**main axis**上的分布方式

- `justify-content: flex-start;`: 默认值, 左对齐
- `justify-content: space-between;`: 两端对齐, 间距相等

## align-items

- 描述**子元素**的分布方式
- 在**flex容器**中, 控制**Cross Axis**方向上子元素的分布方式
- 在**grid容器**中, 控制子元素在网格中的分布方式

[code](css-align.md)

取值

- `align-items: stretch;`
- `align-items: start;`
- `align-items: end;`
- `align-items: center;`

---

- `align-items: flex-start`:
- `align-items: flex-end`

___

- `align-items:normal`: depends on the layout
  - in absolutly-positioned elements, it is `start`
  - in static position elements, it is `stretch`
  - flex items, it is `stretch`
- `align-items:
- `align-items:
- `align-items:
- `align-items:
- `align-items:

## align-self

- 用于**单个元素**的对齐
- 覆盖align-items的值
- aligns the item on the **cross axis**

取值

- `align-self: stretch;`
- `align-self: center;`: at center
- `align-self: start;`: at start
- `align-self: end;`

## align-content

- 描述 **将子元素视为一个整体** 在 **可用空间** 的分布方式
- 在flex box中, 描述 **主轴** 分布
- 在grid容器中的**分布**方式, when use area is **smaller** than the grid container

> align-content属性在grid容器中生效, 需要网格容器的尺寸大于所有内容的尺寸

[code](css-align.md)
