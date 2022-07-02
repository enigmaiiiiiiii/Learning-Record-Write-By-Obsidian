# QWidget

widget构造函数接受两个参数

- `QWidget *parent` , parent是此widget的父widget
  - 默认nullptr, 此widget是一个窗口
  - 不是nullptr, 此widget是父widget的子元素
- `Qt::WindowFlags f = { }``
  
顶级QWidget是一个窗口

- setWindowTitle()和setWindowIcon()分别设置顶级widget的标题栏和图标。
- 窗口也可以是一个控件，如button

窗口标志

  - enum Qt::WindowType

## QWidget的子类

[组件](Qt_GUI_组件.md) ,  如QButton, QLabel, QTextEdit   

[对话框](Qt_GUI_Dialog.md)

[Layout](Qt_GUI_Layout.md)

[GroupBox]

[QDockWidget](Qt_GUI_QDockWIdget.md), 停靠窗口，特殊的尺寸设置方式

## QWidget属性

[尺寸位置](Qt_GUI_Widget_Size.md)

## 实用方法

```c++
QWidget *QWidget::childAt(const QPoint &p) const
```

- 返回位于小部件自身坐标系统中的p点的可见子小部件