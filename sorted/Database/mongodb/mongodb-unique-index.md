# Unique

## Feature

- ensures the indexed fields do not store duplicate values

## Create Unique Index

set option `unique` to `true`

```js
db.collection.createIndex({"user_id": 1}, {unique: true});
```