# 约束

- 有主键约束, 外键约束, 检查约束，唯一约束

## 主键约束


## 外键约束

[外键](MySQL_Foreign_Key.md)

- pk_card: 约束名称
- 不使用constraint语句，mysql会自动创建一个名称`<tbl>_<col>fk_1`的约束

```sql
create table card(
    cost int,
    description varchar(200),
    packName varchar(50),
    constraint pk_card primary key(cost, packName)
) comment = "card table";
```

## 检查约束

- 语法: `CONSTRAINT symbol CHECK (expr) [[NOT] ENFORCED]`

```sql
create table tbl_name(
    check (c1 <> c2),  -- 表约束
    c1 int check (c1 > 10), -- 列约束
    c2 int CONSTRAINT c2_positive CHECK (c3 > 10), -- 列约束
    c3 int check (c3 > 10), -- 列约束
    Constraint c3_nonzero check (c3 <> 0), -- 表约束
    check (c1 <> c2)  -- 表约束
);
```

## 唯一约束

## constraint语句

- 用于显示设置约束符号
- 语法: `CONSTRAINT constraint_name constraint_type (index_col_name,...) [index_type] [index_option] ...`
  - constraint_name: 约束名称
  - constraint_type: 约束类型
    - `PRIMARY KEY`: 主键
    - `UNIQUE`: 唯一
    - `FOREIGN KEY`: 外键
    - `CHECK`: 检查