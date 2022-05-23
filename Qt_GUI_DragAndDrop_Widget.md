# Widget需实现的函数

- Widget通过实现事件处理函数来实现拖放操作
  - dragEnterEvent()
  - dragMoveEvent()
  - dropEvent()

```c++
setAcceptDrop(true);
```

构造函数中设置窗口可接受Drop事件

## dragEnterEvent()

```c++
dragEnterEvent(QDragEnterEvent *event)
```

拖拽进入时, 系统回调dragEnterEvent()

```c++
if (event->mimeData()->hasFormat("text/uri-list"))
{
}
```

接收事件之前通过mime信息判断文件类型

```c++
event->acceptProposeAction()
```

展示接收拖放事件的目标

## dropEvent()

```c++
dropEvent(QDropEvent *event)
```

放落时系统回调

```c++
QList<QUrl> urls = event->mimeData()->urls();
if (urls.isEmpty())
{
    return;
}
```

QMimeData::urls()来获得QUrl列表，url中保存着文件名信息

```c++
QString fileName = urls.at(0).toLocalFile();
```

获得文件名

