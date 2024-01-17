# NodeJS - Child Process

## Features

- spawn subprocesses
- primarily function `child_process.process.spawn()`
- extends [`EventEmitter`](nodejs-class-eventemitter.md)
- pipes for [`stdin`](nodejs-class-childprocess.md#property-childprocess.stdin), [`stdout`](nodejs-class-childprocess.md#property-childprocess.stdout), `stderr` are established between the parent and child process

## Event

- `close`
- `disconnect`
- `error`
- `exit`
- `message`
- `spawn`

## `child_process.exec()`

## `child_process.spawn()`

what's for

syntax

`child_process.spawn(command[, args][, options])`

parameters

- `command`: command to run
- `args`: command args
- `options`

return

- a [`ChildProcess`]() instance


## `child_process.fork()`

## Class: ChildProcess

[Class: ChildProcess](nodejs-class-childprocess.md)



