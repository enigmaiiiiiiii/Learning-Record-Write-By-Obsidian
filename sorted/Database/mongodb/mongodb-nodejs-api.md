# MongoDB nodejs driver api

## findOne()

- return a **promise**
- data wrapped in promise is the first match document

basic query

```js
const db = client.db('database_name');
const collection = db.collection('collection_name');
const query = { year: 1997 };
const result = await collection.findOne(query);
```

## find()

syntax

```js
find(query, options)
```

return value

- class [FindCursor](#findcusor)

options

- configure the result, such as sort and projection

```js
const options = {
  sort: { year: 1},
  projection: { title: 1, year: 1, _id: 0 }
}
const cursor = movies.find(query, options);
```

## findCursor

- return by [find()](#find) method
- is an iterable object

methods to iterate over the result

- `forEach()`
- `next()`
- `toArray()`
- `map()`
- `...`

methods to move the cursor

- `next()`: return the next document

methods to configure the cursor

- `project()`
- `sort()`
