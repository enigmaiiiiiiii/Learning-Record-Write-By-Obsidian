# Compound

## Create Compound Index

```js
db.reviews.createIndex(
  {
    subject: "1",
    comments: "1"
  }
)
```
**order of fields in `createIndex()` is important**

- command above will create index first sorted by `subject` field
- with same `subject` value, sorted by `comments` field`

> limit of 32 fields for compound index

## index order

set index signature items in ascending or descending order

- `1` for ascending
- `-1` for descending

```js
db.collection.createIndex(
  {
    "item": 1
    "stock": 1
  }
)
```

for single-field indexes, the sort order doesn't matter

however for [**compound indexes**](#create-compound-text-index), the fields index order matters the sort order

for example

```js
db.events.createIndex({"username": 1, "date": -1})
```

the index can **support** both following sort of opreations

```js
db.events.find().sort({username: 1, date: -1})
db.events.find().sort({username: -1, date: 1})
```

however, the following sort is **not support**

```js
db.events.fint().sort({"username": 1, "date": 1})
```

## Index Prefixes

mongodb use index to support [queries](mongodb-query-collection.md)

`{"item": 1, "location": 1, "stock": 1}`

for the index above, the prefix is

- `{"item": 1}`
- `{ item: 1, location: 1}`

mongodb cannot use index to query without prefix index

this scenes mongodb cannot use index to query

1. query field `location`
2. query field `location` and `stock`