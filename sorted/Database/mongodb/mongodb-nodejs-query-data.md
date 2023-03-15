# MongoDB nodejs driver query data

- [query one document](#query-one-document)
- [find multiple documents](#find-multiple-documents)
- [configure the result](#configure-the-result)
- [exception](#exception)

## query one document

```js
(async () => {

  // general connection part
  const database = client.db('database_name');
  const movies = database.collection("movies");
  const query = {title: "The Room"};

  const movie = await movies.findOne(query, options);
  console.log(movie);
})()
```

detail of findOne() method

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

`find()` method return a result [FindCursor](mongodb-nodejs-api.md#findcursor)

```js
(async () => {
  // general connection part

  const cursor = movies.find(query, options);
})
```

get result from FindCursor use cursor methods

- next()
- toArray()
  - return all result into a array
  - in this situation, the result will held in memory
  - so large number will cause performance issue
  - or failure if exceed the memory constraints
  - recommend `forEach()` if do not need to hold all result
- forEach()

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

## Sort Results

```js
const cursor = movies.find(query, options).sort({"imbd.rating": -1});
```

## exception

