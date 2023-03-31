# CSS Alignment

## summary

treat all children as a single unit

1. [justify-content](#justify-content)
2. [align-content](#align-content)
3. [place-content](#place-content)

align single item in its area

1. [align-self](#align-self)
2. [justify-self](#justify-self)
3. [place-self](#place-self)

default value for all [items](css-flex.md#what-is-this) inside a grid or flex container

1. [justify-items](#justify-items)
2. [align-items](#align-items)
3. [place-items](#place-items)

## justify-content

- 定义 flex container 的内容和空间沿**main axis**上的分布方式
- 定义 grid container 的内容和空间沿[**inline direction**](css-grid-foundation.md#feature)上的分布方式

value

- `justify-content: flex-start;`: 默认值, 左对齐
- `justify-content: space-between;`: 两端对齐, 间距相等


## align-content

- 描述 **将所有子元素视为一个整体** 在 **可用空间** 的分布方式
- 在flex box中, 描述 **主轴** 分布
- 在grid容器中的**分布**方式, when use area is **smaller** than the grid container

> align-content属性在grid容器中生效, 需要网格容器的尺寸大于所有内容的尺寸

[code](css-align.md)

## place-content

shorthand for

1. [justify-content](#justify-content)
2. [align-content](#align-content)

## align-self

- for **grid or flex** layout
- 用于**单个元素**的对齐
- override `align-items` value
- in flex box, aligns the item on the **cross axis**

value

- `align-self: stretch;`
- `align-self: center;`: at center
- `align-self: start;`: at start
- `align-self: end;`

## justify-self

- **ignored** in **flexbox** and **table cell** layout
- for **grid layout**, aligns an item inside its grid area along [inline axis](css-grid-foundation.md#feature)

value

- `justify-self: center`
- `justify-self: start`
- `justify-self: end`
- `justify-self: stretch`
  - for not sized items
  - still respecting the constraints of [max-width and max-height](css-box-model-properties.md#content)

## place-self

- shorthand for [align-self](#align-self) and [justify-self](#justify-self)

## justify-items

- define the default [justify-self](#justify-self) for all items of the box

## align-items

> 定义 直接子元素, not container self, not **其它元素** either

- define the default [align-self](#align-self) for all items of the box
- 描述了**子元素**的分布方式
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

## place-items

- shorthand for [align-items](#align-items) and [justify-items](#justify-items)