# Property

* [Basic](#basic)
* [Own Property](#own-property)
* [Property Descriptor](#property-descriptor)
* [Object Method related to property](#object-method-related-to-property)

## Basic

[Basic](javascript-property-basic.md)

## Composition Of Property

1. property name: a string name or a symbol
2. [property descriptor](#property-descriptor)

## Own Property

- the property directly defined on an object
- does not contain property from [prototype](javascript-prototype.md) chain

## Property Descriptor

[Property Descriptor](javascript-property-descriptor.md)

## Object Method related to property

`Object.assign()`

- merge multiple object
- copy source multiple object's Enumerable property to target object
- receive multiple Object as parameter
  - one target object paramater
  - multiple source object parameter
    - if multiple source object have same property, use the last source object's value
- when error raised during assign, operation stop, and won't rollback

## Get All Property Directly On Object

[`Object.keys()`](javascript-global-object.md#objectkeys)
