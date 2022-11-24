# EXPLAIN

- 在**select**关键字之前加上**EXPLAIN**关键字, 可以返回每一步的执行信息

> 不是去真正的去执行SELECT查询语句

```sql
EXPLAIN SELECT
    *
FROM
    sakila.film_actor WHERE film_id = 1\G
```
执行结果:

```
*********************** 1. row ***********************
           id: 1
  select_type: SIMPLE
        table: film_actor
         type: ref
possible_keys: idx_fk_film_id
          key: idx_fk_film_id
      key_len: 2
          ref: const
         rows: 10
        Extra:
```

只能用于**SELECT**语句

但是可以通过将**INSERT**、**UPDATE**、**DELETE**语句转换为**SELECT**语句来作为参考

- 比如update语句:

```sql
UPDATE
    sakila.actor
INNER JOIN
    sakila.film_actor USING (actor_id)
SET first_name = 'HARPO' WHERE film_id = 1;
```

- 可以下面语句作为上面update语句的执行参考

```sql
EXPLAIN SELECT
    film_actor.actor_id
FROM
    sakila.actor
INNER JOIN sakila.film_actor USING(actor_id)\G
```