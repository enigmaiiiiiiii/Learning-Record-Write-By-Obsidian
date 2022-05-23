# QDrag

```c++
QDrag *drag = new QDrag(this);
QMimeData *mimeData = new QMimeData;

mimeData->setText(commentEdit->toPlainText());
drag->setMimeData(mimeData);
```

通过拖放操作传输的数据包含在一个QMimeData对象中
这是通过setMimeData()函数指定的，方法如下:

```c++
void QDrag::setPixmap(const QPixmap &pixmap)
```

设置pixmap为用于拖放操作数据的QPixmap

```c++
Qt::DropAction QDrag::exec(Qt::DropActions supportedActions = Qt::MoveAction)
```

```c++
if (drag->exec(Qt::CopyAction | Qt::MoveAction, Qt::CopyAction) == Qt::MoveAction)
{
    child->close();
} else {
    child->show();
    child->setPixmap(pixmap);
}
```

注意:在Linux和macOS上，拖放操作可能需要一些时间，但这个函数不会阻塞事件循环。在执行操作时，其他事件仍然交付给应用程序。在Windows上，Qt事件循环在操作过程中被阻塞。