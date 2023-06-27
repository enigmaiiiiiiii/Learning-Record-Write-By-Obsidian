# Linux - Standard Signal

> use `man 7 signal` to check standard signal

## Some Common Signals

| Signal | Name    | Description                    |
| ------ | ------- | ------------------------------ |
| 1      | SIGHUP  | Hang up (terminate)            |
| 2      | SIGINT  | Interrupt (terminate)          |
| 3      | SIGQUIT | Quit (terminate and dump core) |
| 9      | SIGKILL | Kill (terminate immediately)   |
| 15     | SIGTERM | Terminate (gracefully)         |

- `SIGINT`: is sent When Press `Ctrl+C`

## Signal Sorting

- Job Control

## Job Control Signal

| Signal | Name    | Description                    |
| ------ | ------- | ------------------------------ |
| 2      | SIGINT  | Interrupt (terminate)          |
| 20     | SIGTSTP | Terminal stop (suspend)        |
| 18     | SIGCONT | Continue (restart)             |
| 1      | SIGHUP  | Hang up (terminate)            |
