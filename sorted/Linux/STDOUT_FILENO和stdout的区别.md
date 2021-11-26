# difference between stdout and STDOUT_FILENO

- stdout是FILE*
- STDOUT_FILENO是文件描述符
- `fprintf(stdout, "x=%d\n", x)` 对应`printf("x=%d\n", x)
- `STDOUT_FILENO == fileno(stdout)`
