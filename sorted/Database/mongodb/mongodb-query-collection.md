# MongoDB Query Collection

## query

syntax

```js
db.collectoin.find({
  field: {
    $operator: value
  }
})
```

operator

- `$eq`: equal
- `$ne`: not equal
- `$gt`: greater than
- `$gte`: greater than or equal
- `$lt`: less than
- `$lte`: less than or equal
- `$in`: in
- `$nin`: not in
- `$regex`: regular expression

## text search

`$text` operator

- requires that you specify the search field in a **text index** on your collection

if you want search title field text, create text index on title filed

```js
db.movies.createIndex({ title: "text"})
```

