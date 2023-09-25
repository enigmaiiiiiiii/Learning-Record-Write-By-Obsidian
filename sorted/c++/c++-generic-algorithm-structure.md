# C++ - Generic Algorithm Structure

## 5 kinds of iterators

| Iterator Type          | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| Input Iterator         | Read-only, single-pass, only increments                  |
| Output Iterator        | Write-only, single-pass, only increments                 |
| Forward Iterator       | Read-write, multi-pass, only increments                  |
| Bidirectional Iterator | Read-write, multi-pass, increments and decrements        |
| Random Access Iterator | Read-write, multi-pass, supports all iterator operations |

## parameter pattern

```c++
alg(beg, end, other args);
alg(beg, end, dest, other args);
alg(beg, end, beg2, other args);
alg(beg, end, beg2, end2, other args);
```

- `beg`, `end` indicate the range to be processed
- `beg2`, `end2` indicate a second range
- `dest` is iterator parameter

