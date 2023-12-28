# TypeScript - Narrowing

## What Is Narrowing

Narrowing: according to [type check](typescript-type.md#type-check), refine type more specific

```ts
function padLeft(padding: number | string, input: string) {
  return "a".repeat(padding) + input;  // error
}
```

In above example, padding is a [union type](typescript-type.md#union-types), can't use `repeat()` method directly

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return "a".repeat(padding) + input;
  }
  return padding + input;
}
```

In "if" statement, ts according to type check, refine `padding` to string type

this is called [typeof narrowing](#typeof-type-guards)

it is not a type assertion, which means it can be narrowed to wrong type

- here is a [type predicate narrowing](#type-predicates) example
- as a result of wrong predicate, variable is narrowed to wrong type

```ts
interface Point {
  x: number;
  y: number;
}

// p is not a Point when foo() return true
function foo(p: Point | string): p is Point {
  return typeof p === 'string'
}

let a = "hello" 

if (foo(a)) {
  // narrowed to Point, but it's not a Point
  console.log(a.x)
} else {
  console.log(a)
}
```

## typeof type guards

## Truthiness Narrowing

narrow `null` or `undefined`

```ts
function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}
if
```

## Equality Narrowing

- in switch statements
- with `===`, `!==`, `==`, `!=` operator

```ts
function example(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase();
        y.toLowerCase();
    }
}
```

## `in` operator narrowing

[in operator](javascript-operator.md#in)

```ts
type Fish = { swim: () => void }
type Bird = { fly: () => void }
function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
```

## instanceof 

## assignments

```ts
let x = Math.random() < 0.5 ? 10 : "hello world";
```

## Control Flow Analysis

- based on code reachability

## Type Predicates

syntax

- `function foo(parameterName: Type ): parameterName is someType`

features

- must used on function return type
- return type must be boolean
- `parameterName` must be the name of a parameter
- `Type` must compatible with `parameterName`'s type

```ts
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
```

- every time `isFish()` is called, its argument will narrow to specific type

