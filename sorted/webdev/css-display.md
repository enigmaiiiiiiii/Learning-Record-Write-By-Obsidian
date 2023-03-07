# Display属性

- 决定一个元素的内部和外部显示类型
  - 外部类型决定元素是块级元素还是行内元素
  - 内部类型控制子元素的布局

设置**元素对外**表现方式(Outer display type)

- block: 生成一个[块级元素](css-box-model-sorted.md), 标签h1-h6, p, div默认block
- inline: 生成一个[行内元素](css-box-model-sorted.md), 标签span, a, b, i, u, s默认inline
- inline-block: 等价于inline flow-root

设置**内部元素**表现方式(Inside display type)

- flow: 元素的内容将使用[flow布局](css-normal-flow.md)(block and inline layout)
- flow-root: 创建新的[BFC](css-block-formatting-context.md), 定义根位置
- table: 元素内隐式创建一个表格
- flex: [flex layout](css-flex.md)
- grid: [grid layout](css-grid.md)
- ruby

设定了特定内部元素display的子元素display值

- table-cell: 元素行为类似于\<td>标签, 创建[BFC](css-block-formatting-context.md)

element visible

> compare with [visibility](css-visibility.md)

- none: remove element from [normal flow](css-normal-flow.md)