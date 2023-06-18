# Linux - POSIX Semaphore

## What It Is

- Is an integer whose value is never allowed to fall below zero
- only one process can be access it at a time
- operations performed on it are increment and decrement
- placed in shared memory using [mmap](linux-io-api-mmap.md), in order to be shared between processes

Use Case

- processes can share memeory or I/O resources

## How It Works

when process performs a [wait](linux-system-api-sem_wait.md) operation on a semaphore

- when semaphore is 0, the process is blocked
- when semaphore is greater than 0, the process can continue to execute and the semaphore is **decremented by 1**

when process performs a [post](linux-system-api-sem_post.md) operation on a semaphore

- increment the semaphore by 1

## Feature

- POSIX solves the shortcomings of [systemv semaphore](linux-systemv-semaphore.md)
  - higher performance implementation
  - easier to use
  - POSIX semaphore can continue to work until the last reference is released when it is deleted
- Two forms of POSIX semaphore: [named](#named-semaphore) and [unnamed](#unnamed-semaphore)
  - named semaphore can be used in different processes
  - unnamed semaphore can only be used in the same process

## Semaphore API

[sem_open()](linux-system-api-sem_open.md)

[sem_wait()](linux-system-api-sem_wait.md): decrement semaphore by 1

[sem_post()](linux-system-api-sem_post.md): increment semaphore  by 1

[[sem_close()函数]]

[[sem_unlink()函数]]


## unnamed semaphore

[[sem_init()函数]]

[[sem_destory()函数]]
