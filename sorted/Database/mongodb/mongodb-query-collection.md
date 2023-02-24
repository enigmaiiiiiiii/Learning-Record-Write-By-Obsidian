# MongoDB Query Collection

- [query syntax](#query-syntax)
- [condition query](#condition-query)
- [query operator](#query-operator)
- [Result Sort](#result-sort)
- [text search](#text-search)
- [query nested document](#query-nested-document)
- [query array](#query-array)
- [return specific fields](#return-specific-fields)

## query syntax

```js
db.collectoin.find(condition)
```

## condition query

Equality Contidion

`$eq`: equal

```js
db.collection.find({price: {$eq: 15000} })  // or
db.collection.find({price: 15000})
```

And Condition

- specify conditions for more than one fields

```js
db.collection.find({status: "A", qty: {$lt: 40}})
```

Or Condition

- Using the `$or` operator

```js
db.collection.find({$or: [{status: "A"}, {qty: {$lt: 40}}]}})
```


## query operator


- query `price` equal to 15000

`$ne`: not equal

```js
db.collection.find({price: {$ne: 15000} })
```

`$gt`: greater than

`$gte`: greater than or equal

`$lt`: less than

`$lte`: less than or equal

`$in`: in

`$nin`: not in

`$regex`: regular expression

## Result Sort

```js
db.collection.find({price: {$gte: 15000} }).sort({ field: 1 })
```

- query `price` greater than or equal to 15000
- sort the result by `field` in ascending order

> `field: 1` for ascending sort the result

## text search

`$text` operator

- requires that you specify the search field in a **text index** on your collection

if you want search title field text, create text index on title filed

```js
db.movies.createIndex({ title: "text"})
```

## query nested document

- equality require match the fields exactly, inluding the field order.

```js
db.inventory.find({ "size.uom": "in"})
```

## query array

exact match

- exactly match the arrays element value, order, number of elements

```js
db.inventory.find({ tags: ["red", "blank"] })
```

- an array with exactly two elements, `red` and `blank`, in the specified order

query with `$all` operator

```js
db.inventory.find({ tags: { $all: ["red", "blank"] } })
```

- query `tags` array field, which contains both `red` and `blank`
- regardless of the order of the elements in the array

query with `$elemMatch` operator

- array field elements number as condition

```js
db.invertory.find({ dim_cm: {$elemMatch: {$gt: 22, $lt: 30 } } })
```

- query `dim_cm` array field, which contains at least one element that is greater than 22 and less than 30

## return specific fields

`<field>: 1` to specific return field

```js
db.inventory.find({status: "A"}, {item: 1, status: 1})
```

- result only `item` and `status` fields returned
- And by default `_id` field is included

Suppress `_id` field

```js
db.inventory.find({status: "A"}, {item: 1, status: 1, _id: 0})
```

exclude field

```js
db.inventory.find({ status: "A"}, {status: 0, instock: 0})
```

- return all field except `status` and `instock`
