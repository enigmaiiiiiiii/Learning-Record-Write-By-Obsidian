# MongoDB Data Type

## What is BSON

[Here is BSON](mongodb-bson.md)

## Type Operator

`$type`

- Select field value is a specific [BSON] type
- `{ field: { $type: <BSON type> } }`

Example

```js
db.collection.find({x: { $type: "string" }})
```

