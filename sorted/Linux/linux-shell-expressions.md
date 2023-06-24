# Linux Shell Programmming - Expressions

* [Arithmetic Expression](#arithmetic-expression)
* [Conditional Expresssions](#conditional-expresssions)
* [Extend Conditional Expressions](#extend-conditional-expressions)

## Arithmetic Expression

- double parentheses `(( ))` for arithmetic expression
- used to perform caculation

```sh
sum=$((1 + 2))
```

## evaluate expression

- use `expr` command to evaluate expression

```sh
sum=`expr 1 + 2`
```

> command in ["``"](linux-shell-variable.md#assign-value-to-variable-from-command) will assign command result to variable

## Conditional Expresssions

- double brackets `[ ]` for condition expression

> space between `[` and `]` is required. eg. `[ $num1 -eq $num2 ]`

- usualy use with [`if` statement or loops](linux-shell-flow-control.md)

```sh
if [ $num1 -eq $num2 ]; then
  echo "equal"
fi
```

## Extend Conditional Expressions

- `[[ ]]` for extended condition expression
- `if [[ [options] expression ]]; then ... fi`

options

- `[[ -e file ]]` - True if file exists
- `[[ -z string ]]` - True if the length of string is zero
- `[[ -n file ]]`
- `[[ -a file ]]` - True if file exists
- `[[ -b file ]]` - True if file exists and is a [block special]() file
- `[[ -c file ]]` - True if file exists and is a [character special]() file
- `[[ -d file ]]`


