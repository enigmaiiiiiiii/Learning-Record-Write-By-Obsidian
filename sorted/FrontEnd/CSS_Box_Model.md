# 盒子模型

- CSS中的所有元素都有一个盒子模型

层次关系

> margin: 用**空白区域**扩展边框
>> border: 扩展自padding
>>> padding: 扩展自内容边界
>>>> content edge: 内容区域, 用来限制内容区域(content area)

```css
.box {
    width: 350px;
    height: 150px;
    margin: 10px;
    padding: 25px;
    border: 5px solid black;
}
```

> 此box的实际尺寸是 wide: 350 + 25 + 25 + 5 + 5, high: 150 + 25 + 25 + 5 + 5

- margin不包括在box的实际尺寸中, 属于不可见宽度

## block box

- 外观表现为block
- 独占一行(will break onto a new line)
- width and height 属性会被遵守(respected)
- padding, margin, border会使其他元素远离box

## inline box

- **not** break onto a new line
- width and height 属性不会被应用
- 垂直方向的padding, margins, border会被应用, 不会导致其他inline box远离此box
- 水平方向的padding, margins, 和 borders 会被应用, 同时导致其他inline box远离此box

## 盒子模型的替代模型

- width属性即为可见宽度
- 设置`box-sizing: border-box;`属性
