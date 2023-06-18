# Linux - ps

## What It Is

- display information of the active process

## Syntax

`ps [options]`

Options

- `-l` list processes in long format
- `-A` list all processes
- `-a` list processes that are not related to the current terminal
- `-w` wide output
- `-u` list processes related to the current user

output field

| Field | Description                                        |
| ----- | -------------------------------------------------- |
| F     | Program flag                                       |
| S     | Program status                                     |
| PID   | Program process ID                                 |
| PPID  | Parent process ID                                  |
| C     | CPU resource usage percentage                      |
| PRI   | Priority                                           |
| NI    | Nice value                                         |
| ADDR  | Memory location                                    |
| SZ    | Used memory size                                   |
| WCHAN | Whether the program is running                     |
| TTY   | Terminal location of the login user                |
| STAT  | [State of Process](linux-process.md#process-state) |
| TIME  | CPU time used                                      |
| CMD   | Issued command                                     |

`STAT` possible values

> It is **more** than process standard state

- `D`: Uninterruptible [sleep]() (usually I/O)
- `I`: Idle kernel thread
- `R`: Running or runnable (on run queue)
- `S`: Interruptible sleep (waiting for an [event]() to complete)
- `T`: Stopped by a [job control](linux-standard-signal.md#job-control-signal) signal
- `t`: Stopped by debugger during the tracing
- `W`: [Paging] (not valid since the 2.6.xx kernel)
- `X`: [dead] (should never be seen)
- `Z`: [defunct ("zombie") process](), terminated but not reaped by its parent

`WCHAN` possible values

- `-`: Process is running
- `poll_schedule_timeout`: Process is waiting for I/O
- `do_select`: Process is waiting for a file descriptor to become ready
- `futex_wait_queue_me`: Process is waiting for a [futex]()
- `wait_on_page_bit`: Process is waiting for a [page lock]
- `schedule`: Process is waiting for a CPU

`TTY` possible values

## Practical Use

`ps -aux`

- list processes related to all users

`ps -ef| grep dhcp`

- list processes that contain dhcp
