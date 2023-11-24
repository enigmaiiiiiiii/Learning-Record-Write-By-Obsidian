# Interface

- [what it is](#what-it-is)
- [Define an interface](#define-an-interface)
- [Extend an interface](#extend-an-interface)
- [Add properties to an interface](#add-properties-to-an-interface)
- [Index Signatures](#index-signatures)

## what it is

- can be use for **type annotation**
- can be **implement** by a class
- can be **extended** by another interface

## Define an interface

```ts
interface Point {
    x: number;
    y: number;
}
```

## Extend an interface

```ts
interface Point3D extends Point {
    z: number;
}
```

## Add properties to an interface

```ts
interface Point {
    x: number;
    y: number;
}
interface Point {
    z: number;
}
```

## Index Signatures

- **index signature** is used to declare properties type of an [interface]() or [class]()

when to use

1. don't know all the name of properties
2. know the type of the value

```ts
interface StringArray {
    [index: number]: string;
}
const myArray: StringArray = ["Bob", "Fred"];
const secondItem = myArray[1];  // secondItem is string
```

- this code means: an interface named StringArray has a index signature

index signature **enforce** that **all properties** its types

```ts
interface NumberDictionary {
    [index: string]: number;
    length: number;  // ok, length is a number
    name: string;  // error, the type of 'name' is not a subtype of the indexer
}
```

- `index` can be any other name

Available Type Of Index Signature

- `string`
- `number`
- [symbol](javascript-symbol.md)
- template string pattern
- union of these types

## generic interface

```ts
interface Box<T> {
  value: T;
}

const box1: Box<string> = { value: 'hello'};
const box2: Box<number> = { value: 42};
```
