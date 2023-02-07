# Another Look At Events

## 根据事件的创建方式和分派方式，可以分为三类

- 自发事件(Spontaneous events): 由窗口系统产生的。它们被放在系统队列中，由事件循环依次处理。
- 发布事件(Posted events): 由Qt或应用程序生成。它们由Qt排队，并由事件循环处理。
- 发送事件(Sent events): 由Qt或应用程序生成，但它们直接发送到目标对象

## 事件循环

- main()函数末尾调用QApplication::exec()时 ,进入事件循环

```c++
while (!exit_was_called) {
    while (!posted_event_queue_is_empty) {
        process_next_posted_event();
    }
    while (!spontaneous_event_queue_is_empty) {
        process_next_spontaneous_event();
    }
    // 处理自发事件时发布的事件
    while (!posted_event_queue_is_empty) {
        process_next_posted_event();
    }
}
```

变量说明

- `posted_event_queue_is_empty`： 发布的事件队列
- `spontaneous_event_queue_is_empty`: 自发事件队列

事件循环不处理发送事件。它们被直接交付给对象

- 当一个小部件第一次显示为可见时，或者当它在被遮挡后显示为可见时，窗口系统会生成一个**(自发的)绘制事件**，要求程序重新绘制这个小部件, 事件循环挑出这个事件发送给需要重新绘制的Widget处理
- 理论上可以直接调用paintEvent()来强制立即重绘。实际上，这并不总是可能的
- 因为paintEvent()是一个受保护的函数。这也将绕过任何现有的事件过滤器。
- 因此，Qt提供了一种直接发送事件而不是发布事件的机制, repaint()使用这种机制强制立即重新绘制

## 发布事件可以被压缩

- 如由update()生成的10个事件将自动合并为一个事件
- 可被压缩的事件类型包括: paint events, move events, resize events, layout hint events, and language change events.
- QApplication::sendPostedEvents() , 调用时强制处理一个Object's Posted Events事件

## 合成事件

- 通过创建QEvent实例并调用`QApplication::postEvent()`和`QApplication::sendEvent()`
- 这两个函数都接受两个参数: QObject* 和 QEvent*

### postEvent()

- 则使用new创建一个QEvent, 作为参数，Qt会自动删除它

```c++
QApplication::postEvent(mainWin, new QKeyEvent(QEvent::KeyPress, Key_X, 'X', 0));
```

### sendEvent()

- 需要在栈上创建一个QEvent

```c++
QKeyEvent event(QEvent::KeyPress, Key_X, 'X', 0);
QApplication::sendEvent(mainWin, &event);
```

### Ⅲ

- 很少需要直接调用postEvent()或sendEvent()，
- 大多数事件是由Qt或窗口系统在必要时自动生成的
- 想发送事件时，一般情况下，Qt会有一个函数来完成(例如，update()和repaint())。

## 自定义事件

事件类型为QCustomEvents, 可用值大于1024

```c++
const QEvent::Type MyEvnet = (QEvent::Type)1234;
QApplication::postEvent(obj, new QCustomEvent(MyEvent));
```

## 事件分级

重新实现特定的事件处理程序。
 
- QObject和QWidget为不同类型的事件提供了许多特定的事件处理程序(例如，绘制事件的paintEvent())。

重新实现QObject::event()。

- event()函数是对象所有事件的入口点。QObject和QWidget中的默认实现只是将事件转发给特定的事件处理程序。

在QObject上安装事件过滤器。

- 事件过滤器是一个对象，它在另一个对象的事件到达预定目标之前接收这些事件。

在qApp上安装事件过滤器。

- 例外情况下，qApp上的事件过滤器监视发送到应用程序中所有对象的所有事件。

重新实现QApplication:notify()。

- Qt的事件循环和sendEvent()调用这个函数来分派事件。通过重新实现它，你可以比其他人更早地看到事件

## 事件传播

一些事件类型可以传播

- 如果一个目标没有处理一个事件，Qt会尝试为该事件寻找另一个接收器，并使用新目标调用QApplication::notify()

> 例如，传播关键事件;如果有焦点的小部件没有处理某个键，Qt将同样的事件分派给父Widget，然后分派给父Widget的父Widget，以此类推，直到它到达顶层Widget。

## Accept和Ignore

- 如果事件处理程序对事件调用accept()，则事件不会进一步传播;如果一个事件处理程序调用ignore()， Qt会尝试寻找另一个接收者