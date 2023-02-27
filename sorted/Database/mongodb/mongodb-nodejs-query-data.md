# MongoDB nodejs driver query data

- [query one document](#query-one-document)
- [find multiple documents](#find-multiple-documents)
- [configure the result](#configure-the-result)

## query one document

```js
(async () => {

  const client = new MongoClient(url);
  const database = client.db('database_name');
  const movies = database.collection("movies");
  const query = {title: "The Room"};

  const movie = await movies.findOne(query, options);
  console.log(movie);
})()
```

Detial of findOne() method

- return a [Promise](javascript-promise.md)
- so we can use `then()` method to get the result
  - onresolve: return a queried Document
  - onreject trigger on
    - connection error
    - query error

```js
movies.find(query, options).then(
  (movie) => {
    console.log(movie);
  },
  () => {
    console.log("onreject");
  }).catch((error) => {
    console.log(error);
  });
client.close();
```

- if close the connection before wait for the result, onreject callback will be called


## find multiple documents

```js

```

## configure the result

add `options` parameter to `findOne()` method

```js
const query = {title: "The Room"};
const options = {
  sort :{"imbd.rating": -1},
  projection: {_id: 0, title: 1, imdb: 1},
}
const cursor = movies.find(query, options);
```
use FindCursor to method

```js
const cursor = movies.find(query).project({_id: 0, title: 1, imdb: 1}).sort({"imbd.rating": -1});
```

## exception

