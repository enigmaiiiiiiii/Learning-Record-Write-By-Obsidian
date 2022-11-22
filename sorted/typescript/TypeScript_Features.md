# Features(特色)

## Type Annotations

- Type annotations are a way to tell TypeScript what type of value a variable will refer to.
- Doesn't use the left-style declarartions, like `int x = 0;`

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

## Union Types

[c++用也有union type](c++_union_type.md)

```ts
function pringId(id: number | string) {
    console.log(`Your ID is: ${id}`);
}
```

- 不允许使用只有某个类型**特有**的方法

## Type Aliases

- 方便Union Types的使用
- 也可以用于其他类型

```ts
type ID = number | string;
type Point = {
    x: number;
    y: number;
}
```

- 可以用`&`来组合类型, 实现**extends**的效果

```ts
type Animal = {
    name: string;
}
type Bear = Animal & {
    honey: boolean;
}
```

## interface

Define an interface

```ts
interface Point {
    x: number;
    y: number;
}
```

Extend an interface

```ts
interface Point3D extends Point {
    z: number;
}
```

Add properties to an interface

```ts
interface Point {
    x: number;
    y: number;
}
interface Point {
    z: number;
}
```

- interface 和 [type aliases](#Type-Aliases) 的关键区别: **type alias can't re-open to add properties**

## Narrowing

[ ] todo

## ts中的类型检查

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