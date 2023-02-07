# QEvent类

## QEvent::Type

|Constant|Value|Description|
|--|:--:|--|
|QEvent::MouseButtonPress|2|鼠标点击事件|
|QEvent::MouseMove|5|鼠标移动事件|
|QEvent::DragMove|61|拖动事件|

> QMouseEvent和QKeyEvent，来自窗口系统
> QTimerEvent，来自其他来源;
> 有些来自应用程序本身。

QEvent的子类, 如QResizeEvent, QPaintEvent, QMouseEvent, QKeyEvent和QCloseEvent

- 添加了特定的事件的函数。
  
> QResizeEvent添加了size()和oldSize()以使小部件能够发现它们的维度是如何更改的

public Functions

- type() const: 返回事件类型

Property

- accepted: 描述事件是否被接受的标志

## QEvent的子类

QKeyEvent: 键盘输入事件

构造函数：

```c++
QKeyEvent::QKeyEvent(QEvent::Type type, 
                     int key, 
                     Qt::KeyboardModifiers modifiers,
                     quint32 nativeScanCode, 
                     quint32 nativeVirtualKey, 
                     quint32 nativeModifiers, 
                     const QString &text = QString(), 
                     bool autorep = false, 
                     quint16 count = 1, 
                     const QInputDevice *device = QInputDevice::primaryKeyboard())
```

- type参数的取值: QEvent::KeyPress, QEvent::KeyRelease, QEvent::ShortcutOverride

public Function:

- key() const: 返回事件按下键的编码

## 方法

[event类的Method](qt-event-class-method.md)