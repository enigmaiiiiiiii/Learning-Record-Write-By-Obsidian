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

Syntax

`eventEmitter.on(eventName, listener)`

Parameter

- `eventName`
- `listener`

## eventEmitter.emit()



