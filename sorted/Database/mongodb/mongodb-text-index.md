# Text Index

## Introdution

- for **text search**, must have a text index on your collection

## Feature

- A Collection Can Have **At Most One Text** Index

## create text index

```js
db.reviews.createIndex({content: "text"})
```

- `"text"` represents the type of index

## search weight

```js
db.blog.createIndex(
  {
    content: "text",
    keywords: "text",
    about: "text"
  },
  {
    weights: {
      content: 10,
      keywords: 5
    }
    name: "TextIndex"
  }
)
```

- `content` field weight of 10
- `keywords` has a weight of 5
- `about` field has a default weight of 1

## wildcard text index

```js
db.collection.createIndex({ "$**": "text" })
```

- allows for text search on all fields in a document

## search language

- language value specify of "none", mongodb will simplify the search process
