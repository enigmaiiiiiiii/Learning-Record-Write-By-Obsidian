# Code

```c++
#include <stdlib.h>  
#include <unistd.h>  
#include <stdio.h>  
  
int main() {  
  write(STDOUT_FILENO, "1 ", 2);  // put "1 " into buffer
  printf("2 ");  
  write(STDOUT_FILENO, "3 ", 2);  // put "3 " into buffer
  printf("4 \n5 ");  
  printf("6 ");  
  write(STDOUT_FILENO, "7 ", 2);  
  return 0;  
}
```

Buffer Type

- full buffer : buffer is full, then send content and flush buffer, usually in file input
- line buffer : flush buffer when newline appears, like keyboard input, printf function
- no buffer : output directly after input, like `write()` function

In Code

- printf is **line buffer**
- write is **no buffer**
- so the result is

```
1 3 2 4
7 5 6
```
