# JavaScript - Statement

* [for...in statement](#forin-statement)
* [for...of statement](#forof-statement)
* [break vs continue](#break-vs-continue)
* [label statement](#label-statement)
* [with statement](#with-statement)

## for...in statement

- to enumerate the non-symbol keys of an object
- include the properties inherited from the prototype chain
- variable represents the property name or enumberable property

In ECMAScript, object properties are unordered

- All properties will be returned once,
- but the return order may vary from browser to browser

## for...of statement

- used to iterate over iterable objects like arrays, strings, maps, sets
- each iteration create a new variable
- reassigning the variable inside loop does not affect the original value

```js
const list = [1, 2, 3];
for (let l of list) {
  console.log(l);
}
```

## break vs continue

- `break`: exit the loop
- `break label`: exit the loop then execute the statement after the label
- `continue`: skip the current iteration. enter the next iteration
- `continue label`: skip the current iteration. enter the next iteration then execute the statement after the label

## label statement

- `label: statement`
- to implement stream control in break or continue statement

## with statement

## for await...of    

Syntax

```js
for await (variable of iterable) {
  // statement
}
```

- `variable`: variable to assign the value of each iteration
- `iterable`: An async iterable or sync iterable
  - gets [`[@@asyncIterator]()`](javascript-iteration-protocols.md) method first
  - if not found, get [`[@@iterator]()`](javascript-iteration-protocols.md) method, then wrap the return into an async iterator
    - wrapping object returned from [`next()`, `return()`, `throw()`](javascript-generator.md) into a [promise](javascript-promise.md)

