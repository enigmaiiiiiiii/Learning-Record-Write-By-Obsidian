# Program With nodejs

- [Connect to MongoDB Server](#connect-to-mongodb-server)
- [Query data](#query-data)
- [Api](#api)

## Connect to MongoDB Server

basic connect without set client info

```js
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
client.connect()
  .then(() => {
    // check if connected
    console.log('connected to MongoDB')
  })
  .catch(err => {
    console.error(err);
  })
```

connect with driver info

```js
const { MongoClient } = require('mongodb');
const client = new MongoClient(url, {
  appname: 'myapp',
  driverInfo: {name: 'node-mongodb-driver', version: '1.0.0'}
})
client.connect()
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch(err => {
    console.error(err);
  })
```

## Query data

[mongodb node driver query data](mongodb-nodejs-query-data.md)

[Perform Text Search](mongodb-nodejs-text-search.md)

## Modify data

[mongodb node driver modify data](mongodb-nodejs-modify-data.md)

## Api

[mongodb node driver api](mongodb-nodejs-api.md)
