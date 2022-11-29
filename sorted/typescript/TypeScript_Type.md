# type in typescript

[what can be used as a type](#what-can-be-used-as-a-type)
[Type Annotation](#type-annotation)
[type aliases](#type-aliases)
[Union Types](#union-types)
[type check](#type-check)
[function type](#function-type)
[type inference](#type-inference)
[type assertion](#type-assertion)
[keyof operator](#keyof-operator)

- **types are always fully erased at runtime**

## Type Annotation

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

## type aliases

- 定义type
- 方便Union Types的使用
- 可用于对象, 也可以用于基本类型

```ts
type ID = number | string;
type Point = {
    x: number;
    y: number;
}
```
- Point表示一个类型符号, 这个类型有x和y两个属性, 且类型都是number

可以用`&`来组合类型, 实现**extends**的效果

```ts
type Animal = {
    name: string;
}
type Bear = Animal & {
    honey: boolean;
}
```

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

## Narrowing

- Narrowing: 通过分析[type check](#type-check), 将类型提炼为更具体的类型


## keyof operator

