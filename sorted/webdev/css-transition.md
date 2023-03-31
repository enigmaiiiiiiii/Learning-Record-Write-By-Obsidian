# CSS Transition

## Introduction

- a way to control animation speed when CSS property changed
- 当CSS属性改变时，提供一种渐变的动画效果, 而不是立即改变

## transition properties

shorthand properties: `transition: property duration timing-function delay;`

`transition-property`: CSS property to add transition effect

- `transition-property: prop1, prop2;`
  - transition effect applied to properties `prop1` and `prop2`
- `transition-property: all;`
  - transition effect 应用于所有属性发生变化时
- `transition-property: none;`
  - no transition effect

`transition-duration`: duration of the transition effect

`transition-timing-function`: 控制动画在不同时间点的速度

- 通过bezier曲线的控制点来控制动画速度
- `transition-timing-function: linear;`: 动画从头到尾速度相同
- `transition-timing-function: ease;`: 动画开始时比较慢，然后加速，最后变慢

`transition-delay`: delay before the transition effect

## create a transition

```css
.target {
  font-size: 14px;
  transition-property; font-size;
  transition-duration: 4s;
}

.target:hover {
  font-size: 20px;
}
```
