# Model/View结构

- 视图组件通过`setModel(model)`设置视图的数据模型为model

[基本原理](Qt_Model_View_原理.md)

[数据模型](Qt_Model.md)

[视图组件](Qt_View.md)

[视图模型的委托显示和编辑](Qt_Delegate.md)

代理模型

- 将数据进行排序或过滤后，提供给视图
- QSortFilterProxyModel来完成数据的排序和过滤
- setSourceModel(model): 设置被过滤的数据model

数据-窗口映射器

- QDataWidgetMapper提供了数据模型到窗口部件的映射