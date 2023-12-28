# Shell - Function

* [Declare And Call](#declare-and-call)
* [one line function](#one-line-function)
* [Caveat](#caveat)

## Declare And Call

`add.sh`

```sh
function add() {
  sum = $(( $1 + $2 ))
  echo $sum
}
# call
add 5 10
```

output:

```sh
$ ./add.sh
15
```

- `function` keyword is optional

## Parameter Expansion

remove prefix

- for `${1}` represents the first parameter
- `${1#./}` will remove the prefix `./` from the first parameter

```sh
foo() { echo "${1#./}"; }
```

- [glob pattern](glob-pattern.md) is available for prefix part
- can not use [regex](regex.md)
- if regex is needed, use [sed](linux-sed.md) instead

## One line function

";" is required before "}"

```sh
add() { echo $(( $1 + $2 )); }
```

- ";" is required after `echo $(( $1 + $2 ))`

## Caveat

1. return a text

- not `return` keyword
- `echo` will work

```sh
function add() {
  sum=$(($1 + $2))
  echo $sum
}
```

2. text will treat as command

```sh
function foo() {
  "hello"
}
foo
```

- when call `foo`, it will execute `hello` command
- so "hello: command not found" is print

```sh
./somescript.sh: line 2: hello: command not found
```

