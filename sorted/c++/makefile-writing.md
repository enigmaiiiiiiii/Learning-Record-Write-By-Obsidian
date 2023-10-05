# Makefile - Writing

## Clean

- `clean` is a target to removes the output of other target

```makefile
some_file:
    touch some_file
clean:
    rm -f some_file
```

- it's not a target at first
- no prerequisites for `clean`
- That means, based on [execution process](makefile-execution-process.md), it will never, unless explicitly call `make clean`

## Unistall



