# CSS Box Model

- [Standard Box Model](#standard-box-model)
- [Box Property](#box-property)
- [Block And Inline](#block-and-inline)
- [display property](#display-property)
- [盒子模型的替代模型](#盒子模型的替代模型)
- [Margin Collapsing](#margin-collapsing)

## Standard Box Model

- box-sizing: content-box
- CSS中的所有元素都有一个盒子模型

layer relationship

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

## Box Property

[Property Of Box Model](css-box-model-properties.md)

## Block And Inline

[Block Box And Inline Box](css-box-model-sorted.md)

## display property

[display property](css-display.md)

## Visibility Property

[visibility property](css-visibility.md)

## 盒子模型的替代模型

- 设置`box-sizing: border-box;`属性
  - width, height属性即为可见宽度和高度
  - border, padding会使内容区域更小
- width = border + padding + content width
- height = border + padding + content height

这段代码放到样式表开头已经是普遍做法了

```css
*, ::before, ::after {
    box-sizing: border-box;
}
```

or

```css
:root {
    box-sizing: border-box;
}
*,
::before, ::after {
    box-sizing: inherit;
}
```
> ::after, ::before是CSS3的[伪元素](css-selector.md#伪元素选择器)

## Margin Collapsing

[Margin Collapsing](css-mastering-margin-collapsing.md)