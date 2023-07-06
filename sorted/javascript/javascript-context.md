# JavaScript - Context

* [What It Is](#what-it-is)
* [Variable Object Associated With Context](#variable-object-associated-with-context)
* [Function Context](#function-context)

## What It Is

- The context of variables and functions determines what data they can access
- The global context is the outermost context
- The global context of ECMAScript is related to the host environment
- when reading identifiers in the context, in order to determine what the identifier represents,
  - search along the [scope chain](javascript-scope-chain.md) from front to back (from inside to outside)
  - stop searching when found

## Variable Object Associated With Context

- every context is associated with a **variable object**
- all functions and variables defined in the context exist on this object

> for example: in browser, the global context is associated with the [window object](javascript-bom-window.md)
> variables defined by var and functions will become properties and methods of the window object

## Function Context

- function context associated with an active object
- there are only one active object at the beginning: [arguments](javascript-function-arguments.md#arguments-object)
