# 绘图系统

- QPainter $\rightarrow$ QPaintEngine $\rightarrow$ QPaintDevice 

QPaintEngine由QPainter和QPaintDevice内部使用

QPainterDevice

- 进行二维绘制
- QPaintDevice的绘图功能目前由QWidget、QImage、QPixmap、QPicture和QPrinter子类实现