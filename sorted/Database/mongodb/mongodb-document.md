# MongoDB - Document

## The _id Field

- _id field is **required** for every document in collection
- if inserted document does not specify `_id` field, MongoDB will automatically generates an [ObjectId](mongodb-bson.md#objectid) for `_id` Field

Feature

- create unique [index](mongodb-index.md) for `_id` field
- `_id` field is always the first field in the document
- `_id` field values type can not be array, regex, or undefined

common schema for storing values for `_id`

- Use ObjectId
- Use auto-incrementing Number
- Use UUID, Generate UUID in your **application code**
  - for more efficient storage, store UUID as [BinData](mongodb-bson.md#binary-data)


