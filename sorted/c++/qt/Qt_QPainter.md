# QPainter

所有可以进行绘制的对象的基类

- QWidget, QPixmap, QPicture, QImage, QPicture, QImage, QPrinter, QOpenGLPaintDevice

构造函数

```c++
QPainter::QPainter(QPaintDevice *device);
QPainter::QPainter();
```

- 使用第一个构造函数时，指定定绘制设备，并在构造时调用begin()函数，析构时调用end()函数
- 使用第二个构造函数时，使用QPainter成员函数QPainter::begin(QPaintDevice *device) 

```c++
QPainter painter;
painter.begin(this);
painter.drawLine(QPoint(0, 0), QPoint(100, 100));
painter.end();
```

## QPen

画笔对象, 用来设置线条样式，宽度, 画笔端点等属性


