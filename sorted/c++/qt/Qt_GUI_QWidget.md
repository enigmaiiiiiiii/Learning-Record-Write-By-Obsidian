# QWidget

## widget构造函数接受两个参数

- `QWidget *parent` , parent是此widget的父widget
  - 默认nullptr, 此widget是一个窗口
  - 不是nullptr, 此widget是父widget的子元素
- `Qt::WindowFlags f = { }``
  
## 顶级QWidget是一个窗口

- setWindowTitle()和setWindowIcon()分别设置顶级widget的标题栏和图标。
- 窗口也可以是一个控件，如button

## QWidget的子类

[QWidget子类](Qt_GUI_QWidget_inherit.md)

