# JavaScript - new Operator

* [What's for](#whats-for)
* [Use On A Function](#use-on-a-function)

## What's for

- used to create an instance of a **user-defined object type**
- or of one of the **built-in** object types that has a constructor function

## Use On A Function

> function called with `new` operator is called [**constructor function**](javascript-constructor.md)

what will do when call a function with `new` operator

1. create a empty, plain javascript object, called `newInstance`
2. `newInstance`'s [internal prototype](javascript-three-prototype-concepts.md#internal-prototype) points to function's [prototype](javascript-three-prototype-concepts.md#prototype-property)

> the meaning of **connect**: `obj.prototype.prototype = super.prototype`

3. Executes the function with given arguments
4. assign the `newInstance` to `this` inside the function, `this = newInstance`
5. if no other object returned, `new` expression return `newInstance`

```js
var o = new Foo();
o.__proto__ = Foo.prototype;
Foo.call(o);
````
