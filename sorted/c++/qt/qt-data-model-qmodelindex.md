# 索引

- 由QModelIndex类表示
- 是对一块数据的<font color="red">临时引用</font>
- 确保数据表示和数据的获取分离
- 因为模型可能随时对内部的结构进行重新组织，这样模型索引可能失效，所以不需要也不应该存储模型索引
- 如果需要对一块数据进行长时间的引用，必须使用QPersistentModelIndex

创建一个模型model的索引对象: 行号，列号，父项模型索引

```c++
QModelIndex index = model->index(row, column, parent);
```

QModelIndex()可以表示父项模型索引

## createIndex()

```c++
QModelIndex QAbstractItemModel::createIndex(int row, int column, const void *ptr = nullptr) const
```

创建一个(row, column)的索引，引用自ptr;