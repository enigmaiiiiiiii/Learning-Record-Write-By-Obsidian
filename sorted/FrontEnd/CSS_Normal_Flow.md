# Normal Flow

## Normal Flow中元素是如何布局的

1. 元素周围加上盒子模型
2. [块级元素](HTML_Element_Sort.md#块级元素)垂直布局, [行内元素](HTML_Element_Sort.md#行内元素)出现在同一行知道空间不足以容纳元素
3. 两个垂直布局的相邻元素都有margin, 则较大的margin保留(仅限垂直方向)

## In Flow and Out of Flow

- 脱离Normal Flow的元素
  - floated items
  - [position](): absolute或fix
  - html根元素
- 脱离Normal Flow会创建一个新的[BFC](CSS_Block_Formatting_Context.md)
