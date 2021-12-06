# difference between stdout and STDOUT_FILENO

- stdout是FILE* , 文件指针，参考[[LinuxIO流]]
- STDOUT_FILENO是[[文件描述符]]
- `fprintf(stdout, "x=%d\n", x)` 对应`printf("x=%d\n", x)
- `STDOUT_FILENO == fileno(stdout)`
