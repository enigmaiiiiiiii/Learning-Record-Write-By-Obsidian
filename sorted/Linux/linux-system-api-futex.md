# Linux - System API futex()

## description

- user space program employs futex() when the program has to block for a longer time until the condition come true

## Syntax

```c
#include <linux/futex.h>
#include <sys/stdint.h>
#inlcude <sys/time.h>

long futex(
  uint32_t *uaddr,
  int futex_op,
  uint32_t val,
  const struct timespec *timeout,
  uint32_t *uaddr2,
  uint32_t val3
)
```

- `uaddr`: futex address
- `futex_op`: futex operation
- `val`: depends on the `futex_op`

optioned parameters:

- `timeout`:
- `uaddr2`:
- `val3`:

