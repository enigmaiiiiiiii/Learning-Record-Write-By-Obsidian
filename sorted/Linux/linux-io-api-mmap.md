# Linux - IO API mmap

## What It Is

- create a new mapping in the **virtual address space** of the calling process
- map file to memory, implement file operation through **pointer**, instead of file descriptor
- can be used for parent-child process communication, also can be used for unrelated process communication

## Syntax

```c
#include <sys/mman.h>

void *mmap(void *addr, size_t length, int prot, int flags, int fd, off_t offset);
int munmap(void *addr, size_t length);
```

description

`mmap()` maps the [file descriptor](linux-file-descriptor.md) `fd` to the memory area starting at [`addr`]()

Parameter

- `addr`: 映射存储区的起始地址, 通常设置为0，表示由系统选择映射区的起始地址
- `fd`: 被映射的文件描述符
- `length`: 地址映射区大小
- `prot`: 映射存储区的保护要求
  - PROT_READ: 映射区可读
  - PROT_WRITE: 映射区可写
  - PROT_EXEC: 映射区可执行
  - PROT_NONE: 映射区不可访问
  - 可以指定单一标志，也可按位或的任意组合
- `flags` possible values:
  - MAP_FIXED
  - MAP_SHARED:
  - MAP_PRIVATE:
- `offset` : 必须是分页大小的整数倍， 分页大小等于`sysconf(_SC_PAGE_SIZE)`的返回值

return value

- on success, returns the starting address of the mapped area, on failure, returns `MAP_FAILED` (which is `(void *)-1`)

## mumap() 

`mumap()` deletes the data mapped to `addr`, and the call ends automatically when the process ends