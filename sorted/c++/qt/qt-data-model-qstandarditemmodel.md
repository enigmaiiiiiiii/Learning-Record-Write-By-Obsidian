# Item模型

- QStandardItemModel, 存储数据的通用模型
- 设置数据
  - 另一种方式使用setData(), 并指定角色
  - 提供了很多便捷函数, 如设置图标setIcon()

设置数据

`model->setData()`
`model->setItem()`

Qt::ItemFlag

|Constant|Value|Description|
|--|:--:|--|
|Qt::NoItemFlags|0|It does not have any properties set|
|Qt::ItemIsSelectable|1|可以被选择|
|Qt::ItemIsEditable|2|可编辑|
|Qt::ItemIsDragEnabled|4|可拖拽|
|Qt::ItemIsDropEnabled|8||
|Qt::ItemIsUserCheckable|16||
|Qt::ItemIsEnabled|	32||
|Qt::ItemIsAutoTristate	|64	||
|Qt::ItemIsTristate	|ItemIsAutoTristate| |
|Qt::ItemNeverHasChildren	|128||
|Qt::ItemIsUserTristate	|256||
