# Linux 

[linux-manual](linux-manual.md)

## Environment Table

- Environment Table is To store all environment variables of a process
- Environment is a character pointer array
- format `name = value` , like `"HOME=/home/linux"`

## Query And Modify Environment Variables

```c++
#include <stdlib.h>
char *getenv(const char *name);
int putenv(char *str);
```
