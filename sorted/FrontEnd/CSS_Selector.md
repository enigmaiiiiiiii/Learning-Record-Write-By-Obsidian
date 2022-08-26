# CSS选择器

## 元素选择器

- 选择Html元素

```css
element
{
    width:100px; 
    height:100px;
}
``````

div, p, h1, h2 都是元素  

## id选择器 "\#"

```css
#id 
{
  text-align:center;
  color:red;
}
```

选择id="value"的元素, id具有唯一性

## class选择器 "."

```css
.classvalue
{
    width: 100px; 
    height:100px;
}
```

选择class= "value"的所有元素

## 后代元素选择器

父元素与后代元素用空格隔开

```css
div p
{
    width: 100px; 
    height: 100px;
}
```

选择div标签的所有后代标签p

## 子元素选择器

```css
div>p 
{
    width: 100px;
    heigth: 100px;
}
```

选择div标签的中子标签为p的标签

## 群组选择器

选择器之间用`,`隔开  

```css
h3,p
{
    width: 100px; 
    height: 100px
}
```

表示同时选择h3,p元素

## 属性选择器

```css
input[type="submit"] {
    width: 100px;
}
```
