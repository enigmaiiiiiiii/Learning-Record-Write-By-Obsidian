# Vim - Concepts

## Buffer

introduction

- A in-memory text of a file, not a file

a buffer can be in one of three states

- **active**: displayed in window, if the buffer has been modified, it will be different from the corresponding file
- **hidden**: not displayed in window, except that it is the same as active buffer
- **inactive**: not displayed, not contain anything

| state    | displayed in window | loaded | ":buffers" shows |
| -------- | ------------------- | ------ | ---------------- |
| active   | yes                 | yes    | 'a'              |
| hidden   | no                  | yes    | 'h'              |
| inactive | no                  | no     | ' '              |

