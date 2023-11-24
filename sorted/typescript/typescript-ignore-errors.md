# TypeScript - Ignore Errors

## @ts-ignore

Typescript may offer you errors which you disagree with

Add `// @ts-ignore` preceding the line to ignore the error

For Example, when use decorator to add a property to a class

- use `// @ts-ignore` to ignore typescript error on adding property with decorator to class at runtime

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
console.log(point) // Point { x: 1, y: 2 }

// @ts-ignore
point.setX(3) // if no @ts-ignore, error: Property 'setX' does not exist on type 'Point'.
// @ts-ignore // same as setX
point.setY(5)
console.log(point) // Point { x: 3, y: 5}
```


