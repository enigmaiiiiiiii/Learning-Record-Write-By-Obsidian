# modify data

## insert data

insertOne

```js
(async function insertOne() {
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);
  const database = client.db('database_name');
  const movies = database.collection("movies");
  const movie = {
    title: "The Room",
    year: 2003,
    imdb: { rating: 3.7, votes: 57309, id: 447682 },
  };
  const result = await movies.insertOne(movie);
  console.log(result);
})()
```

insertMany

```js
(async function insertMany() {
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);
  const database = client.db('database_name');
  const movies = database.collection("movies");
  const movies = [
    {
      title: "The Room",
      year: 2003,
      imdb: { rating: 3.7, votes: 57309, id: 447682 },
    },
    {
      title: "The Room",
      year: 2003,
      imdb: { rating: 3.7, votes: 57309, id: 447682 },
    },
  ];
  const result = await movies.insertMany(movies);
  console.log(result);
})()
```

## modify document

updateOne

```js
const { MongoClient, ObjectId } = require('mongodb');
const uri = 'mongodb://localhost:27017/mydatabase';
const client = new MongoClient(uri);

(async function updateDocument() {
  try {
    await client.connect();
    const collection = client.db().collection('mycollection');

    const filter = { _id: ObjectId('6031feac8551b25a814a039a') };
    const update = { $inc: { quantity: 1 } };

    const result = await collection.updateOne(filter, update);
    console.log(`${result.modifiedCount} document(s) updated.`);
  } finally {
    await client.close();
  }
})();
```

