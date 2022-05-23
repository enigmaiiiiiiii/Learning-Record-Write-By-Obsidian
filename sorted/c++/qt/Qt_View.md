# 视图

- 通过setModel(model)设置视图的[数据模型](Qt_Model.md)为model

- QListView:显示单列的列表数据, 一维数据
- QTreeView: 树状数据
- QTableView: 表格数据
- QColumnView: 多个树状数据
- QHeaderView: 表头或列表头视图

通过调用setModel()函数, 为视图设计一个数据模型

## Selection

[处理Selection](Qt_View_Manage_Selection.md)

## 视图和模型未分离的便捷类

QListWidget, QTableWidget, QTreeWidget

- 适合于少量数据的存储和显示
- 不灵活