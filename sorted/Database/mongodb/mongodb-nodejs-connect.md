# nodejs connect to mongodb server

- [basic connect without set client info](#basic-connect-without-set-client-info)
- [connect with driver info](#connect-with-driver-info)
- [Create mongodb client instance](#create-mongodb-client-instance)
- [config client](#config-client)

## basic connect without set client info

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

## connect with driver info

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

## Create mongodb client instance

```js
```

## config client

set client max pool size

```js
const { MongoClient } = require('mongodb');

async function checkMaxPoolSize() {
  const uri = 'mongodb://localhost:27017';
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 50 // example maxPoolSize setting
  };
  const client = new MongoClient(uri, options);

  try {
    await client.connect();
    const maxPoolSize = client.topology.s.options.maxPoolSize;
    console.log(`maxPoolSize: ${maxPoolSize}`);
  } finally {
    await client.close();
  }
}

checkMaxPoolSize();
```