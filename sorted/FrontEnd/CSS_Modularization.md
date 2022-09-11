# 模块化CSS

- 模块选择器由单个类名构成
- 模块化CSS中禁用**后代选择器**, 因为使用后代选择器
  - 会导致CSS的耦合性增加
  - 增加优先级, 下次需要修改时可能需要继续增加优先级
  - 复用性差, 不方便用到其它位置

## 修饰符来表示模块的不同状态

> 如message--error

```css
.message {
    padding: 0.8em 1.2em;
    border-radius: 0.2em;
    border: 1px solid #265559;
    color: #265559;
    background-color: #e0f0f2;
}

.message--success {
    color: #2f5926;
    border-color: #2f5926;
    background-color: #cfe8c9;
}

.message--warnig {
    color: #594826;
    border-color: #594826;
    background-color: #e8dec9;
}

.message--error {
    color: #592626;
    border-color: #592626;
    background-color: #e8c9cf;
}
```

- 将主模块名和修饰符类名同时添加到元素上

```html
<div class="message message--error">
    Invalid email address
</div>
```

## 多元素模块

- 类名用模块名称开头, 用`__`分隔, 然后是子元素名称


```css
.media {
    padding: 1.5em;
    background-color: #eee;
    border-radius: 0.5em;
}
.media::after {
    content: "";
    display: block;
    clear: both;
}
.media__image {
    float: left;
    margin-right: 1.5em;
}
.media__body {
    overflow: auto;
    margin-top: 0;
}
.media__body > h4 {
    margin-top: 0;
}
```