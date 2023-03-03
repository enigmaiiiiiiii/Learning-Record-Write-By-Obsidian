# MongoDB Text Search

## Feature

## Text Index

[mongoDB Text Index](mongodb-text-index.md)

## Perform a text search

> `$text` operator

Search for an Exact Phrase

- wrapping phrase in double quotes, with esape character like `\"words\"`

```js
db.store.find({
  $text: {
    $search: "\"coffee shop\""
  }
})
```

Exclude Terms

- use `-` to exclude terms

```js
db.stores.find({
  $text: {
    $search: "coffee -express"
  }
})
```

- find containing `coffee` but not `express`
