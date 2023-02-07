# 查询语句

> 全大写单词表示MySQL语句

## 语法

```sql
select col1, col2, ... from tbl_name where col_name filter_condition;
```

- where后只能写col_name条件

## 关键字

- 比较: `where field < val`
  - `>`
  - `<`
  - `!=(<>)`
- 逻辑关键字: 
  - `not expression`
  - `expression [AND | OR] expression`
- `is null`: 用于判断值是否为null的特殊语句, ~~is仅用于检查null, 没见过is用在别处~~
- 查询 val1 和 val2 之间: `between val1 and val2`
- 查询多个值: `in(val1, val2, ...)`

## 模糊查询 

LIKE

- `WHERE col_name like pattern`
- pattern: 匹配字符串
  - `_`: 代表一个任意字符
  - `%`: 0或多个未知字符


函数regexp_like()

- `WHERE REGEXP_LIKE(col_name, 'regex_pattern');`
- 使用正则表达式匹配

RLIKE(MariaDB)

- `WHERE col_name RLIKE regex_pattern`

## 排序(order by)

- asc升序，默认升序; desc降序
- 多个字段用`,`隔开

```sql
select col_name from tables order by col_name1 [desc], col_name2 [desc];
```

## 限制输出结果条数(limit)

- `limit num`: 输出查询结果的前num条数
- `limit num * p - 1, num`: 输出第p页的num条数据

## alias

## 聚合函数

- avg(col_name): 平均值
  - 列名必须作为参数给出
  - 多个列求平均值，需要使用多个avg
- max(col_name): 最大值
- min(col_name): 最小值
- count():  计数
  - count(*): 计算表中行数
  - count(col_name): 计算col_name列中不为null的数量

## 分组查询(GROUP BY)

```sql
select [col_name | function()] from tbl group by col_name  
```

## having

- 聚合函数用作查询条件

```sql
select * from tbl where conditon having avg(col_name) > 1; 
```

## 子查询

- 子查询的结果作为主查询的条件

***

## case when

- 将当前列的值根据判断生成新列
- 判断列值并返回新值

```sql
(case when condition then value1 when contition2 then value2 else value3 end) as new_col_name
```

```sql
SELECT name, score, (CASE
    WHEN score > 90 THEN 'A'
    WHEN score > 80 THEN 'B'
    WHEN score > 70 THEN 'C'
    ELSE 'D'
END) AS grade
```


