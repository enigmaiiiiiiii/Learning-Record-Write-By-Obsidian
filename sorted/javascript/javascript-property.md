# Property

* [Basic](#basic)
* [Object.defineProperty()](#objectdefineproperty)
* [Property Descriptor](#property-descriptor)
* [Data property](#data-property)
* [Accessor properties](#accessor-properties)
* [Object Method related to property](#object-method-related-to-property)

## Basic

[Basic](javascript-property-basic.md);

## Own Property

- the property directly defined on an object
- does not contain property from [prototype](javascript-prototype.md) chain

## Property Descriptor

[Property Descriptor](javascript-property-descriptor.md)

## Object Method related to property

`Object.getOwnPropertyDescriptor()`

- get property's Descriptor , use descriptor to read the attribute

`Object.assign()`

- merge multiple object
- copy source multiple object's Enumerable property to target object
- receive multiple Object as parameter
  - one target object paramater
  - multiple source object parameter
    - if multiple source object have same property, use the last source object's value
- when error raised during assign, operation stop, and won't rollback
