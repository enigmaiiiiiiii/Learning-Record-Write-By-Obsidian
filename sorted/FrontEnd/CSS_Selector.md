# CSS选择器

## 元素选择器

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

对于id选择器，id前面需要加上"#"，表示这是一个id选择器

## class选择器 "."

```css
.classvalue
{
    width: 100px; 
    height:100px;
}
```

.value选中 class= "value"的所有元素

## 子元素选择器

父元素与后代元素用空格隔开

```css
div p
{
    width: 100px; 
    height: 100px;
}
```

选择div标签的子标签p

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