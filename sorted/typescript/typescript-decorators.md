# TypeScript - Decorators

> same concepts in java [annotation](java-annotation.md)

* [What Is Decorator](#what-is-decorator)
* [Define Decorator](#define-decorator)
* [A Decorator Can be Used On Everything](#a-decorator-can-be-used-on-everything)
* [Decorator Factories](#decorator-factories)
* [How To Use Decorator](#how-to-use-decorator)
* [Decorator Evaluation(Execute) Order](#decorator-evaluation(execute)-order)
* [Class Decorator](#class-decorator)
* [Property Decorators](#property-decorators)
* [Method Decorators](#method-decorators)
* [Accessor Decorators](#accessor-decorators)
* [Parameter Decorators](#parameter-decorators)
* [Built-In Decorators](#built-in-decorators)
* [When To Use](#when-to-use)

## What Is Decorator

- A special **function** that can be attached to class declaration, method, accessor, property, parameter
- Called at runtime

## Define Decorator

For example

```ts
function sealed(target) {
    // do something with 'target' ...
}
```

## A Decorator Can be Used On Everything

```ts
function foo(...args: any[]) {
    // do something
}

class Dog {
    constructor(
        @foo public name: string,
    ) {}
    )

    @foo
    public sayHello() {
        // do something
    }
}
```

## Decorator Factories

```ts
function color(value: string) {
    // this is the decorator factory
    // it sets up returned decorator function
    return function(target) {
        // do something with target and value
    }
}
```

Why Decorator Factories?

## How To Use Decorator

```ts
@sealed
function foo() {

}
```

apply multiple decorators

- decorate on property `x`

```
@f @g x
```

- on multiple lines

```
@f
@g
x
```

`this` in decorator

- `this` is the instance of the decorated class 

```ts
function foo(target: any, properKey: string | symbol, descriptor: TypedPropertyDescriptor<Function>): void {
  descriptor.value = function () {
    console.log("hello " + this.name)
  }
}

class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }

  @foo
  greet() { /* do nothing */ }
}

const p = new Person("John")
p.greet()  // hello John
```

## Decorator Evaluation(Execute) Order

1. Parameter Decorators, followed by Method, Accessor, or Property Decorators are appied for each **instance** member
2. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each **static** member

## Class Decorator

function type of class decorator

```ts
type D = <TFunction extends Function>(target: TFunction) => TFunction | void;
```

parameters:

- `target`: [constructor function](javascript-constructor.md) of the class

return:

- if return a value, the value will be a new constructor function

what can't be done with class decorator

```ts
declare function Foo<T>(target: T): T & {foo: number}

@Foo
class Bar {
    method() {
        return this.foo
    }
}
```

## Property Decorators

function type of property decorator

```ts
type D = (target: Object, propertykey: string | symbol) => void;
```

parameters

- `target`:
  - [prototype](javascript-prototype.md) of the class for an **instance member**
  - or [constructor function](javascript-constructor.md) of the class for a **static member**
- `propertyKey`: name of the member

return

- no return value

## Method Decorators

function type of method decorator

```ts
type D = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
```

type parameters: `T`

- corresponding to the `descriptor.value` type

parameters:

- `target`
  - prototype of the class for an **instance member**
  - or constructor function of the class for a **static member**
- `propertyKey`: name of the member
- `descriptor`: property descriptor of the member

return:

- if return a value, it will replace the [descriptor]() of the member

code

> use [@ts-ignore](typescript-ignore-errors.md) to ignore typescript error on adding property with decorator to class at runtime

```ts
function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function prop(target: any, key: string): any {
  const targetKey = "set" + capitalizeFirstLetter(key)
  target[targetKey] = function (val: any) { 
    this[key] = val;
  }
}

class Point {
  @prop
  x = 1;
  @prop
  y = 2;
}
const point = new Point()
console.log(point)
// @ts-ignore
point.setX(3)
// @ts-ignore
point.setY(5)
console.log(point)
```

## Accessor Decorators

function type of [accessor](typescript-class.md#getters/setters) decorator

- same as [method decorator](#method-decorators)

the difference against method decorator is keys of property descriptor parameter

- method decorator
  - value
  - writable
  - enumerable
  - configurable
- descriptor
  - get
  - set
  - enumerable
  - configurable

## Parameter Decorators

function type of parameter decorator

```ts
type D = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
```

parameters

- `target`: 
  - prototype of the class for an **instance member**
  - or constructor function of the class for a **static member**
- `propertyKey`: name of the member
- `parameterIndex`: index of the parameter in the function's parameter list

returns

- no return value

## Built-In Decorators


## When To Use

- Before/After hooks
- Watch property changes and method calls
- Transform parameters
- Add extra methods or properties
- Runtime type validation
- Auto serialization and deserialization
- [Dependency Injection](design-pattern-dependency-injection.md)
