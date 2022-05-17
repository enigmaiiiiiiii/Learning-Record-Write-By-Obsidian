## event()函数

- 当事件发生时，Qt通过构造相应的QEvent子类的实例，
- 通过调用其event()函数将其交付给特定的QObject实例
- 此函数不处理事件本身
- 根据交付的事件类型，它为该特定类型的事件调用事件处理程序(event handler)，并根据事件是否被接受或忽略发送响应。

一个Widget即解释Tab又有一个应用程序自定义事件

```c++
bool MyWidget::event(QEvent *event)
{
    if (event->type() == QEvent::KeyPress) {
        // 基类转派生类
        QKeyEvent *ke = static_cast<QKeyEvent *>(event);
        if (ke->key() == Qt::Key_Tab) {
            // special tab handling here
            return true;
        }
    } else if (event->type() == MyCustomEventType) {
        MyCustomEvent *myEvent = static_cast<MyCustomEvent *>(event);
        // custom event handling here
        return true;
    }

    return QWidget::event(event);
}
```

## QObject::event()

```c++
bool QObject::event(QEvent *e);
```

- 接收到一个对象的事件, 如果事件e被识别并处理，则返回true
- 可以被子类重新实现
- <font color="red"> 需要确保子类为所有未处理的事件会调用父事件类实现</font>

## QWidget::event()

- 重新实现自QOBject::event()
- 可以被重新实现
- 按键事件将被特殊处理, 针对Tab和Shift + Tab
- 鼠标和平板电脑事件特殊处理: 只有当小部件enabled时，event()才会调用专门的处理程序，如mousePressEvent(); 否则它将丢弃该事件