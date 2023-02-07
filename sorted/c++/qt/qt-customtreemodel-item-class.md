# TreeItem类

```c++
class TreeItem
{
public:
    explicit TreeItem(const QList<QVariant> &data, TreeItem *parent = nullptr);
    ~TreeItem();

    TreeItem *child(int number);
    int childCount() const;
    int columnCount() const;
    QVariant data(int column) const;
    bool insertChildren(int position, int count, int columns);
    bool insertColumns(int position, int columns);
    TreeItem *parent();
    bool removeChildren(int position, int count);
    bool removeColumns(int position, int columns);
    int childNumber() const;
    bool setData(int column, const QVariant &value);

private:
    QList<TreeItem *> childItems;
    QList<QVariant> itemData;
    TreeItem *parentItem;
};
```

## 私有数据成员

```c++
QList<TreeItem*> childItems;
QList<QVariant> itemData;
TreeItem *parentItem;
```

- `QList<TreeItem*> childItems;`子节点
- `QList<QVariant> itemData;` : 存放数据
- `TreeItem *parentItem;`: 父节点

## 成员函数

添加子项

```c++
void TreeItem::appendChild(TreeItem *item)
{
    m_childItems.append(item);
}
```

从`childItems`成员中返回child item

```c++
TreeItem *TreeItem::child(int number)
{
    if (number < 0 || number >= childItems.size())
        return nullptr;
    return childItems.at(number);
}
```

返回当前父项的child item个数

```c++
int TreeItem::childCount() const
{
    return childItems.count();
}
```

返回子项索引

- indexOf: 返回值在列表中第一个出现的索引位置，从索引位置向前搜索。如果没有匹配项，返回-1。

```c++
int TreeItem::childNumber() const
{
    if (parentItem)
        return parentItem->childItems.indexOf(const_cast<TreeItem*>(this));
    return 0;
}
```

columnCount()函数返回QVariant对象的内部itemData列表中的元素数量

```c++
int TreeItem::columCount()
{
    return itemData.count();
}
```

使用Data()函数检索数据，该函数访问itemData列表中的适当元素:

```c++
QVariant TreeItem::data(int column) const
{
    if (column < 0 || column >= itemData.size())
        return QVariant();
    return itemData.at(column);
}
```

使用setData()函数设置数据，该函数仅为有效的列表索引存储itemData列表中的值，对应于模型中的列值:

```c++
bool TreeItem::setData(int column, const QVariant &value)
{
    if (column < 0 || column >= itemData.size())
    {
        return false;
    }
    itemData[column] = value;
    return true;
}
```

可编辑模型通常需要调整大小，以便插入和删除行和列。在模型中，在给定的模型索引下插入行会导致在相应的条目中插入新的子条目，由insertChildren()函数处理

```c++
bool TreeItem::insertChildren(int position, int count, int columns)
{
    if (position < 0 || position > childItems.size())
        return false;

    for (int row = 0; row < count; ++row) {
        QList<QVariant> data(columns);
        TreeItem *item = new TreeItem(data, this);
        childItems.insert(position, item);
    }

    return true;
}
```

这可以确保使用所需的列数创建新项，并将其插入到内部childItems列表中的有效位置。使用removeChildren()函数删除条目:

```c++
bool TreeItem::removeChildren(int position, int count)
{
    if (position < 0 || position + count > childItems.size())
        return false;

    for (int row = 0; row < count; ++row)
        delete childItems.takeAt(position);

    return true;
}
```

如上所述，插入和删除列的函数与插入和删除子项目的函数使用方式不同，因为它们预期会对树中的每个项目调用。我们通过递归地在item的每个子元素上调用这个函数来实现:

```c++
bool TreeItem::insertColumns(int position, int columns)
{
    if (position < 0 || position > itemData.size())
        return false;

    for (int column = 0; column < columns; ++column)
        itemData.insert(position, QVariant());

    for (TreeItem *child : qAsConst(childItems))
        child->insertColumns(position, columns);

    return true;
}
```