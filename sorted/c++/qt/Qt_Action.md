# 动作

## 概念

- 动作可能设置在菜单，工具栏，快捷键，当用户点击图标或按快捷键时，动作响应；

> 无论是出现在菜单栏还是工具栏，用户选择之后，所执行的动作应该都是一样的。

- 因此，Qt 并没有专门的菜单项类，只是使用一个`QAction`类，抽象出公共的动作。
  - 当我们把`QAction`对象添加到菜单，就显示成一个菜单项，
  - 添加到工具栏，就显示成一个工具按钮。
  - 用户可以通过点击菜单项、点击工具栏按钮、点击快捷键来激活这个动作。


## 特点

- 将每个命令表示为一个操作
- 在应用程序中，许多常用命令可以通过多种方式调用

> 如菜单、工具栏按钮和键盘快捷键调用。

## 创建

```c++
const QIcon openIcon = QIcon::fromTheme("document-open", QIcon(":/images/open.png"));
QAction *openAct = new QAction(openIcon, tr("&Open..."), this);
```

- 动作可以作为独立对象创建，也可以在, 如QMenu类包含了便捷的创建Action的方式
- QAction可能包含一个icon, menutext, 快捷键，状态文字，"what's This",  tooltip(工具提示)
  - 通常在constructor中设置
  - 也可通过setIcon(), setText(),... 设置
  
## 设置

```c++
openAct->setShortcuts(QKeySequence::Open);
openAct->setStatusTip(tr("Open an existing file"));
```

- 使用QWidget::addAction()或QGraphicsWidget::addAction()将操作添加到小部件中。
- 一个Action必须添加到一个子Widget才能被使用;
- Action1快捷方式应该是全局的

> 即Qt:: shortcutContext设置为Qt::ApplicationShortcut

## 连接

> 大多数情况下，Action是应用主窗口的一个子窗口

```c++
connect(openAct, &QAction::triggered, this, &MainWindow::open);
```

```c++
fileMenu->addAction(openAct);
fileToolBar->addAction(openAct);
```

