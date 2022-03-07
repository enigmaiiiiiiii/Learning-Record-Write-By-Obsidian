# buffer

- 内容载体`std::vector<char> buffer_`
- writePos_和readPos_用来描述分散读写在内存中的位置
- `ReadFd()`
  - 将fd的内容分散读到iovec结构体
  - 以内容载体buffer_的指针 作为 iovec结构体中用到的地址成员
- `WriteFd(int fd, int *saveErrno)`  
  - 将buffer_内容写入fd