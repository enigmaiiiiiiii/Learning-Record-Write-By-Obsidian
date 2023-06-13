how to analysis a process futex wait problem in linux

what is the concept of user space in linux?

A futex is identified by a piece of memory which can be shared  between  processes or  threads.
In these different processes, the futex need not have identical addresses.
In its bare form, a futex has semaphore semantics;
it is a counter  that can be incremented and decremented atomically;
processes can wait for the value to become positive.

## commit message

1. disposition []n. 处置，处理，布置，安排