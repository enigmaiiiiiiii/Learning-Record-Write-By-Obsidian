# type statement

* [Introduction](#introduction)
* [Name Type Alias](#name-type-alias)
* [Extend type](#extend-type)
* [Intersection Type](#intersection-type)
* [Use With Generics](#use-with-generics)
* [Conditional Types](#conditional-types)
* [Mapped Types](#mapped-types)

## Introduction

type statement in typescript has many flexible use

- flexible type definition
- [define type aliases]()
- define union types
- can be use in both object and primitive types
- cannot define a class

## Name Type Alias

> use type keyword to name a type alias

```ts
type ID = number | string;
type Point = {
    x: number;
    y: number;
}
```

- `Point` represents a type symbol, this type has two properties, x and y, and the type of both properties is number

## Extend type

```ts
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}
const cc: ColorfulCircle = {
    color: "red",
    radius: 10,
}
```

## Intersection Type

use `&` to combine types

```ts
type Animal = {
    name: string;
}

type Bear = Animal & {
    honey: boolean;
}
```

## Use With Generics

- custom<T> can be understand as a function, `T` is the parameter of this function

```ts
type customType<T> = {
    name: string;
    data: T;
}
```

default parameter type, `T = string`

```ts
type customType<T = string> = {
    name: string;
    data: T;
}
```

## Conditional Types

[Conditional Type](typescript-condition-type.md)

## Mapped Types


