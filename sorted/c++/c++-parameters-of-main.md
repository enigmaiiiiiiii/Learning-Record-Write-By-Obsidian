# C++ - Handle Parameter Of Main

- The `main` function commonly uses two parameters, `argc` and `argv`.
- `int main(int argc, char **argv)`
- `argc` (argument count) holds the number of arguments passed to the `main` function at **runtime**.
- `argv` (argument vector) holds the arguments passed to the `main` function at **runtime**.
  - `argv[0]` contains the full path of the program when it runs.
  - `argv[1]` and the elements after it represent the strings passed to the program on the **command line**.
  - For example, `prog argv[1] argv[2]`, where `prog` is the [**executable file**](executable-file.md).
