# TypeScript - Function

* [Function Type Expressions](#function-type-expressions)
* [Optional Parameters](#optional-parameters)
* [Default parameters](#default-parameters)
* [Function Overload](#function-overload)
* [Generic Functions](#generic-functions)
* [Callable Signatures](#callable-signatures)
* [Construct Signatures](#construct-signatures)
* [other type working with function](#other-type-working-with-function)
* [Rest Parameters](#rest-parameters)
* [Rest Arguments](#rest-arguments)

## Function Type Expressions

To describe a function **type**

```ts
function greet(fn: (a: string) => void) {
    fn("Hello, World");
}
```

- `(a: string) => void`: a function that takes a string and returns nothing

name a function type

```ts
type GreetFunction = (a: string) => void;
function greet(fn: GreetFunction) { fn("Hello, World"); }
```

more about function type [Compatibility](typescript-type.md#type-compatibility)

## Optional Parameters

`function f(param_name?: type)` means `param_name` is optional

```ts
function f(x?: number) {
    // ...
}
f(); // ok
f(1); // ok
```

## Default parameters

default value for primitive type

```ts
function greet(name: string = "world") {
  console.log(`Hello, ${name}!`);
}
```

default value for object type

```ts
function foo({x, y = 5}) {
  return x + y + z;
}
foo(); // 18
```

## Function Overload

> here is a overload signature

```ts
function greet(name: string): string;
```

- by write several overload signatures, **followed** by the **function implementation**
- a function can have multiple overload signatures, but only one implementation
- In summary
  - if a function have 2 kind of parameter lists
  - you need 2 **overload signatures** and 1 implementation
  - so **3** function declarations in total

```ts
function fx(x: number): number;
function fx(x: number, y: number): number;
function fx(x: number, y?: number): number {
  if (y) {
    return x + y;
  } else {
    return x;
  }
}
```

- function implementattion must be compatible with all overload signatures

```ts
function fx(x: number): void;
function fx(x: boolean): void;
function fx(x: number | boolean) {
  if (typeof x === "number") {
    console.log("number");
  } else {
    console.log("boolean");
  }
}
fx(1);
fx(true);
```

## Generic Functions

```ts
function firstElement<Type>(arr: Type[]): Type {
    return arr[0];
}
```

- through `<Type>` declaration, you can relate return type and parameter type
- generic function declared like that can accept any type of parameter
- no need to specify the type of the generic function when calling it
- the type will be inferred automatically

**constraints** type argument's type

```ts
function longest<Type extends {length: number}>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}
```

- **type argument** is constrainted to must have a `.length` property of type `number`

Generic Arrow Function

```ts
const foo = <T>(data: T) => {
    // ...
}
```

## Callable Signatures

- describe an something **callable with properties**

> interface or type with callable signatures is **not for being implemented**

```ts
type OneCallable = {
  x: string;
  (x: number): boolean;  // Callable Signatures
};
function doSomething(fn: OneCallable) {
  console.log(fn.x + " returned " + fn(6));
}
```

> callable signature syntax is slightly different from [function type expression](#function-type-expressions), no => between parameter list and return type

## Construct Signatures

1. an interface with construct signatures
2. an instance has this this interface as type annotation
3. the instance can be invoked with `new` operator

```ts
type SomeConstructor = {
    new (s: string): SomeObject;
}
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
```

## other type working with function

void

object

unknown

- similar to `any`, but **access to any members are illegal**

```ts
function f1(a: unknown, b: any) {
  a.foo(); // error
  b.foo(); // ok
}
```

never

- function never return

```ts
function fail(msg: string): never {
    throw new Error(msg);
}
```

Function

## Rest Parameters

with **rest parameters** defining a function that take a **mutable number** of arguments

```ts
function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}
const a = multiply(10, 1, 2, 3, 4);
```

Emphasis

- parameter prefix with `...`
- parameter must be type as array
- must be the last parameter

> there is no restriction for function in **javascript** use [variable number of arguments](javascript-function-rest-parameters.md)

following function definition still available to use rest parameters

```js
function foo(x, y, z) {
    return x + y + z;
}

const a = [0, 1, 2];

foo(...a)
```

## Rest Arguments

provide a iterable object as multiple arguments

A spread argument must either have a [tuple type] or be passed to a [rest paramter](#rest-parameters)

- typescript does not assume that arrays are immutable

```ts
function atan2(x: number, y: number): number {
  if (x === 0 && y === 0) {
    return NaN;
  }
  return Math.atan2(x, y);
}
const args = [3, 4];
atan2(...args);  // error raised
```

**this error says two things**, if you want to pass spread argument to a function

- spread argument passed to a [rest parameter](#rest-parameters), A function declaration like `function f(...args: type[])`
- or if function declare like `function f(x, y, z)` then the type of `args` must be a [tuple](typescript-object-types.md#tuple)

solution is assert the type of `args`

```ts
const args = [3, 4] as const;
```

