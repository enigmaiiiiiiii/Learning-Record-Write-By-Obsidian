# JavaScript Built-In JSON

## JSON.stringify()

- converts a javascript value to a JSON **string**
- kind of serialization

`JSON.stringify(value[, replacer[, space]])`

parameters

- `value`: value to convert to a JSON string
- `replacer`
- `space`

```js
console.log(typeof {x: 5, y: 6})  // object
console.log(typeof JSON.stringify({x: 5, y: 6}))  // string
```

description

- only [enumerable own properties](javascript-property.md#own-property) will be visit
- All symbol-keyed properties will be completely ignored, even when using the replacer function
- if value has a `toJSON()` method, it's responsible to define what data will be serialized

## JSON.parse()

- parses a JSON string, constructing the **Object**

```js
const obj = JSON.parse('{"x":5,"y":6}')
```