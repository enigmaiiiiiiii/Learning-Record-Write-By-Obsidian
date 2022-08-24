# 尺寸位置

## 盒子模型

层次关系

> margin: 用**空白区域**扩展边框
>> border: 扩展自padding
>>> padding: 扩展自内容边界
>>>> content edge: 内容区域, 用来限制内容区域(content area)

## 设置尺寸

- width, height
- 

## overflow

- 当内容太多导致大于box的尺寸时, CSS为了不让内容丢失, 会发生overflow

> 会让内容看起来一团乱

overflow属性可以避免让内容看起来乱

- `overflow: hidden`-隐藏overflow的内容
- `overflow: scroll`-为overflow内容添加滚动轴
  - overflow-y: scroll 单独添加y方向上的滚动轴

```css
.box {
    border: 1px solid #333333
    width: 200px;
    heigth: 100px;
    overflow: scroll
}
```
