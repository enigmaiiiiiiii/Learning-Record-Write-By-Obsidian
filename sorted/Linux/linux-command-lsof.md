# Linux - Command lsof

## What This Commadn Do

- list open files

## Syntax

- `lsof [option] filename`

## Fields of Output

| COMMAND      | PID        | FD  | TYPE      | DEVICE | SIZE      | NODE       | NAME                      |
| ------------ | ---------- | --- | --------- | ------ | --------- | ---------- | ------------------------- |
| process name | process id |     | file type |        | file size | index node | whole path of opened file |

- `lsof file_name`: display all processes that open the file with name `file_name` 
- `lsof -c string`: display all processes that opened by command `string`
- `lsof -u username`: display all processes that opened by user `username`
- `lsof -i PID`

