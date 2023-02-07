# 基于QAbstractItemModel

- 继承自QAbstractItemModel的子类有一个数据成员用来存储数据


|名称|描述|
|--|--|
|QStringListModel|用于处理字符串列表数据的数据模型类|
|QStandardItemModel|标准的居于项数据的数据模型类, 每个项数据可以是任何数据类型|
|QFileSystemModel|计算机上文件系统的数据模型类|
|QSortFilterProxyModel|与其它数据模型结合，提供排序和过滤功能的数据模型|
|QSqlQueryModel||
|QSqlTableModel||
|QSqlRelationalTableModel||


****

成员

```c++
bool QAbstractItemModel::setData(const QModelIndex &index, const QVariant &value, int role = Qt::EditRole)
```

- 设置index处数据的值为value, 角色为role
- 通过[元对象系统](qt-meta-object-system.md)调用

```c++
QVariant QAbstractItemModel::data(const QModelIndex &Index, int role = Qt::DisplayRole) const
```

- 用于model返回index位置的对应[项角色]
- 如果没有数据返回, 应该返回QVariant对象(`return QVariant()`), 而不是0
- 通过[元对象系统](qt-meta-object-system.md)调用

```c++
int QAbstractItemModel::rowCount(const QModelIndex &parent = QModelIndex()) const
```

- 返回parent下的行数
- 通过[元对象系统](qt-meta-object-system.md)调用

```c++
Qt::ItemFlags QAbstractItemModel::flags(const QModelIndex &index) const
```

- 设置Qt::ItemFlag


## 标准项模型

[QStandardItemModel](qt-data-model-qstandarditemmodel.md)

## 自定义Model

QAbstractListModel

- 一维列表数据抽象模型
- 需要实现
  - rowCount()
  - data()
- 可选实现
  - headerData()
- 重新实现的函数
  - dropMimeData
  - flags
  - index
  - sibling
  
> 如创建字符串的List模型, 通过继承QAbstractListModel, 并实现以上方法