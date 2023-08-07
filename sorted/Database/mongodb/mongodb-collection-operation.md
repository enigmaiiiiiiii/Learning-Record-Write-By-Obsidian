# MongoDB Collection Operation

- [create collection](#create-collection)
- [remove collection](#remove-collection)
- [rename field](#rename-field)

## create collection

- MongoDB will create collection when insert document into it

```sh
db.demoCollection.insertOne({ x: 1 })
```

## remove collection

## rename field

```js
db.collection.updateMany({}, {$rename: {"oldField": "newField"}})
```

## show collections

```sh
show collections
```



