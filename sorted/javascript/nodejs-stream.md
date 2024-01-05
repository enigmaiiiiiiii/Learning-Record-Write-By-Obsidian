# NodeJS - Stream

* [What It Is](#what-it-is)
* [Class: Stream.Writeable](#class:-stream.writeable)
* [Class: Stream.Readable](#class:-stream.readable)

## What It Is

- all streams are instance of [EventEmitter](nodejs-class-eventemitter.md)

## Class: Stream.Writeable

## Class: Stream.Readable

event

- Event `data`: emitted whenever the stream is relinquishing ownership of a chunk of data to a consumer
- Event `end`
- Event `error`

method

- `pipe(distination[, options])`
  - `distination`: [Writeable](#class-streamwriteable)

