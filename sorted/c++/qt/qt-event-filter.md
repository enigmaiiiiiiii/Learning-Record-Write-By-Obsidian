# Event Filters

在对象FilterObject上安装事件过滤器, 通过QObject方法

```c++
void QObject::installEventFilter(QObject *filterObj)
```

事件过滤器

```c++
bool QObject::eventFilter(QObject *watched, QEvent *event*)
```


```c++
bool FilterObject::eventFilter(QObject *object, QEvent *event)
{
    // 
    if (object == target && event->type() == QEvent::KeyPress) {
        QKeyEvent *keyEvent = static_cast<QKeyEvent *>(event);
        if (keyEvent->key() == Qt::Key_Tab) {
            // Special tab handling
            return true;
        } else
            return false;
    }
    return false;
}
```
