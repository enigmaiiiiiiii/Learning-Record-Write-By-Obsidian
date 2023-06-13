# Linux - kill

## Description

- [Send a signal](linux-signal.md#how-to-send-signal) to process
- `kill -l` list the name signal

## Syntax

`kill [-signal] PID`

## killall

`killall <process_name>`: kill all processes with the same name

## Practical Use

`kill -1 %PID`

- `-HUP(1)`: reload a process

`kill -9 %PID`

- will send a [`SIGKILL`](linux-standard-signal.md) signal to the process
- this signal cannot be caught or ignored
- `-KILL(9)`: kill a process

`kill -15 %PID`

- will send a [`SIGTERM`](linux-standard-signal.md) signal to the process
- which give process a chance to clean up before exit
- `-TERM(15)`: gracefully stop a process
