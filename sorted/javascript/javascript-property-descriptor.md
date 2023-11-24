# JavaScript - Property Descriptor

* [What Is Property Descriptor](#what-is-property-descriptor)
* [Get Property Descriptor of A Property](#get-property-descriptor-of-a-property)
* [Define Property Descriptor](#define-property-descriptor)
* [Data property](#data-property)
* [Accessor property](#accessor-property)

## What Is Property Descriptor

An object that describes a property and has following keys

- `value`
- `writable`
- `get`
- `set`
- `configurable`
- `enumerable`

Property descriptor hava 2 types

- [data property](#data-property)
- [accessor property](#accessor-property)

Both data and accessor descriptors shared keys

- `configurable`: when false
  - property descriptor can't be changed
  - property can't be deleted
  - other attribute of its descriptor cannot be changed
    - except `writable` can be changed from true to false
- `enumerable`: whether can be used in [`for-in` loop](javascript-statement.md#forin-statement)

[data property]() keys

- `value`
- `writable`

[accessor property]() keys

- `get`
- `set`

## Get Property Descriptor of A Property

[`Object.getOwnPropertyDescriptor(obj, prop)`](javascript-global-object.md#objectgetownpropertydescriptor)

```js
let o = {
  get foo() {
    return 17;
  },
};
d = Object.getOwnPropertyDescriptor(o, "foo");
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   get: [Function: get foo],
//   set: undefined
// }
```

## Define Property Descriptor

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

## Data property

- hava a position that holds a value

data property hava 4 descriptor

- Configurable: if property can be deleted, if property's descriptor can be changed
- Enumerable: if property can be access by `for-in` loop, default is true
- Writable: if property's value can be changed, default is true
- Value: where property's value locate

## Accessor property

- Accessor property do not contain a data value

4 descriptor on Accessor property

- `Configurable`: if property can be deleted, if property's descriptor can be changed
- `Enumerable`: if property can be access by `for-in` loop, default is true
- `Get`: where Get function defined, called when reading property, default `undefined`
- `Set`: where Set function defined，called when writing property, default `undefined`

