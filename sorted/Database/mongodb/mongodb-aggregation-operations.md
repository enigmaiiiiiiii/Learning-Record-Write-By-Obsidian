# Mongodb Aggregation Operations

## what is aggregation

use aggregation to:

- group values
- Preform operations: total, average, maximum, etc.
- Analyze data

## Aggregation Pipeline

- consist of **one or more stages**
- documents output from a stage are passed to the next stage

## Create a Aggregate Pipeline

```js
db.orders.aggregate([
  // stage 1
  {
    $match: {
      "date" : { $gte: ISODate("2019-01-01"), $lt: ISODate("2020-01-01")}
    }
  },
  // stage 2
  {
    $group: {
      _id: { $month: "$date" },
      total: { $sum: "$amount" }
    }
  },
  // stage 3
  {
    $sort: { _id: 1 }
  }
])
```

## Aggregation operators

arithmetic

- `$abs`
- `$add`
- `$ceil`
- `$divide`
- `$exp`
- `$floor`
- `$ln`
- `$log`
- `$log10`
- `$mod`
- `$multiply`
- `$pow`
- `$round`
- `$sqrt`
- `$subtract`
- `$trunc`

Array Expression

- `$arrayElement`
- `$first`
- `$arrayToObject`
- `$range`
- ...

Date Expression Operators

- `$dateAdd`
- `$dateDiff`
- `$dateFromParts`
- `$dateFromString`
- `$dateSubtrace`
- ...

Sampel Operator

- `$rand`
- `$sampleRate`

String Expression Operators

- `$concat`
- `$dateFromString`
- `$dateToString`
- `$indexOfBytes`
- `$indexOfCP`
- `$ltrim`
- `$regexFind`
- `$regexMatch`
- `$replaceOne`

