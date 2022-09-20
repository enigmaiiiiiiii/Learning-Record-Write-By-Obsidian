# 数据表操作

> `[]`, 表示非必须选项

## 创建数据表

```sql
CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name (create_definition...) [table_options] [partition_options]
```

- create_definition包括列名称和列定义, 多个列用`,`隔开: `col_name column_definition` 
  - col_name
  - column_definition一次包括
    - 数据类型
    - 取值属性
- 指定列的取值属性
  - `NOT NULL`: 不允许为空 
  - `DEFAULT`: 默认值
  - `AUTO_INCREMENT`: 自增
  - `UNIQUE`: 唯一
  - `PRIMARY KEY`: 主键
  - `COMMENT`: 注释

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

> 先use database 选择数据库

```sql
desc tbl_name
```

## 添加字段

```sql
ALTER TABLE tbl_name ADD col_name data_type [first]
```

- first表示在最前面添加

## 修改列信息

- change: 修改列名和重新定义
- modify: 修改列定义
- rename: 修改列名

```sql
ALTER TABLE tbl_name MODIFY col_name col_property
```

```sql
ALTER table tbl_name RENAME col_name TO new_col_name
```

## 添加字段(列)

```sql
ALTER TABLE tbl_name ADD col_name col_property
```

## 删除字段(列)

```sql
ALTER TABLE tbl_name DROP col_name
```