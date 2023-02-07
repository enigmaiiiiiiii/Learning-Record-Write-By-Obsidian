# 事件

- Qt中，事件是对象，派生自抽象的QEvent类，
- 事件产生，QT创建一个合适的QEvent对象或其子对象
- Qt 使用一个事件队列对所有发出的事件进行维护
- 必要的时候, Qt 的事件也可以不进入事件队列，而是直接处理。

[QEvent类](qt-qevent-class.md)

## 产生事件

[event()函数](qt-event-function.md)

## 传递事件

![事件循环](qt-another-look-at-events.md#事件循环)

[事件处理函数](qt-event-handler.md)

[事件过滤器](qt-event-filter.md)

[ignore()和accept()](qt-event-class-method.md)

## 文章

[Another Look at Event](qt-another-look-at-events.md)

[学习之路内容](qt-event-学习之路内容.md)

QWidget中的mousePressEvent事件

```c++
void QWidget::mousePressEvent(QMouseEvent *event)
{
    event->ignore();
    if ((windowType() == Qt::Popup)) {
        event->accept();
        QWidget* w;
        while ((w = QApplication::activePopupWidget()) && w != this){
            w->close();
            if (QApplication::activePopupWidget() == w) // widget does not want to disappear
                w->hide(); // hide at least
        }
        if (!rect().contains(event->position().toPoint())){
            close();
        }
    }
}
```