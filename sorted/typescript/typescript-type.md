# type in typescript

* [What Is Type Annotation](#what-is-type-annotation)
* [what can be used as a type](#what-can-be-used-as-a-type)
* [Special Types](#special-types)
* [type statement](#type-statement)
* [Union Types](#union-types)
* [type check](#type-check)
* [type inference](#type-inference)
* [type assertion](#type-assertion)
* [Narrowing](#narrowing)
* [Keyof Operator](#keyof-operator)
* [Mapped Types](#mapped-types)
* [Type Compatibility](#type-compatibility)
* [Utility Types](#utility-types)

## What Is Type Annotation

- Type annotations are a way to tell TypeScript what type of value a variable will refer to.

> Doesn't use the left-style declarartions, like `int x = 0;`
> will removed by compiler, won't affect the runtime

declare variable

```ts
let person: string = 'Chris';
```

> this is not common to annotate the type of a variable

function parameter with type annotation

```ts
function greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}!!!`);
}
```

function return type annatation

```ts
function getFavoriteNumber(): number {
    return 26;
}
```

## what can be used as a type

1. primitive types

- string, number, boolean
- Arrays: `number[]`, `string[]`, `object[]`

2. typescript [special types](#special-types)

- `any`:
- `noImplicitAny`:

3. anonymous object type

- `p: {name: string, age: number}`: `p` is an Object with this two properties

```ts
function greet(person: { name: string; age: number }) {
    return "Hello, " + person.name;
}
```

4. interface

- `p: Person`

```ts
interface Person {
    name: string;
    age: number;
}
function greet(person: Person) {
    return "Hello, " + person.name;
}
```

5. function type

[function type](typescript-function.md#function-type-expressions)

[type working with function](typescript-function.md#other-type-working-with-function)

## Special Types

void

unknown

never

- annotation function never return a value

```ts
function fn(x: string | number) {
    if (typeof x === "string") {
        //
    } else if (typeof x === "number") {
        //
    } else {
        x; // type is never
    }
}
```

any

- you don't want to **cause typechecking error** when use particular value
- access to any property, property type is `any` too
- you can call it like a funtion
- assign it to a value of any type

## type statement

[type statement](typescript-type-statement.md)

## Union Types

[in c++, there is union type too](c++-union.md)

```ts
function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}
```

not allow to use method that only exist in one type

```ts
function printId(id: number | string) {
  console.log(id.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'string | number'.
}
```

the solution is [narrow](#narrowing) the type

## type check

- through value's **shape** to determine the type of the value

```ts
class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point {
    x: number;
    y: number;
}
function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}
const point = {x: 12, y: 26};
const point3 = {x: 12, y: 26, z: 89};
const rect = {x: 33, y: 3, width: 30, height: 80};
const color = {hex: '#187ABF'};
const virtualPoint = new VirtualPoint(13, 56);

logPoint(point);   // logs "12, 26"
logPoint(point3);  // logs "12, 26"
logPoint(rect);    // logs "33, 3"
logPoint(virtualPoint); // logs "13, 56",
logPoint(color);   // error
```

1. in above example, `point` is not declared as `Point` type, ts check the **shape** of `point` and `Point`, if they are same, then `point` is `Point` type
2. ts match the subset of the object fields, `point3`, `rect` have `x`, `y` fields, `color` doesn't, so `color` is not `Point` type
3. type check also works for `class instance`

## type inference

- for no explicit [type annotation](#type-annotation) variable, ts will infer the type
- when a type inference is made from several expressions, ts will infer a Best Common Type, usually a [union type](#union-types)

```ts
let x = [0, 1, null];  // x: (number | null)[]
```

contextual typing

- `window.onmousedown` is already declared
- when assign a function to it, ts will infer the type of the function, even you don't annotate it

```ts
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);    //
    console.log(mouseEvent.kangaroo);  // error!
};
```

## type assertion

> like type annotation, removed by compiler

- use `as` keyword
- for some value, coder know the type, but ts can't infer it, then use type assertion
- when assert a type, you can use the method of the type

```ts
const x = "hello" as number; // error
```

```ts
interface Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

function fb(p: Point) {
    return (p as Point3d).z;  // access to z is legal
}
```

## Narrowing

- Narrowing: according to [type check](#type-check), refine type more specific

```ts
function padLeft(padding: number | string, input: string) {
  return "a".repeat(padding) + input;  // error
}
```

- at above example, padding is a [union type](#union-types), can't use `repeat()` method directly

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return "a".repeat(padding) + input;
  }
  return padding + input;
}
```

- in if statement, ts according to type check, refine `padding` to string type

## Keyof Operator

- takes an **object type** and produces a string or numeric literal union of its keys

```ts
type Point = { x: number; y: number };
type P = keyof Point;  // P = "x" | "y"
let foo: P = "x";
let foo2: P = 123;  // error 
```

- if a type contains [index signature](typescript-interface.md#index-signatures), keyof will return `string` or `string | number`
- usually used in [mapped type](#mapped-types)

```ts
type A = keyof { [n: number]: unknown };  // A = number
type M = keyof { [n: string]: unknown };  // M = string | number
```

> M is string | number because JavaScript object keys are always coerced to strings, `obj[0]` sames as `obj["0"]`

## Mapped Types

- build on [index signature](typescript-interface.md#index-signatures)
- generate a new type from another type, to avoid repeat

For example, combine with [keyof operator](#keyof-operator) to generate a new type, can use a little code to **modify the type of all properties of a type**

```ts
type OnlyBoolsAndHorses = {
    [key: string]: boolean | Horse;
};
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
}
```

property modifiers `readonly` and `?` can be modified in mapping property

- with `+` and `-` prefix to add or remove property, no prefix means `+`

```ts
type Createmutable<Type> = {
    -readonly [Property in key of Type]: Type[Property];
type LockedAccount = {
    readonly id: string;
    readonly name: string;
};
type UnlockedAccount = CreateMutable<LockedAccount>;
```

- remove `readonly` modifier from old type to create a new type

## Type Compatibility

In Typescript, type Compatibility is based on structure

- **only based on members**, not **based on names**

```ts
interface Pet {
    name: string;
}
class Dog {
    name: string;
}
let pet: Pet;
pet = new Dog(); // OK
```

Object Type

> less-properties type is compatible with more-properties type, less-properties type can be used as a super class
> declared as super class, can be assigned with derived class

- When type checking, only check **whether contains target members**

`let pet: Pet = dog;`

- in this code, target type is `Pet`, source type is `Dog`

Function parameters compatibility

- in term of parameter number
  - more-parameters function compatible with less-parameters function, more-parameters function can be used as a super type
  - unrelated to **parameter name**, only check **parameter type**
- in term of parameter type
  - super type parameter compatible with derived type argument
  - in function body, only can access super type's properties and methods
  - with [type assertion](#type-assertion) can access derived class's properties and methods

```ts
interface Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
function fa(p: Point) {
    return p.z;  // not allowed
}
function fb(p: Point) {
    return (p as Point3d).z;
}
let p: Point3d = { x: 10, y: 20, z: 30 };
console.log(fb(p));
```

## Utility Types

[Utility Types](typescript-utility-types.md)

