# CSS伪类

- 用来捕捉元素不同状态

 超链接的伪类link, visited, hover, active

```css
a:link  {color: "red";}
a:visited {color: "red";}
a:hover {color: "red";}
a:active {color: "red";}
```

- 伪类可以和CSS类配合使用

```html
<a class="red" href="####">CSS</a>
```

```CSS
a.red:visited {color:#FF0000;}
```

- first-child伪类

匹配`<p>`标签的第一个子元素

```CSS
p:first-child
```