# MongoDB Modify Collection

## Insert Document

```js
db.collection.insertOne(
  {title: "The Room", year: 2003}
)
```

## Update Document

add a new field

```js
db.collection.updateOne(
  {title: "The Room"},
  {$set: {year: 2003}}
)
```

- add `year` field to the document whose `title` is `"The Room"`

## Delete Document

