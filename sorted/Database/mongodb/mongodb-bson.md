# BSON

- [Introduction](#introduction)
- [BSON type contrast](#bson-type-contrast)

## Introduction

- Stand for **Binary JSON**(typed JSON)
- used by MongoDB to store and transfer data between server and client
- BSOM have more data type than JSON, such as Date, Binary, ObjectId

## BSON type contrast

| Type                    | Number | Alias    | Notes                   |
| ----------------------- | ------ | -------- | ----------------------- |
| Double                  | 1      | float64  |                         |
| String                  | 2      | utf8     |                         |
| Object                  | 3      |          | Deprecated in BSON spec |
| Array                   | 4      |          | Deprecated in BSON spec |
| Binary data             | 5      | binary   |                         |
| Undefined               | 6      |          | Deprecated in BSON spec |
| ObjectId                | 7      | oid      |                         |
| Boolean                 | 8      | bool     |                         |
| Date                    | 9      | datetime |                         |
| Null                    | 10     |          |                         |
| Regex                   | 11     |          | Deprecated in BSON spec |
| DBPointer               | 12     |          | Deprecated in BSON spec |
| JavaScript              | 13     |          | Deprecated in BSON spec |
| Symbol                  | 14     |          | Deprecated in BSON spec |
| JavaScript (with scope) | 15     |          | Deprecated in BSON spec |
| 32-bit integer          | 16     | int32    |                         |
| Timestamp               | 17     |          |                         |
| 64-bit integer          | 18     | int64    |                         |
| Decimal128              | 19     |          | Added in BSON spec 1.0  |
| Min key                 | 255    |          |                         |
| Max key                 | 127    |          |                         |

## ObjectId

- 12 bytes in length
  - 4 bytes timestamp
  - 5 bytes random value
  - 3 bytes increment
- from document's ObjectId can get timestamp, `ObjectId.getTimestamp()`
- **sorting on `_id` field that stores ObjectId** values is _roughly_ **equivalent to sorting by createiong time**

> why roughly?
> **temporal resolution** of timestamp is **second**, so ObjectId **created within the same second** do not have a guaranteed ordering

## Binary data

- represent the value is a [byte array]
- binary data has subtype that indicates how to interpret the binary data

| Subtype | Description                 |
| ------- | --------------------------- |
| 0x00    | Generic binary subtype      |
| 0x01    | Function                    |
| 0x02    | Obsolete binary subtype     |
| 0x03    | UUID (old)                  |
| 0x04    | UUID (RFC 4122)             |
| 0x05    | MD5                         |
| 0x06    | Encrypted BSON value        |
| 0x07    | Compressed time series      |
| 0x80    | User defined binary subtype |

in following document

- `id` is a binary data
- its subtype is UUID

```json
{
  "id": {
    "$binary": {
      "base64": "FhEJwvFyRCSgC54D4bIN9g==",
      "subType": "04"
    }
  }
}
```

## Timestamps

- not associated with [Date] type
- 64-bit value
  - 32-bit time_t value in Unix epoch
  - 32-bit incrementing ordinal
