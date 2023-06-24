# Shell - Function

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

```sh
$ ./add.sh
15
```