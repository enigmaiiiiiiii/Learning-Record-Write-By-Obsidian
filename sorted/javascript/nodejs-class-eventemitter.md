# NodeJS - EventEmitter

* [Take A Look](#take-a-look)
* [eventEmitter.on()](#eventemitter.on())
* [eventEmitter.emit()](#eventemitter.emit())

## Take A Look

Listen And Trigger a event

```ts
const EventEmitter = require('node:events');
const myEE = new EventEmitter();
// register a listener listen on event 'foo'
myEE.on('foo', () => console.log('a'));
// trigger event foo
myEE.emit('foo');
```

## eventEmitter.on()

Register an event and its listener

Syntax: `eventEmitter.on(eventName, listener)`

Parameters:

- `eventName`: string
- `listener`: callback function

## eventEmitter.emit()

Trigger specific event

Syntax: `eventEmitter.emit(eventName[, ...args])`

Parameters:

- `eventName`: string
- `args`: arguments passed to listener registered on `eventName` 


## static: on()

Syntax

- `on(emitter, eventName[, options])`

Parameters

- `emitter`: [EventEmitter](nodejs-class-eventemitter.md)
- `eventName`: string | [symbol](javascript-symbol.md)
- `options`

Returns

- [AsyncIterator](javascript-iteration-protocols.md##async-iterator-and-async-iterable-protocols)
  - the value return by each iteration is an array of [emitted event arguments](nodejs-class-eventemitter.md#eventemitteremit)


