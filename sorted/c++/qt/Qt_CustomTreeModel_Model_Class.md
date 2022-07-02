# 模型类

```c++
QVariant data(const QModelIndex &index, 
              int role) const override;
QVariant headerData(int section, 
                    Qt::Orientation orientation,
                    int role = Qt::DisplayRole) const override;

QModelIndex index(int row, int column,
                  const QModelIndex &parent = QModelIndex()) const override;
QModelIndex parent(const QModelIndex &index) const override;

int rowCount(const QModelIndex &parent = QModelIndex()) const override;
int columnCount(const QModelIndex &parent = QModelIndex()) const override;
```

以上为需要只读模型实现的函数
以下为实现可编辑模型实现的函数

```c++
Qt::ItemFlags flags(const QModelIndex &index) const override;
bool setData(const QModelIndex &index, 
             const QVariant &value,
             int role = Qt::EditRole) override
bool insertColumns(int position, int columns,
                   const QModelIndex &parent = QModelIndex()) override;
bool removeColumns(int position, int columns,
                   const QModelIndex &parent = QModelIndex()) override;
bool insertRows(int position, int rows,
                const QModelIndex &parent = QModelIndex()) override;
bool removeRows(int position, int rows,
                const QModelIndex &parent = QModelIndex()) override;
private:

void setupModelData(const QStringList &lines, TreeItem *parent);
TreeItem *getItem(const QModelIndex &index) const;
TreeItem *rootItem;
```

## 方法实现

模型需要实现能够将任何给定的模型索引转换为相应的item, 因此定义了一个getItem()函数来执行这个重复的任务:

```c++
TreeItem *TreeModel::getItem(const QModelIndex &index) const
{
    if (index.isValid()) {
        TreeItem *item = static_cast<TreeItem*>(index.internalPointer());
        if (item)  // 
            return item;
    }
    return rootItem;
}
```

rowCount()返回 当前元素有子元素则返回的子元素数量

> 首先使用getItem()函数来获取相关的条目, 然后返回它所包含的子元素的数量

```c++
int TreeModel::rowCount(const QModelIndex &parent) const
{
    if (parent.isValid() && parent.column() > 0)
        return 0;
    const TreeItem *parentItem = getItem(parent);
    return parentItem ? parentItem->childCount() : 0;
}
```

列数等于同级元素的列数, 保存数据内容的成员的QList::size()

```c++
int TreeModel::columnCount(const QModelIndex &parent) const
{
    Q_UNUSED(parent);
    return rootItem->columnCount();
}
```

需要实现flags()函数, 实现可编辑和选择 ,
返回一个包括Qt::ItemIsEditable 和Qt::ItemIsSelectable标志以及Qt::ItemIsEnabled标志的组合标志

```c++
Qt::ItemFlags TreeModel::flags(const QModelIndex &index) const
{
    if (!index.isValid())
        return Qt::NoItemFlags;

    return Qt::ItemIsEditable | QAbstractItemModel::flags(index);
}
```

模型索引

- `TreeItem *childItem = parentItem->child(row);`：等到索引(引用，指向)的item

```c++
QModelIndex TreeModel::index(int row, int column, const QModelIndex &parent) const
{
    if (parent.isValid() && parent.column() != 0)
        return QModelIndex();

    TreeItem *parentItem = getItem(parent);
    if (!parentItem)
        return QModelIndex();

    TreeItem *childItem = parentItem->child(row);
    if (childItem)
        return createIndex(row, column, childItem);
    return QModelIndex();
}
```

确定item的父项

```c++
QModelIndex TreeModel::parent(const QModelIndex &index) const
{
    if (!index.isValid())
        return QModelIndex();

    TreeItem *childItem = getItem(index);
    TreeItem *parentItem = childItem ? childItem->parent() : nullptr;

    if (parentItem == rootItem || !parentItem)
        return QModelIndex();

    return createIndex(parentItem->childNumber(), 0, parentItem);
}
```

