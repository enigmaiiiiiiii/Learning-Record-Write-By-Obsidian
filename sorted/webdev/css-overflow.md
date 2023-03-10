# Overflow

## What for

- 当内容太多导致大于box的尺寸时, CSS为了不让内容丢失, 会发生overflow

> 会让内容看起来一团乱

overflow属性可以避免让内容看起来乱

```css
.box {
    border: 1px solid #333333;
    width: 200px;
    height: 100px;
    overflow: scroll
}
```

## overflow Property

- `overflow: visible;`: 装不下的内容不会被剪裁, 不会创建新的[BFC](css-block-formatting-context.md)
- `overflow: hidden;`: 内容将被剪裁以适应填充框, 并隐藏 Scroll Bar
  - `overflow-x: hidden;`
  - `overflow-y: hidden;`
- `overflow: scroll`: 为overflow内容添加滚动轴
- `overflow: clip`
  - 类似hidden
  - 禁止滚动，它的box模型不是一个可以滚动的容器
  - 不会创建新的[BFC](css-block-formatting-context.md)
  - ~~可以通过display: flow-root创建新的flow-root~~
- `overflow: auto`
  - 如果内容包含在padding box中，看起来和`overflow: visible`一样, 但是会创建[BFC](css-block-formatting-context.md)
  - **provide scroll bar** if content overflows on desktop browser
- `overflow: overlay`: 占用内容空间添加Scrollbar
