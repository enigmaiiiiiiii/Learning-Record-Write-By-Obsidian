# 数据表操作

> `[]`, 表示非必须选项

## 创建数据表

[创建表](mysql-statements-table-create.md)

## 重命名表

## 查询列信息

> 先use database 选择数据库

```sql
DESC tbl_name
```

## 删除表

```sql
DROP TABLE tbl_name
```

## 改变表结构

### 修改列信息

- change: 修改列名和重新定义
- modify: 修改列定义
- rename: 修改列名

```sql
ALTER TABLE tbl_name MODIFY col_name col_property
```

```sql
ALTER table tbl_name RENAME col_name TO new_col_name
```

### 添加字段(列)

```sql
ALTER TABLE tbl_name ADD col_name col_property [FIRST|AFTER col_name]
```
- first表示在最前面添加
- after表示在指定列后面添加

### 删除字段(列)

```sql
ALTER TABLE tbl_name DROP col_name
```