# CSS 选择器

## 元素选择器

-   选择 Html 元素

```css
element {
    width: 100px;
    height: 100px;
}
```

div, p, h1, h2 都是元素

## id 选择器 "\#"

```css
#id {
    text-align: center;
    color: red;
}
```

选择 id="value"的元素, id 具有唯一性

## class 选择器 "."

```css
.classvalue {
    width: 100px;
    height: 100px;
}
```

选择 class= "value"的所有元素

## 后代元素选择器

- 父元素与后代元素用空格隔开

```css
div p {
    width: 100px;
    height: 100px;
}
```

- 选择 div 标签的所有后代标签 p

## 子元素选择器

```css
div > p {
    width: 100px;
    heigth: 100px;
}
```

选择 div 标签的中子标签为 p 的标签

## 群组选择器

选择器之间用`,`隔开

```css
h3,
p {
    width: 100px;
    height: 100px;
}
```

表示同时选择 h3,p 元素

## 属性选择器

```css
input[type="submit"] {
    width: 100px;
}
```

## 相邻兄弟选择器

```css
img + p {
    font-weight: bold;
}
```

-   第二个元素在第一个元素之后, 第二个元素将被选中

**猫头鹰选择器**: 选择第一个元素之后的所有同级元素

```css
body * + * {
    margin-top: 1.5em;
}
```

## 伪类选择器

-   以`:`开头, 用于选择特殊状态的元素

---

-   `selector:hover`
-   `selector:nth-child(an + b)`: 选择匹配的兄弟元素序列中第$an + b$个元素, a, b 为整数
    - 兄弟元素: 具有**相同父元素**的**匹配元素**的**集合**
    - a 是整数
    - n 是从 0 开始代入所有整数
    -   `:nth-child(2)`: 兄弟元素的第二个元素

## 伪元素选择器

> html 中不存在的元素

- `::before`: 在元素之前插入内容
- `::after`: 在元素之后插入内容
- 通常通过content属性设置插入的内容

## 通用兄弟选择器

- A ~ B: 选择 A 元素之后的所有同级 B 元素

```css
p ~ span {
    color: red;
}
```
