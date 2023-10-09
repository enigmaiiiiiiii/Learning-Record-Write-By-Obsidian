# CMake - Variable

## define variable

define normal variable

```cmake
SET(HELLO "hello cmake")
SET(NUM 42)
SET(FLAG TRUE)
```

define list variable

```cmake
set(MY_LIST "one" "two")
set(MY_LIST "one;two")
```

- `"one;two"`
- those two ways of set list variable are the same, both set `MY_LIST` to `one;two`

## Read Variable

Reading variable use `${VAR_NAME}`

```cmake
MESSAGE(STATUS "say: ${HELLO}")
```

## Read Environment Variable

Reading environment variable use `$ENV{VAR_NAME}`

```cmake
MESSAGE(STATUS "PATH: $ENV{PATH}")
```

## Set Environment Variable

```cmake
SET(ENV{PATH} "/usr/bin")
```

- only afferct current cmake process
  - not the process which cmake was called
  - not the system environment at large

## Variable Scope


## VS Target

- variable is for cmake file
- target is things about compile C or C++ program, such as program and library

