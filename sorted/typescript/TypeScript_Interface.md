# Interface

- 可以用作返回值类型
- 可以用作参数类型

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