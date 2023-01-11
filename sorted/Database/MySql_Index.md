# 索引

- **高效查询的关键**
- 然而索引滥用会减低表更新的速度, 如insert, update, delete
- 索引可以包含一个列或多个列, 按包含的列分为:
  - 单列索引 
  - 多列索引
- 按数据结构索引类型分为
  - B-Tree索引
  - Hash索引
  - R-Tree索引

## 创建索引

在创建表时创建索引

```sql 
create table tbl_name(
  id int primary key,
  name varchar(20),
  age int,
  index idx_name (name)
);
```

- idx_name是索引名称, 可以省略, 省略时将自动生成
- name是索引包含的列

现有表创建索引

```sql
create index idx_name on tbl_name(name);
```

## 显示索引信息

```sql
SHOW INDEX FROM tble_name\G;
```

- \G: 以列的形式显示

## B-Tree索引

- 使用[B-Tree数据结构](../数据结构和算法/Data_Structure_Tree.md)
- 使用限制
  - 只能从索引最左列开始查找
  - 不能跳过索引列
  - 如果索引列使用范围查询, 则右边的列无法使用索引优化查找

## Hash索引

- 使用[Hash数据结构](../数据结构和算法/Data_Structure_Hash_Table.md)
- 使用限制
  - 只包含哈希值和行指针, 不能使用索引值来读取行, 通过指针读取行速度很快，所以对性能影响并不明显
  - 无法用于排序
  - 由于哈希值由索引列全部内容来计算哈希值, 所以不支持使用部分索引列匹配查询
  - 只支持等值比较, 不支持范围查询
  - 哈希冲突会导致性能下降
