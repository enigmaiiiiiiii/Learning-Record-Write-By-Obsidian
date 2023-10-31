# JavaScript - Property Descriptor

## Import the property descriptor Concept

Method `Object.defineProperty()` receive a paramerter related to descriptor

What this method do:

- defines a new property directly on an object
- change detail of [property descriptor]()

`Object.defineProperty(obj, prop, descriptor)`

```javascript
Object.defineProperty(person, "name", {
  writable: false,
  value: "Nicholas"
});
```

- parameter
  - `obj`: the object on which to define the property
  - `prop`: the name or Symbol of the property to be defined or modified
  - `descriptor`: the [descriptor](#property-descriptor) for the property being defined or modified

## Property Descriptor

- a object that describes a property
- property descriptor hava 2 type
  - data property
  - accessor property

Both data and accessor descriptors shared keys

- `configurable`: when to false
  - property descriptor can't be changed
  - property can't be deleted
  - other attribute of its descriptor cannot be changed
    - except `writable` can be changed from true to false
- `enumerable`: whether can be used in [`for-in` loop](javascript-statement.md#forin-statement)

data property keys

- `value`
- `writable`

accessor property keys

- `get`
- `set`

## Data property

- hava a position that holds a value

data property hava 4 descriptor

- Configurable: if property can be deleted, if property's descriptor can be changed
- Enumerable: if property can be access by `for-in` loop, default is true
- Writable: if property's value can be changed, default is true
- Value: where property's value locate

## Accessor properties

- Accessor property do not contain a data value

4 descriptor on Accessor property

- `Configurable`: if property can be deleted, if property's descriptor can be changed
- `Enumerable`: if property can be access by `for-in` loop, default is true
- `Get`: where Get function defined, called when reading property, default `undefined`
- `Set`: where Set function defined，called when writing property, default `undefined`

