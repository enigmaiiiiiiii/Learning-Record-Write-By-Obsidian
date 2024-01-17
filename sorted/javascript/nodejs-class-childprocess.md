# NodeJS - Class: ChildProcess

## Features

- Extends [`EventEmitter`](nodejs-class-eventemitter.md)

## Property: childProcess.stdin

- a [Writable Stream](nodejs-stream.md#class:-stream.writeable) represents the child process's stdin

## Property: childProcess.stdout

- a [Readable Stream](nodejs-stream.md#class:-stream.readable) represents the child process's stdout

## Event: 'exit'

emitted when:

- after child process ends
- may or may not fire after an [error event](#event-error)

[event 'exit' listener](nodejs-class-eventemitter.md#eventemitteron): `(code: number, signal: string) => void`

- `code`: The [**exit code**]() if the child exited on its own
- `signal`: The [**signal**](linux-standard-signal.md) by which the child process was terminated

## Event: 'error'

[event 'error' listener](nodejs-class-eventemitter.md#eventemitteron): `(err: Error) => void`

- `err`: [Error Object](javascript-error.md)

emitted when:

- Process could not be spawned
- Process could not be killed
- Sending a message to the child process failed
- The child process was aborted via the [`signal`]() option

