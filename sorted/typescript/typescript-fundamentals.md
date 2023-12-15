# Typescript - Features

* [Key Of Typescript: Type](#key-of-typescript:-type)
* [Object Types](#object-types)
* [Interface](#interface)
* [function](#function)
* [class](#class)
* [namespace](#namespace)
* [module](#module)
* [mark variable, parameter, properties](#mark-variable,-parameter,-properties)
* [Keyword](#keyword)

## Key Of Typescript: Type

[type in typescript](typescript-type.md)

## Object Types

[Object Types](typescript-object-types.md)

## Interface

[Interface](typescript-interface.md)

- interface and type aliases both can implement inheritance

significately difference between interface and [type alias](typescript-type-statement.md#name-type-alias)

- type alias can't re-open to [add properties]()

## function

[function](typescript-function.md)

## class

[class](typescript-class.md)

## namespace

[namespace](typescript-namespace.md)

## module

[Module](typescript-module.md)

## mark variable, parameter, properties

`?` mark

- mark on variable: variable value can be undefined

```ts
let a?: number;
```

- mark on parameter: parameter is optional

```ts
function f(a?: number) { /* ... */ }
```

- mark on property: property can be undefined

```ts
class C {
  a?: number;
}
```

`!` mark

- known as non-null assertion operator
- assert the value isn't null or undefined

```ts
function liveDangerously(x?: number | undefied) {
  console.log(x!.toFixed());
}
```

## Keyword



