# 边界重叠

- 仅发生在block-level元素

## 场景: 上下元素重叠

- 只会留下最大margin

## 场景2: 父元素与第一个或最后一个子元素  

- 条件： 
  1. 第一个元素与父元素上边界, 或最后一个元素与父元素下边界
  2. 没有分开父元素与后代元素的margin-top
      - 没有创建[BFC](css-block-formatting-context.md)或没有[clear]()
      - 父元素没有border, padding, 没有inline内容, 
  3. 没有分开父元素与后代元素的margin-bottom
      - 父元素没有border, padding, 没有inline内容, 
      - 没有设置height, min-height, max-height

## 场景3: 空元素

- 空元素没有设置border, padding, height, min-height, max-height, inline内容, 或clear-fix, 将不同block的margin-top和margin-bottom分开
