# Makefile - Implicit Rules

## Pattern Rules

- pattern rule is used to [define implicit rules](#define-implicit-rules)
- must include `%`
- substring that matches `%` is called **stem** 
- `%` in [prerequisite](makefile-syntax.md#prerequisites) stand for the same stem matched in [target](makefile-syntax.md#targets)

## define Implicit Rules

```makefile

```

## Using Implicit Rules

An implicit rule is applied when the required prerequisites "exist or can be made"

prerequisites "exist"

```makefile
foo.o:
%.o: %.c
	gcc -c -fPIC $^ -o $@
```

- there is no prerequisites given in rule `foo.o:`, but file `foo.c` exists, so `make` will use implicit rule to make `foo.o`

prerequisites "can be made"

```makefile
foo: foo.o bar.o
    cc -o foo foo.o bar.o $(CFLAGS) $(LDFLAGS)

%.o: %.c
	gcc -c -fPIC $^ -o $@
```

- `foo.o` is mentioned, but no rule for making it, `make` will automatically look for an implicit rule

## Built-it Rules



