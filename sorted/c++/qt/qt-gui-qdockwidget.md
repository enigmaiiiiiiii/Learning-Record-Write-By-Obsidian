# QDockWidget

- QDockWidget充当其子小部件的包装器，用setWidget()设置。

## 关于DockWidget的尺寸

- 应在子窗口小部件中实现自定义sizeHint()、minimum和maximum以及size policy。
- QDockWidget将遵循子部件尺寸，调整自己的约束以包括框架和标题。
- 不应在QDockWidget本身上设置大小限制，因为它们会根据是否停靠而变化
- 停靠的QDockWidget没有框架和较小的标题栏。