# Linux - futex

## What It Is

- fast user-space mutex
- provide by the linux kernel
- is a piece of memory which can be shared between [process]() or [thread]()

## Feature

- has [semaphore](linux-semaphore.md) semantics
- mostly not be used directly, instead rely on library

## System API

- futex() system call