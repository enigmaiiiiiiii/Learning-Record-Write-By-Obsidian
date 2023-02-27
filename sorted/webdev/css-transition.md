# CSS Transition

## Introduction

- a way to control animation speed when CSS property changed
- 当CSS属性改变时，提供一种渐变的动画效果, 而不是立即改变

## transition properties

shorthand properties: `transition: property duration timing-function delay;`

1. `transition-property`: CSS property to add transition effect

- `transition-property: prop1, prop2;`: 过度效果应用于 prop1, prop2 发生变化时
- `transition-property: all;`: 过度效果应用于所有属性发生变化时
- `transition-property: none;`: 不应用过度效果

2. `transition-duration`: duration of the transition effect

3. `transition-timing-function`: 控制动画在不同时间点的速度

- 通过bezier曲线的控制点来控制动画速度
- `transition-timing-function: linear;`: 动画从头到尾速度相同
- `transition-timing-function: ease;`: 动画开始时比较慢，然后加速，最后变慢

4. `transition-delay`: delay before the transition effect
