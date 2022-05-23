# QWidget子类

## QFrame

## QDialog

```c++
QDialog::QDialog(QWidget *parent = nullptr, Qt::WindowFlags f = Qt::WindowFlags())
```

- 是一个顶级窗口
- 用于短期任务
- 分为Modal和非Modal
- 如果有父窗口，中心位置与父窗口一致

## 布局类

- QGroupBox: 
  - 带标题的的组件框架
  - 可以应用layout
- QVBoxLayout: 
  - 组件竖向自动布局
  - 通过addWidget()添加组件

