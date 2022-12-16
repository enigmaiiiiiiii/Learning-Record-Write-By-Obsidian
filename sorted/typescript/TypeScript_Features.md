# Features(特性)

[key of typescript: type](#key-of-typescript-type)
[interface](#interface)
[Narrowing](#narrowing)
[function](#function)
[class](#class)

## key of typescript: type

[type in typescript](TypeScript_Type.md)

## interface

[Interface](TypeScript_Interface.md)

- interface和type aliase都可以实现继承
- interface 和 [type aliases](TypeScript_Type.md#type-aliases) 的关键区别: **type alias can't re-open to add properties**

## function

[function](TypeScript_Function.md)

## class

[class](TypeScript_Class.md)

## namespace

- 避免命名冲突

```ts
namespace MyMath {
  export const PI = 3.14;
  export function calculateCircumference(diameter: number) {
    return diameter * PI;
  }
  export class Rectangle {
    constructor(public width: number, public length: number) {}
    calcSize() {
      return this.width * this.length;
    }
  }
}
```

## mark variable, parameter, properties

variable

- ?: can be undefined

parameter

- ?: optional

properties

- ?: optional
