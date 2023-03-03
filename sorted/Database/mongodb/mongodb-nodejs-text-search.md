# mongodb nodejs driver text search

## create text index

```js
collection.createIndex({ title: "text", content: "text" })
```

## perform a text search

```js
// client connection part
(async () => {
  const db = client.db('database_name');
  const movies = db.collection('movies');

  movies.find(
    {
      $text: {
        $search: "love",
        $caseSensitive: false,
        $diacriticSensitive: false
      }
    },
  )
})()
```

specify return field

- use `projection` option

```js
movies.find(
  {
    $text: {
      $search: "love",
      $caseSensitive: false,
      $diacriticSensitive: false
    }
  },
  {
    projection: {
      title: 1,
      content: 1,
      _id: 0
    }
  }
)
```