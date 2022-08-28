# CSS中Box分类

## block box

- 外观表现为block
- 独占一行(will break onto a new line)
- width and height 属性会被遵守(respected)
- padding, margin, border会使其他元素远离box

## inline box

- **not** break onto a new line
- `width` and `height` 属性不会被应用
- 垂直方向的padding, margins, border会被应用, 不会导致其他inline box远离此box
- 水平方向的padding, margins, 和 borders 会被应用, 同时导致其他inline box远离此box

## display: inline

- width and height 属性会被遵守(respected)
- **同时** **not** break onto a new line

> 频繁出现于导航栏中
