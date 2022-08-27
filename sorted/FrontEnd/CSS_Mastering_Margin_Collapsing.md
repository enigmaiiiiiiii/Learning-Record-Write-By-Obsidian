# 边界重叠

上下元素重叠

- 只会留下最大margin

父元素与第一个或最后一个子元素  

- 条件： 
  1. 如果第一个元素与父元素上边界, 或最后一个元素与父元素下边界
  2. 父元素没有border, padding, 内容不能设定为inline, 不能有clear-fix

空元素

- 元素没有设置border, padding, height, min-height, max-height, 内容为inline, 或clear-fix
