# 数据表操作

> `[]`, 表示非必须选项

## 创建数据表

```sql
create [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name (create_definition...) [table_options] [partition_options]
```

- create_definition包括列名称和列定义, 多个列用`,`隔开: `col_name column_definition` 
  - col_name
  - column
    - data_type

比如: 创建card表，表头为cost, description, packName, 数据类型分别是int, varchar(200), varchar(50)

```sql
create table card(
    cost int,
    description varchar(200),
    packName varchar(50)
)
```

## 重命名表

## 查询列信息

## 添加字段

```sql
ALTER TABLE tbl_name ADD col_name data_type [first]
```

- first表示在最前面添加

## 修改列属性

```sql
ALTER TABLE tbl_name MODIFY col_name col_property
```

## 删除字段

```sql
ALTER TABLE tbl_name DROP col_name
```