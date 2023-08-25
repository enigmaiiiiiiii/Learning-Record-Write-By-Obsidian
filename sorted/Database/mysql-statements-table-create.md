# MySQL - Create Table Statements

```sql
CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name (create_definition...) [table_options] [partition_options]
```

- `create_definition`:
  - col_name
  - `column_definition` include
    - data type
    - attributes of value, available attributes are
      - `NOT NULL`: 
      - `DEFAULT val`: 
      - `AUTO_INCREMENT`: 
      - `UNIQUE`: 
      - `PRIMARY KEY`: 
      - `COMMENT`: 

for example: create table `card`, with columns `cost`, `description`, `packName`, data type are `int`, `varchar(200)`, `varchar(50)`

```sql
CREATE TABLE card(
    cost int,
    description varchar(200),
    packName varchar(50)
) comment = "card table";
```

## Constraint

[Constraint](mysql-statements-constraint.md)

## index | key statement

[detail about index](mysql-index.md)

- key and index are synonyms

specify index

```sql
create table tbl_name(
    col_name1 type,
    col_name2 type,
    key index_name(col_name1, col_name2)
)
```


