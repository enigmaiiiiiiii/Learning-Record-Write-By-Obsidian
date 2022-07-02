# \#运算符

```c
#include <stdio.h>
#define PSQR(x) printf("The square of " #x "is %d.\n", ((x)*(x))

int main(void)
{
    int y = 5;
    PSQR(y);
    PSQR(2 + 4);

    return 0;
}
```

输出:

```
The square of y is 25.
The square of 2 + 4 is 36.
```

## \#\#运算符

```c
#define XNAME(n) x ## n
int main(void)
{
    int XNAME(1) = 14;
    int XNAME(2) = 20;
}
```

XNAME(4)$\rightarrow$ x4

