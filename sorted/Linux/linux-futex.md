# Linux - futex

## What It Is

- fast user-space mutex
- provide by the linux kernel
- Is a piece of **memory** which can be shared between [process]() or [thread]()
- Mostly is 32-bits integer represent the **address** of the futex
- placed in shared memory using [mmap](linux-io-api-mmap.md), in order to be shared between processes

> 32-bits in all platform, including 64-bits system

futex word concept



## Feature

- has [semaphore](linux-semaphore.md) semantics
- mostly not be used directly, instead rely on library
- for one futex
  - may have different [virtual address]() in different process
  - different [virtual address]() refer to same location in physical memory

## System API futex

[futex()](linux-system-api-futex.md)
