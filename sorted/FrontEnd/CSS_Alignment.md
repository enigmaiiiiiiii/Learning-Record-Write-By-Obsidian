# CSS Alignment

## align-items

- 应用在所有**直接子元素**上的对齐方式
- 在flex布局中, 控制Cross Axis方向的对齐方式

取值

- `align-items: stretch;`
- `align-items: start;`
- `align-items: end;`
- `align-items: center;`

---

- `align-items:normal`: depends on the layout
  - in absolutly-positioned elements, it is `start`
  - in static position elements, it is `stretch`
  - flex items, it is `stretch`
- `align-items:flex-start`
- `align-items:
- `align-items:
- `align-items:
- `align-items:
- `align-items:
- `align-items:

## align-self

- 用于单个元素的对齐
- 覆盖align-items的值
- aligns the item on the **cross axis**

取值

- `align-self: stretch;`
- `align-self: center;`: at center
- `align-self: start;`: at start
- `align-self: end;`

## align-content

定义 内容和空间 沿flex box主轴和grid的分布方式

## justify-content

定义 **flex** container 的内容和空间沿**主轴**上的分布方式

- `justify-content: flex-start;`: 默认值, 左对齐
- `justify-content: space-between;`: 两端对齐, 间距相等