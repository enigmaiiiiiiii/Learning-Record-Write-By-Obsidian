# JavaScript - Iteration Protocols

* [Features](#features)
* [Iterator protocol](#iterator-protocol)
* [Iterable protocol](#iterable-protocol)
* [Async iterator and async iterable protocols](#async-iterator-and-async-iterable-protocols)
* [IteratorResult Interface](#iteratorresult-interface)

## Features

- not built-in objects or syntax

## Iterator protocol

- defines a standard way to produce a sequence of values
- iterator protocol methods are `next(), return(), throw()`

## Iterable protocol

- allows user to **customize** iteration behavior of an object, such as `for...of` statement
- in order to be iterable, an object must implement the [`@@iterator`](javascript-symbol.md#well-known-symbols) method

## Async iterator and async iterable protocols

- very similar interfaces compared to the iterable and  iterator protocols
- allows user to customize the behavior of asynchronous iteration, such as [`for await...of` statement](javascript-statement.md#for-awaitof)
- in order to be **async iterable**, an object must implement the [`@@asyncIterator`](javascript-symbol.md#well-known-symbols) method
- except that each value from the calls to the iterator methods is wrapped in a [promise](javascript-promise.md)

## IteratorResult Interface

Object implement `IteratorResult` must have following properties 

- `done`: boolean value
  - `true`: iterator has completed(exited from last yield or exit by return) its sequence
  - `false`: if iterator was able to produce the next value 
- `value`: the value returned by the iterator


