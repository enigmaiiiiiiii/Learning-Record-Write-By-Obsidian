# Linux Programming - sem struct

- 可以由一个匿名结构表示

```c
struct {
  unsigned short semval;
  pid_t sempid;
  unsigned short semncnt;
  unsigned short semzcnt;
}
```

at least include following members

- `semval`: 信号量当前值
- `sempid`: 最后操作该信号量的进程ID
- `semncnt`: 等待对该信号量执行P操作的进程数
- `semzcnt`: 等待senval=0的进程数
