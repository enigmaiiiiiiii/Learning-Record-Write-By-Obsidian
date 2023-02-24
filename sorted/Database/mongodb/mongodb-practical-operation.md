# MongoDB Practical Operation

## dump data from atlas to local file

```sh
mongodump --username=<username> --archive=data --uri=mongodb+srv://cluster0.kefgspk.mongodb.net/sample_airbnb
```

- dump to local file `data`

## restore data from local file to local mongodb

restore to local mongodb, sue default port 27017

```sh
mongorestore --archive=data
```

## get collection index

```js
db.collection.getIndexes()
```

## check process connecting to mongodb

```sh
db.currentOp(true).inprog.forEach(function(op) {
  if (op.client) {
    print(op.client, op.clientMetadata.application.name, op.clientMetadata.driver.name, op.clientMetadata.driver.version);
  }
});
```

- return a list contained below info:
  - process address
  - client(process) name
  - client driver name
  - client driver version