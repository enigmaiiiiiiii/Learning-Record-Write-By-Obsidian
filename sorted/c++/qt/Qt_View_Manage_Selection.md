# 处理Selection

setSelectionMode(): 设置选择模式

- 参数类型 : QABstractItemView::SelectionMode

setSelectionModel(): 指定选择模型

- 参数类型 : QItemSelectionModel

## Selection模型

QItemSelectionModel

```c++
QItemSelection::QItemSelection(const QModelIndex &topLeft, const QModelIndex &bottomRight)
```

[QModelIndex](Qt_Data_Model_QModelIndex.md)参数topLeft和bottomRight

信号: 

```c++
void QItemSelectionModel::selectionChanged(
    const QItemSelection &selected, 
    const QItemSelection &deselected)
```

- 选择发生变化时，发出这个信号。
- 选择中的更改: 未选择项的项选择, 已选择项的项选择。