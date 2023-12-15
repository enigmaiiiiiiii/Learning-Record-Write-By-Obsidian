# TypeScript - Namespace

## What It Is

- can be treated as a module inside a module

## What's For

- to avoid naming conflict

## Define A Namespace

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

  const EXP = 2.718  // invisible for outside namespace
}
```

- if you want objects in a namespace to be visible outside the namespace, you need `export` them

## alias

- `import id = x.y.z`; id is the alias of x.y.z

```ts
namespace Shapes {
    export namespace Polygons {
        export class Triangle {}
        export class Square {}
    }
}
import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // Same as 'new Shapes.Polygons.Square()'
```
