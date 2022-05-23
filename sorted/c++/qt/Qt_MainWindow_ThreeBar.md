
# 菜单栏， 工具栏， 状态栏

菜单栏

```c++
QMenu *file = menuBar()->addMenu(tr("&File"));                            
```

- 添加菜单栏选项，显示为“File(F)” , 空按钮

工具栏

```c++
QToolBar *tooBar = addToolBar(tr("&File"));
```

- 菜单栏只能由一个，工具栏可以有多个因此用addToolBar

状态栏

```c++
statusBar();
```

- 静态函数statusBar(), 添加状态栏

