# Qt::WindowFlags

- 枚举类型

Qt::Widget: 

- 是一个默认widget, 如果这种类型的widgets有parent窗口，它们就是子窗口小部件; 
- 如果它们没有parent窗口，它们就是独立窗口

Qt::Window:

- widget是一个窗口，通常带有窗口系统框架和标题栏，
- 不管widget是否有parent窗口
- 如果小部件没有父组件，则不可能取消该标志的设置, 必然是一个窗口

Qt::Dialog

- widget是对话框（即标题栏中通常没有最大化或最小化按钮）,QDialog的默认类型
- 如果您想将其用作模式对话框，则应该从另一个窗口启动，或者有一个父窗口，并与QWidget::windowModality属性一起使用。
- 如果设置为模态，对话框将阻止应用程序中的其他顶级窗口获取任何输入

Qt::Sheet

- macOS上的工作表。
-工作表意味着窗口模态，建议使用QWidget::setWindowModality()或QDialog::open()

Qt::Drawer

- 过时了

Qt::Popup


Qt::SplashScreen

- SplashScreen：用于启动时间较长的程序，向用户展示加载过程

Qt::SubWindow: 

- widget是一个子窗口

Qt::ForeignWindow
Qt::CoverWindow