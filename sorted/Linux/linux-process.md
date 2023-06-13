# Linux - Process

## What Is This

- process is an instance of program
- process context: text, data, virtual address space, heap, shared memory, user stack

## Process State

- Running
- Waiting
- uninterruptible Sleep
- Stopped
- Zombie
- Dead
- Paging

## Kernel Space

- where the code and data of the [kernel]() is stored and execute under
- What processes run in kernel space?
  - operating system kernel
  - device drivers

## User Space

- where normal user processed run
- the key difference between kernel space
  - access level
    - kernel space has full access to the underlying hardware
    - user space has limited access to the underlying hardware

## futex

[futex](linux-futex.md)

## Daemon

[Daemon](linux-daemon.md)
