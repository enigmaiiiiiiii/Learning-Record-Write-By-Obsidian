# 关联查询

```sql
select A.col_name, B.col_name from A, B where [condition of A.col_name | B.com_name]
```

## 建立连接

等值联结(where子句)

- `where tbl1.col_name1 = tbl2.col2_name2`

> 如果不使用where子句, 则tbl1中每行将和tbl2中每个行进行配对, 而不管逻辑是否匹配

内部联结

- `join tbl_name on condition`
- 查询结果与等值联结没有区别, 用join on语法明确联结条件

```sql
from tbl1 join tbl2 on tbl1.name1 = tbl2.name2`;
```

外连接

- 查询一张表的全部和另一张表的交集
- 可以包含另一个表中没有的信息

```sql
from tbl1 left join tbl2 on tbl1.name1 = tbl2.name2;
```

left表示左侧table为主table



