# MongoDB Database Operation

* [display current databases](#display-current-databases)
* [display database list](#display-database-list)
* [switch or create database](#switch-or-create-database)
* [list collections in current database](#list-collections-in-current-database)

## display current databases

```sh
db
```

## display database list

```sh
show dbs
```

- new create database will be ignored until insert a collection into it

## switch or create database

> use same command `use`

- do not need to create database before switch

```sh
use <database name>
```

## list collections in current database

```sh
show collections
```
