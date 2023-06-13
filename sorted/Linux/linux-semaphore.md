# Linux - POSIX Semaphore

## What It Is

- Is an integer whose value is never allowed to fall below zero

## Feature

- POSIX solves the shortcomings of [systemv semaphore](linux-systemv-semaphore.md)
  - higher performance implementation
  - easier to use
  - POSIX semaphore can continue to work until the last reference is released when it is deleted
- Two forms of POSIX semaphore: [named](#named-semaphore) and [unnamed](#unnamed-semaphore)
  - named semaphore can be used in different processes
  - unnamed semaphore can only be used in the same process

## named semaphore

[sem_open()](linux-system-api-sem_open.md)

[[sem_close()函数]]

[[sem_unlink()函数]]

[[sem_wait()函数]]

[[sem_post()函数]]

## unnamed semaphore

[[sem_init()函数]]

[[sem_destory()函数]]
