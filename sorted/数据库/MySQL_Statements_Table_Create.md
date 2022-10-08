# 创建表

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
  - `DEFAULT val`: 默认值
  - `AUTO_INCREMENT`: 自增
  - `UNIQUE`: 唯一
  - `PRIMARY KEY`: 主键
  - `COMMENT`: 注释

比如: 创建card表，表头为cost, description, packName, 数据类型分别是int, varchar(200), varchar(50)

```sql
CREATE TABLE card(
    cost int,
    description varchar(200),
    packName varchar(50)
) comment = "card table";
```
## 约束语句

[约束](MySQL_Statements_Constraint.md)

## index | key 语句

[关于索引的更多内容](MySQL_Index.md)

- key是index的同义词
- 指定索引

```sql
create table tbl_name(
    col_name1 type,
    col_name2 type,
    key index_name(col_name1, col_name2)
)
```


