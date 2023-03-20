# BFC

- Block formatting context 块格式化上下文

## 创建BFC的情况

- [x] 文档根元素`<html>`, root element of document
- [x] 浮动元素, float elements(float属性不等于none)
- [x] Absolutely positioned elements, `position: absolute or fixed`
- [x] Inline-block(display: inline-block)
- [ ] Table cells
- [ ] Table captions
- [ ] Anonymous table cells
- [ ] [overflow](css-overflow.md)属性的值不为visible, clip的块元素(Block elements where overflow has visible, clip
- [ ] display值为flow-root
- [ ] contain值为layout, content, paint
- [ ] 弹性元素(display为flex或inline-flex), 如果本身不是flex, grid, table容器
- [ ] 网格元素(display为grid或inline-grid), 如果本身不是flex, grid, table容器
- [ ] 多列容器值不为auto
- [ ] column-span值为all的元素始终会创建一个新的BFC, 即使该元素包裹在一个多列容器中

## 为了定位或清除浮动创建新的BFC

### 1. 包含内部浮动, contain internal floats

设置父元素属性为:

- overflow: auto
- display: flow-root

> 即, 创建新的BFC, 使父元素脱离Normal Flow

```html
<style>
.float {
    float: left;
    width: 200px;
    height: 100px;
    background-color: rgba(255, 255, 255, .5);
    border: 1px solid black;
    padding: 10px;
}

.box {
    background-color: rgb(224, 206, 247);
    border: 5px solod rebeccapurple
}
</style>
<section>
    <div class="box">
        <div class="float">I am a floated box!</div>
        <p>I am content inside the container.</p>
    </div>
</section>
```

### 2. 排除外部浮动, exclude external floats

```html
<style>
    section {
        height: 150px;
    }
    .box {
        background-color: rgb(224, 206, 247);
        border: 5px solid rebeccapurple;
    }
    .box[style] {
        background-color: aliceblue;
        border: 5px solid steelblue;
    }
    .float {
        float: left;
        overflow: hidden; /* required by resize:both */
        resize: both;
        margin-right: 25px;
        width: 200px;
        height: 100px;
        background-color: rgba(255, 255, 255, 0.75);
        border: 1px solid black;
        padding: 10px;
    }
</style>
<section>
    <div class="float">Try to resize this outer float</div>
    <div class="box"><p>Normal</p></div>
</section>
<section>
    <div class="float">Try to resize this outer float</div>
    <div class="box" style="display: flow-root">
        <p><code>display:flow-root</code></p>
        <p></p>
    </div>
</section>
```


### 3. 阻止外边界重叠, suppress margin collapsing


