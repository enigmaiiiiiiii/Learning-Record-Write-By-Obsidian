# 修改

## 添加

- `,`后表示批量插入

```sql
INSERT INTO table_name VALUES(column1, column2, column3,...columnN), (column1, column2, column3,...columnN), ...;
```

## 更新(UPDATE)

## 删除(DELETE)

```sql
DELETE FROM tbl WHERE id=1;
```
- 删除符合条件的行
- 不使用where子句将删除所有行

## 更新和删除指导原则

- UPDATE和DELETE之前, 应先用SELECT进行测设
- 使用强制实施引用完整性的数据库, 这样MySQL将不允许删除具有与其他表相关联的数据的行。

```sql
update tbl set name='new name' where id=1;
```