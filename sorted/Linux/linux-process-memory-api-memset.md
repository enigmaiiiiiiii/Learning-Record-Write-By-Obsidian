# memset()

```c++
#include <string.h>
void *memset(void *s, int c, size_t n);
```

- fill memory with fixed type
- fill the first n bytes of the memory area pointed to by s with the constant byte c
- return a pointer to the memory area `s`
- usually use to initialize memory
