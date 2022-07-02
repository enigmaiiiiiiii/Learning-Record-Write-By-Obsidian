# QSql

[QSqlDatabase](Qt_QSqlDatabase_Class.md)

[QSqlQuery](Qt_QSqlQuery_Class.md)

[事务](Qt_SqlDatabase_Transaction.md)

## QSqlRecord 

- 表示数据库的一条记录
- value(name): 返回记录在name字段(列)的值
- field(idx): 返回第idx个QSqlField对象

## QSqlField

-  字段值，描述列特征对象
- name(): 字段名称
- value(): 字段值

```c++
QSqlField field("age", QVariant::Int);
```
