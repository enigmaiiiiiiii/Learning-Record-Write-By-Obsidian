# Iteration in JavaScript

* [Description](#description)
* [Generator Function](#generator-function)
* [Generator](#generator)
* [yield](#yield)
* [Iterator protocol](#iterator-protocol)
* [Iterable protocol](#iterable-protocol)

## Description

- **calling** generator function, will return a [Generator](javascript-generator.md)对象
  - at the beginning, [generator function](#generator-function) at paused state
    - that is to say, the code in function body has not been executed
  - generator function will execute at the first time when `next()` method is called
    - the `next()` method is called through [ generator object ](#generator)
- keyword yield

## Generator Function

[Generator Function](javascript-generator-function.md)

## Generator

[Generator](javascript-generator.md)

## yield

- used to pause and resume a generator function

## Iterator protocol

- use to define the iteration behavior of an object, such as `for...of` statement
## Iterable protocol

