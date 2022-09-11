# CSS的盒子模型

## 标准盒子模型

- box-sizing: content-box
- CSS中的所有元素都有一个盒子模型

层次关系

> margin: 用**空白区域**扩展边框
>> border: 扩展自padding
>>> padding: 扩展自内容边界
>>>> content area: 内容区域, 用来限制内容区域(content area)

```css
.box {
    width: 350px;
    height: 150px;
    margin: 10px;
    padding: 25px;
    border: 5px solid black;
}
```

> 此box的实际尺寸是
> wide: 350 + 25 + 25 + 5 + 5
> high: 150 + 25 + 25 + 5 + 5

- content area, padding, border组成盒子模型可见区域

> background作用于内容和padding

## 模型属性

[盒子模型的属性](CSS_Box_Model_Properties.md)

## block and inline

[block box和inline box](CSS_Box_Model_Sorted.md)

## display属性

- 决定一个元素的内部和外部显示类型
  - 外部类型决定元素是块级元素还是行内元素
  - 内部类型控制子元素的布局

设置元素外部表现方式(Outer display type)

- block: 生成一个块级元素, 标签h1-h6, p, div默认block
- inline: 生成一个行内元素, 标签span, a, b, i, u, s默认inline

设置内部元素表现方式(Inner display type)

- flow: 元素的内容将使用[flow布局](CSS_Normal_Flow.md)(block and inline layout)
- flow-root: ~~~创建新的[BFC](CSS_Block_Formatting_Context.md), 定义根位置~~~
- table
- flex
- grid
- ruby

预设类型

- inline-block: 等价于inline flow-root

## 盒子模型的替代模型

- 设置`box-sizing: border-box;`属性
  - width, height属性即为可见宽度和高度
  - border, padding会使内容区域更小
- width = border + padding + content width
- height = border + padding + content height

这段代码放到样式表开都已经是普遍做法了

```css
*, ::before, ::after {
    box-sizing: border-box;
}
```

```css
:root {
    box-sizing: border-box;
}
*,
::before, ::after {
    box-sizing: inherit;
}
```
