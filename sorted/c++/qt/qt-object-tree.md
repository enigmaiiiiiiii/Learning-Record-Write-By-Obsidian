# 对象树

- QObjects将对象组织在对象树中。

## 创建/删除一个子QObject

- 添加到父对象的children()列表中
- 在父对象被删除时删除
- 当QObjects在堆上被创建时(如用new创建)
  - 可以用来以任何顺序构造树，
  - 树中的对象可以以任何顺序被销毁。
- 当树中的任何QObject被删除时，
  - 如果该对象有一个父对象，析构函数将自动从其父对象中删除该对象。
  - 如果对象有子对象，析构函数会自动删除每个子对象
  
## QQuickItem是Qt Quick模块的基本视觉元素

- 它继承自QObject，
- 有一个视觉父元素的概念, 项目的可视父级不一定与它的对象父级相同
  
## QWidget是Qt Widgets模块的基类

- 一个子类通常变成一个子部件
  - 显示在父部件的坐标系统中
  - 被父部件的边界图形化地剪裁
  
## 调试函数

- QObject::dumpObjectTree()
- QObject::dumpObjectInfo()