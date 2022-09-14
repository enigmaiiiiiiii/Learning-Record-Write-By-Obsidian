# Display属性

- 决定一个元素的内部和外部显示类型
  - 外部类型决定元素是块级元素还是行内元素
  - 内部类型控制子元素的布局

设置元素外部表现方式(Outer display type)

- block: 生成一个块级元素, 标签h1-h6, p, div默认block
- inline: 生成一个行内元素, 标签span, a, b, i, u, s默认inline
- inline-block: 等价于inline flow-root

设置内部元素表现方式(Inside display type)

- flow: 元素的内容将使用[flow布局](CSS_Normal_Flow.md)(block and inline layout)
- flow-root: 创建新的[BFC](CSS_Block_Formatting_Context.md), 定义根位置
- table: 元素内隐式创建一个表格
- flex
- grid
- ruby

设定了特定内部元素display的子元素display值

- table-cell: 元素行为类似于\<td>标签, 创建[BFC](CSS_Block_Formatting_Context.md)