# 外键

- 一种约束
- 有助于保持数据一致性
- 不能跨[引擎](MySQL_Engine.md)

## 设置外键 

```sql
foreign key (child_id) references parent_table(parent_id) ON [UPDATE | DELETE] [options]
```

```sql
constraint <foreignKeyName> 
    foreign key child_id_1, child_id_2 
    references paretn_table(parent_id_1, parent_id_2)
```

- foreignKeyName为外键约束名

- 允许使用同一表中的列作为外键, 子表和父表是同一张表
- options 取值: 执行更新或删除时的操作
    - NO ACTION: **默认值**, 不允许删除或更新, 不会出现在mysqldump转存表中
    - RESTRICT: 等同于`NO ACTION`, 等同于不设置 `ON DELETE/UPDATE`语句, 会出现在mysqldump转存表中
    - CASCADE: 级联操作, 删除或更新父表外键会在子表引用的行执行相同操作
      - 如果两个表都定义了外键, 使父表和子表相互引用, 需要在每条foreign key语句中指定ON DELETE CASCADE或ON UPDATE CASCADE
    - SET NULL: 设置为 NULL
    - SET DEFAULT: 设置为默认值

```sql
create table student(
    id int primary key,
    name varchar(20)
)
```

```sql
create table course(
    id int primary key,
    student_id int,
    name varchar(20),
    foreign key(student_id) references student(id)
)
```

## 创建外键须满足的条件

- 父表和子表必须使用相同的[存储引擎]
- 创建约束需要父表的应用权限
- 父表被引用键和子表引用键必须具有相同的数据类型，integer(整数)和decimal(小数)精度必须相同
- 外键和引用键上必须由索引

## 关联行为

- 执行UPDATE或DELETE操作时, 取决于外键声明语句


## 外键命名规则 

- foreign key index_name