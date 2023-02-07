# 事件: 学习之路内容

事件可以使用“事件过滤器”进行过滤，对于有些事件进行额外的处理，另外的事件则不关心。
信号一旦发出，对应的槽函数一定会被执行。

- 一般来说
如果**使用**组件，关心的是信号槽；
如果**自定义**组件，关心的是事件。因为可以通过事件来改变组件的默认操作;

> 比如，如果我们要自定义一个能够响应鼠标事件的`EventLabel`，我们就需要重写`QLabel`的鼠标事件，做出我们希望的操作，有可能还得在恰当的时候发出一个类似按钮的`clicked()`信号（如果我们希望让这个`EventLabel`能够被其它组件使用）或者其它的信号。

## 学习示例

> 示例程序中需要鼠标点击才能显示鼠标坐标，因为QWidget中的mouseMoveEvent()鼠标追踪属性，默认为false, 即鼠标点击一次后开始追踪，才能发出mouseMoveEvent()事件

```c++
class EventLabel : public QLabel
{
protected:
    // 继承自QLabel的virtual 事件
    void mouseMoveEvent(QMouseEvent *event);  
    void mousePressEvent(QMouseEvent *event);
    void mouseReleaseEvent(QMouseEvent *event);
};

void EventLabel::mouseMoveEvent(QMouseEvent *event)
{
    this->setText(QString("<center><h1>Move: (%1, %2)</h1></center>")
                  .arg(QString::number(event->x()), QString::number(event->y())));
}

void EventLabel::mousePressEvent(QMouseEvent *event)
{
    this->setText(QString("<center><h1>Press: (%1, %2)</h1></center>")
                  .arg(QString::number(event->x()), QString::number(event->y())));
}

void EventLabel::mouseReleaseEvent(QMouseEvent *event)
{
    QString msg;
    msg.sprintf("<center><h1>Release: (%d, %d)</h1></center>",
                event->x(), event->y());
    this->setText(msg);
}

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    EventLabel *label = new EventLabel;
    label->setWindowTitle("MouseEvent Demo");
    label->resize(300, 200);
    label->show();

    return a.exec();
}
```