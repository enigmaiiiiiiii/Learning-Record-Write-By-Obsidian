# Condition type

## basic use

```ts
type example = Dog extends Animal ? number : string;
```

- if Dog extends Animal, then example is number, else example is string

## use with generic

combine with generic condition type can be very useful

- next code snippet main content include:
  - interface `IdLabel` and `NameLabel`
  - overload function `createLabel`

Assume a function that can receive `number`, `string`, `string | number` type parameter. And we can use overload function to implement this

```ts
interface IdLabel {
    id: number;
}
interface NameLabel {
    name: string;
}
function createLabel(id: number): IdLabel;
function createlabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createlabel(nameOrId: string | number): IdLabel | NameLabel {
    throw "unimplemented";
}
```

meanwhile, if we want to add new type, the number of overload function will increase exponentially

with **Conditional Types**, this problem can be solved

- define a type alias

```ts
type NameOrId<T extends number | string> = T extends | number ? IdLabel : NameLabel;
```

- treat `NameOrId<T>`as function, then T is the parameter of `NameOrId<T>`
- if T is number, `NameOrId<T>` is `IdLabel`, else `NameOrId<T>` is `NameLabel`

then function createLabel can be implemented as follow

```ts
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
}
let a: NameLabel = createLabel("typescript");
```

## Infer type within

```ts
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
```

- `Item` is the type of element in array
- if Type is Array, `Flatten<Type>` is alias of `Item`, else Type

```ts
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
```

- if satisfy the condition, `GetReturnType<Type>` is alias of function return type
