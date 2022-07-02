# 数据库

[SQLite](SQLite.md)

[MySQL](MySQL.md)

## SQL

1. ALTER

删除字段

```sql
ALTER TABLE table_name DROP field_name
```

添加字段

```sql
ALTER TABLE table_name ADD field_name type_name
```

修改字段类型

```sql
ALTER TABLE table_name MODIFY field_name field_type
```

修改字段名和类型

```sql
ALTER TABLE table_name MODIFY field_name new_name field_type
```

修改字段默认值, 用到两个ALTER

```sql
ALTER TABLE table_name ALTER field_name SET DEFAULT new_default_val 
```

删除字段默认值

```sql
ALTER TABLE table_name ALTER filed_name DROP DEFAULT
```

2. PRIMARY KEY 主键

主键：必须包含唯一的值
每个表只有一个主键
主键的值唯一区分每个行

3. FOREIGN KEY 外键

包含另一个表的主键值

```sql
CREATE TABLE Orders
(
Id_O int NOT NULL,
OrderNo int NOT NULL,
Id_P int,
PRIMARY KEY (Id_O),  
FOREIGN KEY (Id_P) REFERENCES Persons(Id_P)  --外键约束
)
```

```sql
ALTER TABLE stuedens ADD FOREIGN key(c_id) references classes(id));
```