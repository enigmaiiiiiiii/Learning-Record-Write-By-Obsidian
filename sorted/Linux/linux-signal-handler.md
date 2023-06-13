# Linux - Signal Handler

## What It Is

- A signal handler is a **function**
- that is called when a particular signal occurs

## Signal Handler Type

- `signhandler_t`

## Register A signal handler

- `signal()` registers a signal handler

```c
#include <signal.h>

void sigint_handler(int sig) {
    printf("Caught SIGINT!\n");
}

int main() {
  signal(SIGINT, sigint_handler);
}
```

