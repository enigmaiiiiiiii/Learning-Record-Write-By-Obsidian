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

`ps -l` output field

| Field | Description                         |
| ----- | ----------------------------------- |
| F     | Program flag                        |
| S     | Program status                      |
| PID   | Program process ID                  |
| PPID  | Parent process ID                   |
| C     | CPU resource usage percentage       |
| PRI   | Priority                            |
| NI    | Nice value                          |
| ADDR  | Memory location                     |
| SZ    | Used memory size                    |
| WCHAN | Whether the program is running      |
| TTY   | Terminal location of the login user |
| TIME  | CPU time used                       |
| CMD   | Issued command                      |

## Practical Use

`ps -aux`

- list processes related to all users

`ps -ef| grep dhcp`

- list processes that contain dhcp
