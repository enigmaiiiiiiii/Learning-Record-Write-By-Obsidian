# 背景和边框

## background

- 作用于盒子模型的padding和内容区域

属性设置

- `background-color: #000000` 背景颜色
- `background-images: url(sourcePath)`背景图片
- `background-repeat: repeat` 控制背景图片平铺行为, 默认repeat
- `background-size:`
  - cover: 使box完全被背景图片覆盖, 并**保持纵横比**, 所以图片可能溢出框外
  - contain: 使背景图片大小适合box
  - length
  - percentage
- `background-position:` 设置背景图片位置

## gradient(渐进)

- 由两种或多种颜色组成的渐进效果
- linear-gradient
- radial-gradient
- repeating-linear-gradient
- repeating-radial-gradient
- conic-gradient
