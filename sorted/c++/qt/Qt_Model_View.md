# Model/View结构

## 基本原理

> 用户在界面上的各种操作，实际上是修改了界面组件锁关联的数据库内的数据
> 将组件与所编辑的数据分离开

- 数据
- 视图组件
- 模型或数据模型与实际数据通信, 并为视图组件提供数据接口

预定义的数据模型

- QStringListModel,  QSqlTableModel 

代理

- 通过一个用户定制数据界面显示和编辑方式

模型，视图，代理之间通过信号和槽通信

## 数据模型

- 基于QAbstractIetmModel

|||
|--|--|
|QStringListModel|用于处理字符串列表数据的数据模型类|
|QStardardItemModel|标准的居于项数据的数据模型类, 每个项数据可以是任何数据类型|
|QFileSystemModel|计算机上文件系统的数据模型类|
|QSortFilterProxyModel|与其它数据模型结合，提供排序和过滤功能的数据模型|
|QSqlQueryModel||
|QSqlTableModel||
|QSqlRelationalTableModel||

## 视图组件

- QListView:显示单列的列表数据, 一维数据
- QTreeView: 树状数据
- QTableView: 表格数据
- QColumnView: 多个树状数据
- QHeaderView: 表头或列表头视图

通过调用setModel()函数, 为视图设计一个数据模型

## 代理