# type in typescript

[What Is Type Annotation](#what-is-type-annotation)
[what can be used as a type](#what-can-be-used-as-a-type)
[type statement](#type-statement)
[Union Types](#union-types)
[type check](#type-check)
[function type](#function-type)
[type inference](#type-inference)
[type assertion](#type-assertion)
[Narrowing](#narrowing)
[Keyof operator](#keyof-operator)
[Mapped Type](#mapped-type)

## What Is Type Annotation

- Type annotations are a way to tell TypeScript what type of value a variable will refer to.

> Doesn't use the left-style declarartions, like `int x = 0;`
> will removed by compiler, won't affect the runtime

声明变量

```ts
let person: string = 'Chris';
```

> 在变量后使用类型注释并不常用

定义函数时，可以使用类型注解

```ts
function greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}!!!`);
}
```

函数返回值类型注解

```ts
function getFavoriteNumber(): number {
    return 26;
}
```

## what can be used as a type

primitive types

anonymous object type

- `p: {name: string, age: number}`: `p` is an Object with this two properties

```ts
function greet(person: { name: string; age: number }) {
    return "Hello, " + person.name;
}
```

interface

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

anonymous function type

- `fn: (a: string) => void`: `fn` is a function that takes a string and returns nothing

```ts
function greet(fn: (a: string) => void) {
    fn("Hello, World");
}
```

[type working with function](TypeScript_Function.md#other-type-working-with-function)

## type statement

[TypeScript_Type.md](TypeScript_Type_statement.md)

## Union Types

[c++用也有union type](c++_union_type.md)

```ts
function pringId(id: number | string) {
    console.log(`Your ID is: ${id}`);
}
```

- 不允许使用只有某个类型**特有**的方法

## type check

- 通过一个值的shape来判断这个值的类型

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

1. 在上面的例子中`point`并没有声明为`Point`类型，typescript类型检查时对比point的**shape**和Point的**shape**，如果相同则认为是Point类型
2. ts匹配的是对象字段的子集, `point3`, `rect`中有x, y字段, `color`中没有, 所以color不是Point类型
3. 类型检查对于`class实例`同样有效


## function type

## type inference

- 对于没有显式[type annotation](#type-annotation)的变量, ts会自动推断出类型
- 当被推断的值由多个表达式组成时, ts会推断出一个Best Common type(最佳通用类型), 通常会推断出一个[联合类型](#union-types)

```ts
let x = [0, 1, null];  // x: (number | null)[]
```

contextual typing

- 如果window.onmousedown函数之前有过定义, 再次赋值时, ts会推断参数类型

```ts
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);    //
    console.log(mouseEvent.kangaroo);  // error!
};
```

## type assertion

> like type annotation, removed by compiler

- 有时候对于有些值, coder自己知道类型, 而ts无法推断出来, 这时候可以使用类型断言
- 使用类型断言后可以调用断言类型的方法

```ts
interface Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
function fb(p: Point) {
    return (p as Point3d).z;
}
```

## Narrowing

- Narrowing: 通过分析[type check](#type-check), 将类型提炼为更具体的类型

## Keyof operator

- takes an **object type** and produces a string or numeric literal union of its keys
- key的含义是Object的属性, 也就是属性的类型, **不是属性值的类型**
- object key 的类型只能是string或者number
- 经常用于[mapped type](#mapped-types)

```ts
type A = keyof { [n: number]: unknown };  // A = number
type M = keyof { [n: string]: unknown };  // M = string | number
```

## Mapped Type

- build on [index signature](TypeScript_Interface.md#index-signatures)
- 通过另一个type来生成一个新的type, 从而避免避免repeat

比如结合[keyof operator](#keyof-operator)来生成一个新类型, 可以用少量的代码来**修改一个类型的所有属性值的类型**

```ts
type OnlyBoolsAndHorses = {
    [key: string]: boolean | Horse;
};
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
}
```

`readonly`和`?` 这两种属性修饰符可以通过mapped type来修改

- 使用`+`和`-`前缀来添加或者删除属性, 无前缀表示`+`

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

对象类型

> 属性少的兼容属性多的, 属性少的可以当做超类

- 声明为超类的对象的值可以是派生类

函数参数兼容

- 就参数数量而言
  - 参数多的兼容参数少的, 参数多的可以当做超类
  - 与参数名称无关, 只看参数类型
- 参数类型兼容
  - 超类形参兼容派生类实参
  - 函数体中只能访问超类的属性和方法
  - 使用[type assertion](#type-assertion)可以访问派生类的属性和方法

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
