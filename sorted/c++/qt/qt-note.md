# qt经验

1. 设置项目使用的qt版本 

Qt Creator中: Projects $\rightarrow$ Build & Run, 选择编译工具

2.  截取屏幕

```c++
// Qt5:
QPixmap grab = window.screen()->grabWindow(QApplication::desktop()->winId());
// Qt6:
QPixmap grab = window.screen()->grabWindow(0);
```

```c++
QPixmap QScreen::grabWindow(WId window, int x = 0, int y = 0, int width = -1, int height = -1);
```

- WId可以通过QWidget::winId()获得
- 使用WId而不是QWidget的原因是WId可以抓取应用程序外的窗口
- Qt5截屏使用QApplication::desktop)->winId()作为WId
- Qt6截屏Wid为0
