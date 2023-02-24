# Single Index

## Create a Single Index

```js 
db.records.createIndex({ score: 1 });
```

## create index on Embedded Field

```js
{
  "_id": ObjectId("570c04a4ad233577f97dc459"),
  "score": 1034,
  "location": { state: "NY", city: "New York" }
}
```

```js
db.records.createIndex({ "location.state": 1 });
```
