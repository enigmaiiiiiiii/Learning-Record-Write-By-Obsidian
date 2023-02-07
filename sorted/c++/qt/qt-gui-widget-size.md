# 尺寸位置

- screen() 返回widget所在屏幕

## 尺寸

> QSize

- resize()设置大小
- size()返回QSize对象

## 位置

> QPoint

- 点由x坐标和y坐标指定，x()和y()函数访问该坐标
- 如果x和y都设置为0，则isNull（）函数返回true
- setX()和setY()函数设置（或更改）坐标，或者使用rx()和ry()函数返回坐标引用（允许直接操作）

## 位置和尺寸

```c++
QRect r(QPoint(100, 100), QSize(100, 50));
```

- 矩形通常表示为左上角和大小
- QRect的大小（宽度和高度）始终等于构成其渲染基础的数学矩形。
- geometry()返回Widget的QRect对象，表示位置和尺寸
- width()和height()返回宽和高

## 建议大小

[sizeHint](qt-gui-widget-size-sizehint.md)